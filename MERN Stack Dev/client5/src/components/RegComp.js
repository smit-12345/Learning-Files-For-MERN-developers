import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const RegComp = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: '',
    });

    let name, value;


    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
        console.log(...user)


    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });


        const data = await res.json();

        if (data.status === 422) {
            window.alert("invalid reg");
            console.log("invalid reg")
        } if (!name || !email || !phone || !work || !password || !cpassword) {
            alert("fill the field")
        } else {
            window.alert("reg success");
            console.log("success");
        }

        // const validate = () => {

        //     const { value } = e.target;
        //     console.log('Input value: ', value);

        //     const re = /^[A-Za-z]+$/;
        //     if (value === "" || re.test(value)) {
        //        alert("some")
        //     }

        // }
        // validate();


    }

    return (
        <>
            <form method='POST' className='container bg-light p-4 mt-5' onSubmit={handleInputs} >

                <h1>REGISTER HERE,</h1><hr></hr>
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input pattern={/^[A-Za-z]+$/} value={user.name} type="text" className="form-control" onChange={handleInputs} id="name" placeholder="Enter Your Name" name="name" />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input value={user.email} type="email" className="form-control" placeholder="Enter your email" onChange={handleInputs} id="email" name="email" />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="number" className="form-label">Phone Number:</label>
                    <input value={user.phone} type="text" className="form-control" placeholder="Enter you number" onChange={handleInputs} id="phone" name="phone" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Profession : </label>
                    <input value={user.work} maxlength="5   " type="text" className="form-control" id="work" onChange={handleInputs} placeholder="Enter you profrssion" name="work" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input value={user.password} type="password" className="form-control" id="password" placeholder="Enter your password" onChange={handleInputs} name="password" />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="cpassword" className="form-label">Confirm your password :</label>
                    <input value={user.cpassword} type="password" className="form-control" onChange={handleInputs} id="cpasswod" placeholder="Confirm your password" name="cpassword" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={PostData} >Submit</button>
                <Link className='ms-2 p-2' to="/login">If aleready registered click here</Link>

            </form>
        </>
    )
}

export default RegComp