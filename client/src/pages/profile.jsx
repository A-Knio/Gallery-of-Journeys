import { useQuery } from '@apollo/client'
import React from 'react'
import AuthService from '../utils/auth';
import { QUERY_USER, QUERY_ALLPHOTOS } from '../utils/queries';
// import RequestSignIn from './partials/RequestSignIn';
import { redirect } from 'react-router-dom';

const Profile = () => {
    const profileData = AuthService.getProfile().data;
  
    const { data: userData, loading: userLoading, error: userError } = useQuery(QUERY_USER);
    const { data: photoData, loading: photoLoading, error: photoError } = useQuery(QUERY_ALLPHOTOS, {
      variables: {
        id: profileData.photoId
      }
    });

    if (userLoading || photoLoading) return <p className='text-center my-5'>Loading User Data...</p>;

    if (userError) return <p className='text-center my-5'>Error loading User Data: <em>{userError.message}</em></p>;

    const { user } = userData.me;
    const { photo } = photoData

    if (photoError) return <p className='text-center my-5'>Error loading Company Data: <em>{companyError.message}</em></p>;

    return (<div className="container my-5">
        <h2>Account Info</h2>
        <div className="card">
        <div className="card-header">
          <h5>Personal Info</h5>
        </div>
        <div className="card-body">
          <p>Name: {user.username} </p>
        </div>
      </div>
    </div>
    )
}


export default Profile;