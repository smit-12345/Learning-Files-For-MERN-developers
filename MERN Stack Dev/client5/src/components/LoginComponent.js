import React, { useState } from 'react'
import Axios from "axios"
import { Link, Navigate, useNavigate } from 'react-router-dom';


const LoginComponent = () => {

    const navigate = useNavigate();
    const url = "/login";

    const [data, setData] = useState({

        email: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault();

        Axios.post(url, {

            email: data.email,
            password: data.password,
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


    return (
        <>
            <form className='container bg-light p-4 mt-5' method='POST' onSubmit={(e) => submit(e)}>

                <h1>LOGIN HERE,</h1><hr></hr>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input className='form-control mt-3' onChange={(e) => handle(e)} id="email" value={data.email} placeholder='email' type="email"></input>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input className='form-control mt-3' onChange={(e) => handle(e)} id="password" value={data.password} placeholder='password' type="password"></input>
                </div>


                <button type="submit" className="btn btn-primary">Login</button>
                <Link className='ms-2 p-2' to="/register">Do registration if you dont have account</Link>
            </form>
        </>
    )
}

export default LoginComponent







// const LoginComponent = () => {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");


//     const handleInputs = (e) => {
//         e.preventDefault();
//         // alert(`entered : ${name}`)
//         // alert(`entered : ${email}`)
//         // alert(`entered : ${phone}`)
//         // alert(`entered : ${work}`)
//         // alert(`entered : ${password}`)
//         // alert(`entered : ${cpassword}`)
//         // name = e.target.name;
//         // value = e.target.value;

//         // setUser({ ...user, [name]: value });
//         // console.log(e)

//         const user = { email: `${email}`, password: `${password}` }
//         console.log(user)
//         const postData = async () => {


//             const { email, password } = user;


//             const response = await fetch("/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     email, password
//                 })
//             })

//             const data = await response.json();

//             if (data.status === 400 || !data) {
//                 window.alert("invalid login");
//                 console.log("invalid login")
//             } else {
//                 window.alert("Login success");
//                 console.log("Login success")

//                 navigate("/");
//             }
//         }
//         postData();

//     }
//     return (
//         <>
//             <form className='container bg-light p-4 mt-5' method='POST' onSubmit={handleInputs}>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input value={email} type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} name="email" />
//                 </div>

//                 <div className="mb-3 mt-3">
//                     <label htmlFor="password" className="form-label">Password :</label>
//                     <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" name="password" />
//                 </div>


//                 <button type="submit" className="btn btn-primary">Login</button>
//                 <a className='ms-2 p-2'> <Link to="/register">Do registration if you dont have account</Link></a>
//             </form>
//         </>
//     )
// }
