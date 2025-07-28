import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({role, layout, redirectTo="/401"}) => {
    const [loading, setLoading] = useState(false);
    const [authorized, setAuthorized] = useState(true);

    useEffect(()=>{
        
        const checkRole = async()=>{
            try{
                setLoading(true)
                await axios.get('/api/auth/checkRole', {
                    withCredentials: true
                })
                setAuthorized(true);
            }
            catch(err){
                console.log('Something went wrong');
            }
            finally{
                setLoading(false);
            }
        }
        checkRole()
    },[role])

    if(loading){
        return <div className='flex justify-center items-center h-screen'>
            <p className='text-lg font-medium'>Loading...</p>
        </div>
    }
    if(!authorized){
        return <Navigate to={redirectTo}/>
    }
    return layout;
}

export default ProtectedRoute