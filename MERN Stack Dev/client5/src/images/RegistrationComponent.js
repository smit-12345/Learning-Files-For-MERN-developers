// import React, { useState } from 'react';
// import { Link, Navigate, useNavigate } from 'react-router-dom';


// const RegistrationComponent = () => {
//     const navigate = useNavigate();

//     // const [user, setUser] = useState({
//     //     name: "", email: "", phone: "", work: "", password: "", cpassword: ""
//     // });

//     // letname, value;

//     const [values, setValues] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         work: '',
//         password: '',
//         cpassword: '',
//         showPassword: false,
//         showCpassword: false,
//     })
//     // const [name, setName] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [phone, setPhone] = useState("");
//     // const [work, setWork] = useState("");
//     // const [password, setPassword] = useState("");
//     // const [cpassword, setCpassword] = useState("");



//     const handleInputs = (fieldname) => (event) => {
//         event.preventDefault();
//         try {
//             const res = await fetch('/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: values.name,
//                     email: values.email,
//                     phone: values.phone,
//                     work: values.work,
//                     password: values.password,
//                     cpassword: values.cpassword,
//                 }),
//             })
//             if (!res.ok) {
//                 return console.log('fetch error')
//             }

//             const data = await res.json()

//             setValues({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 work: '',
//                 password: '',
//                 cpassword: '',
//                 showPassword: false,
//                 showCpassword: false,
//             })
//         }
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

//         const user = { name: `${name}`, email: `${email}`, phone: `${phone}`, work: `${work}`, password: `${password}`, cpassword: `${cpassword}` }
//         console.log(user)



//     }
//     const postData = async () => {


//         const { name, email, phone, work, password, cpassword } = user;
//         console.log(name)

//         const response = await fetch("/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name, email, phone, work, password, cpassword
//             }),
//         })

//         if (!res.ok) {
//             return console.log("fetch error")
//         }

//         const data = await response.json();

//         // if (data.status === 422 || !data) {
//         //     window.alert("invalid reg");
//         //     console.log("invalid reg")
//         // } if (!name || !email || !phone || !work || !password || !cpassword) {
//         //     alert("fill the field")
//         // } else {
//         //     window.alert("reg success");
//         //     console.log("success")

//         //     navigate("/login");
//         // }
//     }


//     return (
//         <>
//             <form method='POST' className='container bg-light p-4 mt-5' onSubmit={handleInputs} >
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="name" className="form-label">Name :</label>
//                     <input value={name} type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Name" name="name" />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input value={email} type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} name="email" />
//                 </div>

//                 <div className="mb-3 mt-3">
//                     <label htmlFor="number" className="form-label">Phone Number:</label>
//                     <input value={phone} type="number" className="form-control" id="number" placeholder="Enter you number" onChange={(e) => setPhone(e.target.value)} name="number" />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="email" className="form-label">Profession : </label>
//                     <input value={work} type="text" className="form-control" id="profession" onChange={(e) => setWork(e.target.value)} placeholder="Enter you profrssion" name="profession" />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="password" className="form-label">Password :</label>
//                     <input value={password} type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} name="password" />
//                 </div>
//                 <div className="mb-3 mt-3">
//                     <label htmlFor="cpassword" className="form-label">Confirm your password :</label>
//                     <input value={cpassword} type="password" className="form-control" onChange={(e) => setCpassword(e.target.value)} id="cpasswod" placeholder="Confirm your password" name="cpassword" />
//                 </div>

//                 <button type="submit" className="btn btn-primary" >Submit</button>
//                 <a className='ms-2 p-2'> <Link to="/login">If aleready registered click here</Link></a>

//             </form>
//         </>
//     )
// }

// export default RegistrationComponent