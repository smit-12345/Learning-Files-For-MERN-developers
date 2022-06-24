


import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function PostForm() {

    const navigate = useNavigate();

    const url = "/register";
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: '',
    })



    function submit(e) {
        e.preventDefault();

        const regex1 = /^[A-Za-z]+$/
        const regex2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

        if (!data.name || !data.email || !data.phone || !data.work || !data.password || !data.cpassword) {
            alert("First complete empty fields")

        } else if (regex2.test(data.password) === false) {
            alert("wrong password")
            console.log("wrong")
        } else if (regex1.test(data.name) === false) {
            alert("wrong name")
            console.log("wrong")
        }


        Axios.post(url, {

            name: data.name,
            email: data.email,
            phone: data.phone,
            work: data.work,
            password: data.password,
            cpassword: data.cpassword,
        })
            .then(res => {
                console.log(res.data)
                alert("success")
                navigate("/home");
            })

    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)



    }

    const checkName = () => {

    }
    return (
        <div>
            <form className='container bg-light p-5 mt-4' method='POST' onSubmit={(e) => submit(e)}>
                <h1>Register here,</h1><hr></hr>
                <input className='form-control mt-3' onChange={(e) => handle(e)} id="name" value={data.name} placeholder='name' type="text"></input>
                <input className='form-control mt-3' onChange={(e) => handle(e)} id="email" value={data.email} placeholder='email' type="email"></input>
                <input className='form-control mt-3' onChange={(e) => handle(e)} id="phone" value={data.phone} placeholder='phone' type="number"></input>
                <input className='form-control mt-3' minLength={6} maxLength={20} onChange={(e) => handle(e)} id="work" value={data.work} placeholder='work' type="text"></input>
                <input className='form-control mt-3' minLength={8} maxLength={15} onChange={(e) => handle(e)} id="password" value={data.password} placeholder='password' type="password"></input>
                <input className='form-control mt-3' onChange={(e) => handle(e)} id="cpassword" value={data.cpassword} placeholder='cpassword' type="password"></input>
                <button className='btn btn-primary mt-3' onClick={checkName}>Submit</button>

            </form>
        </div>
    )
}

export default PostForm