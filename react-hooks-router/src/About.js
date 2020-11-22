import React from 'react'
import qs from 'qs'


const About = ({location}) =>{
    console.info(location.search);
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    console.info(query);
    const detail = query.detail === 'true'; 
    return (
        <div>
            <h1>
            About 영역 
            </h1>
            <p>
                연습용 프로젝트 
            </p>
            {detail && <div>내용이 추가됨</div>}
        </div>
    )
} 


export default About;