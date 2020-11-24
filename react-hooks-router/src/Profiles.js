import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile'

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

const Profiles = () => {
    return (<div>
        <h3>유저목록</h3>
        <ul>
            <li>
                <Link to="/profiles/kbh">kbh</Link>
            </li>
            <li>
                <Link to="/profiles/kbh2">kbh2</Link>
            </li>
        </ul>
        <Route path="/profiles" exact render={()=><div>유저선택</div>} />
        <Route path="/profiles/:username" component={Profile}></Route>
    </div>
    );
};

export default Profiles;