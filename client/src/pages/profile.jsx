import { useQuery } from '@apollo/client'
import React from 'react'
import AuthService from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
// import RequestSignIn from './partials/RequestSignIn';

const EditProfile = () => {
    const profileData = AuthService.getProfile().data;
  console.log(profileData)
    const { data: userData, loading: userLoading, error: userError } = useQuery(QUERY_ME, {
      
      variables: {
        id: profileData.me
      }
    });
    // const { data: photoData, loading: photoLoading, error: photoError } = useQuery(QUERY_ALLPHOTOS, {
    //   variables: {
    //     id: profileData.photoId
    //   }
    // });

    if (userLoading ) return <p className='text-center my-5'>Loading User Data...</p>;

    if (userError) return <p className='text-center my-5'>Error loading User Data: <em>{userError.message}</em></p>;

    const  user  = userData.me;
    console.log(user);
    console.log(userData);
    // const { photo } = photoData

    // if (photoError) return <p className='text-center my-5'>Error loading Company Data: <em>{companyError.message}</em></p>;

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


export default EditProfile;