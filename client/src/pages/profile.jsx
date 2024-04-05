
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useCallback, useContext, useMemo } from 'react';
import { Button, Container, Row, Card, CardText, CardImg,  } from 'reactstrap';
import { Style } from 'svg-builder/elements';

const Profile = () => {
    const [fileUrl, setFileUrl] = useState(null);
    return(
        <div className={Style.Profile}>
            <div className={Style.Profile_info}>
                <h1>Profile settings</h1>
                <p>You can edit profile here</p>
            </div>
            <div className={Style.Profile_box}>
            <div className={Style.Profile_box_img}> 
            <input />
            <image src={Images.user1} 
            alt="account upload"
            width={150}
            height={150}
            className={Style.Profile_box_img_img}
            />
            <p className={Style.Profile_box_img_para}>Change Images</p>
            </div>
            <div className={Style.Profile_box_form}>
                <Form />
            </div>
            </div>
        </div>
    );
   
};

export default Profile;
