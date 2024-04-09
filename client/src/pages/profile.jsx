import { useQuery } from '@apollo/client';
import React from 'react';
import AuthService from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

const Profile = () => {
    const profileData = AuthService.getProfile().data;
    const { data: userData, loading: userLoading, error: userError } = useQuery(QUERY_ME, {
      variables: {
        id: profileData.me
      }
    });
    
    if (userLoading) return <p className='text-center my-5'>Loading User Data...</p>;

    if (userError) return <p className='text-center my-5'>Error loading User Data: <em>{userError.message}</em></p>;
  
    const user = userData.me;

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Profile</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Username:</h3>
                    <p className="text-gray-700">{user.username}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Photo Gallery:</h3>
                    {/* You can add your photo gallery component here */}
                    {/* Example: <PhotoGallery /> */}
                </div>
                <Link to="/edit-profile" className="text-blue-500 hover:underline">Edit Profile</Link>
            </div>
        </div>
    );
};

export default Profile;
