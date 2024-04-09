import { useQuery } from '@apollo/client';
import React from 'react';
import AuthService from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/photogallery';
import Topbar from '../components/topbar';
import Navbar from '../components/navbar';

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

        <div className="container mx-auto w-full ">
            <Topbar />
            <Navbar />
            <div className="max-w-lg mt-20 mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">Profile</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Hi {user.username} welcome back!</h3>
                    <p className="text-gray-700"></p>
                    <div>
                      <h1 className='text-xl font-semibold mb-2 mt-7'>Your Bio:</h1>  
                    </div>
                <p className='text-gray-700 text-lg'>{user.bio}
                    </p> 
                    <div className='flex justify-between mt-10'>
                    <p>Photos: 0
                        </p>
                        <p>
                            Photos Brought: 0
                        </p>
                        <p>
                            Photos Sold : 0
                        </p>
                        </div>      
                </div>
                <div className='flex justify-between'>
                <button>
                <Link to="/editprofile" className="text-lime-700 hover:underline">Edit Profile</Link>
                </button>
                <button>
                <Link to="/explore" className="text-lime-700 hover:underline">Post a Photo</Link>
                </button>
                <button>
                <Link to="/photoform" className="text-lime-700 hover:underline">Edit Gallery</Link>
                </button>
                </div>
            </div>
            <PhotoGallery />
        </div>
    );
};

export default Profile;
