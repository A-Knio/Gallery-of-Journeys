import React from 'react';

const PhotoGallery = ({ photos }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <div key={index} className="flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                        <img src={photo.url} alt={`Photo ${index}`} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
