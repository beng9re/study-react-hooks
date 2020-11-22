import React from 'react';

const profileData = {
    kbh : {
        name : 'kims',
        description : "장난"
    },
    kbh2 : {
        name : 'kims',
        description : "장난2"
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = profileData[username];
    if(!profile) {
        return <div>미존재 계정 </div>
    }

    return (<div>
        <h3>
            {username} ({profile.name})
        </h3>
        <p>{profile.description}</p>
    </div>
    );
};

export default Profile;