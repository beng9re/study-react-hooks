import React from 'react';

const TitleSeperater = ({title}) => { 

    if(!title){
        return <><hr></hr></>
    }else{
        return <><h1 color="green">{title}</h1><hr></hr></>
    }
}

export default TitleSeperater;



