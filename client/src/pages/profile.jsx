import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import AuthService from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  const profileData = AuthService.getProfile().data;
  const { data: userData, loading: userLoading, error: userError } = useQuery(QUERY_ME, {
    variables: {
      id: profileData.me
    }
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  if (userLoading) return <p className='text-center my-5'>Loading User Data...</p>;

  if (userError) return <p className='text-center my-5'>Error loading User Data: <em>{userError.message}</em></p>;

  const user = userData.me;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here, e.g., updating username and password
  };

  return (
   <div className="flex flex-col items-center min-h-screen  pt-6 sm:justify-center sm:pt-0 bg-gray-50">
  <div className='w-full overflow-hidden max-w-md p-6 bg-white rounded-lg shadow-lg'>
    <Link to={'/'}>
    <button className='mb-4 border p-1 rounded-md bg-red-700 text-white'>Back</button>
    </Link>
    <h2 className='text-3xl font-semibold mb-4'>Edit Profile</h2>
    <div>
      <div >
        <h2 className="text-xl font">Hi {user.username} any changes you would like to make?</h2>
      </div>
    </div>

    <div className="mt-6">
      {/* <h3 className="text-lg font-semibold mb-2">Edit Profile</h3> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input id="username" placeholder={user.username} type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 h-8 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input id="email" placeholder={user.email} type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 h-8 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="Bio" className="block  text-sm font-medium text-gray-700">Bio:</label>
          <textarea id="Bio" type="text" value={bio} onChange={(e) => setBio(e.target.value)} className="mt-1 py-1 inline-block border px-2  focus:ring-indigo-500 focus:border-indigo-500  w-full h-24 overscroll-none shadow-sm sm:text-sm  border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 h-8 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-700 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default EditProfile;
