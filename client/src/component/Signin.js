import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgObj, setMsgObj] = useState({});
    const navigate = useNavigate();

    const signIn = () => {
        if (email != "" && password != "") {
            const values = {email, password}
            const url = "http://localhost:5000/users/signin";
            axios.post(url, values).
            then((response) => {
                console.log(response.data);
                navigate('/dashboard');
                setMsgObj(response.data);
            }).catch((err) => {
                console.log(err);
            })
            
        }
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-9 mx-auto shadow-sm'>
                        <div className='row'>
                            <div className='col-7 p-4'>
                                <div>
                                    <h2 className='display-4 text-center'>Sign Up</h2>
                                    <div className='form-floating'>
                                        <input 
                                            type="text"
                                            className='form-control' 
                                            placeholder='Email'
                                            value={email}
                                            name="email"
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                        <label htmlFor="">Email</label>
                                    </div>

                                    <div className='form-floating mt-4'>
                                        <input 
                                            type="text" 
                                            className='form-control'
                                            placeholder='Password'
                                            name='password'
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                        <label htmlFor="">Password</label>
                                    </div>
                                     <button 
                                        type='submit' 
                                        className='btn btn-outline-primary w-100 py-3 my-4'
                                        onClick={signIn}
                                        >Sign In
                                    </button>
                                    <p className='text-center'><b className={msgObj.status && msgObj.message ? "text-success" : "text-danger"}>{msgObj.message}</b></p>
                                    <p className='text-center'>Don't have an account? <Link to="/signup">Sign Up</Link></p>     
                                </div>
                            </div>
                            <div className='col-5 bg-primary'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>      
    )
}

export default Signin