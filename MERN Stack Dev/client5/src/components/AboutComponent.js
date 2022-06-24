import React, { useEffect, useState } from 'react';
import userpic from "../images/userpic.webp"
import { useNavigate } from 'react-router-dom';

const AboutComponent = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });



            const data = await res.json();
            console.log(data)
            setUserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error)
            navigate('/login')
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);
    return (
        <>

            <div className='container mt-4 bg-light'>
                <form method="GET">
                    <div className='row '>
                        <div className='col-lg-6 mt-4'>
                            <img className='mt-5' src={userpic} alt="userpic" width="80px" />
                        </div>
                        <h5 className='mt-4'>{userData.name}</h5>
                        <h6>web developer</h6>

                    </div>

                </form>
            </div>
        </>

    )
}

export default AboutComponent