import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Registration_details(){
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6508fd9356db83a34d9ccb26.mockapi.io/myDb`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
           
    {APIData.map((data) => {
        
        const a=data.email;
        const b=data.password;
        return(
            <div>
                <h1>{a}</h1>
                <h1>{b}</h1>
            </div>
        )
         
        })}
}
export default Registration_details;
    