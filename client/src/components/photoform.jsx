import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_PHOTO, REMOVE_PHOTO } from '../utils/mutations';
import PhotoGallery from './photogallery';
const convertImageToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};


const PhotoForm = () => {
    const [file, setFile] = useState(null);
    const [uploadedPhotos, setUploadedPhotos] = useState([]);
    const [uploadPhoto] = useMutation(UPLOAD_PHOTO);
    const [deletePhoto] = useMutation(REMOVE_PHOTO);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        try {
            if (!file) return; // No file selected, do nothing
    
            // Determine the content type based on the file extension
            const contentType = getFileContentType(file);
    
            // Execute the mutation with the required variables
            const { data } = await uploadPhoto({ 
                variables: { 
                    description: '', // Provide empty string or any description if needed
                    image: await convertImageToBase64(file), 
                    contentType, 
                    title: file.name 
                } 
            });
    
        
            setFile(null);
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };
    
    // Function to determine the content type based on file extension
    const getFileContentType = (file) => {
        // Extract the file extension from the file name
        const fileExtension = file.name.split('.').pop().toLowerCase();
    
        // Map file extensions to corresponding content types
        const contentTypeMap = {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            // Add more file extensions and corresponding content types as needed
        };
    
        // Return the corresponding content type for the file extension
        return contentTypeMap[fileExtension] || 'application/octet-stream'; // Default to generic binary data if content type is unknown
    };

    const handleDelete = async (photoId) => {
        try {
            // Perform deletion logic here
            await deletePhoto({ variables: { photoId } });
            // Remove the deleted photo from the state
            const updatedPhotos = uploadedPhotos.filter(photo => photo._id !== photoId);
            setUploadedPhotos(updatedPhotos);
        } catch (error) {
            console.error('Error deleting photo:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
            <label htmlFor="formFile" className="block text-sm font-medium text-gray-700 mb-2">
                Add your photo
            </label>
            <div className="flex items-center space-x-4 mb-4">
                <input
                    className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border p-2"
                    type="file"
                    id="formFile"
                    onChange={handleFileChange}
                />
                <button
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleUpload}
                >
                    Upload
                </button>
            </div>
            <button
                className="block w-full text-center py-2 px-4 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={handleDelete}
            >
                Delete
            </button>
            <PhotoGallery photos={uploadedPhotos} />
        </div>
    );
};

export default PhotoForm;
