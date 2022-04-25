import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [msgObj, setMsgObj] = useState({}); 
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            password: ''
        },
        onSubmit:(values) => {
            console.log(values);
            const url = "http://localhost:5000/users/signup"
            axios.post(url, values)
            .then((response)=> {
                setMsgObj(response.data);
                if (response.data.status) {
                    navigate('/signin');
                }
                console.log(response.data);
            }).catch((err)=> {
                console.log(err);
            })
        },
        validationSchema:Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().required("Required").email("Must be email"),
            phoneNumber: Yup.string().required("Required").matches(/^[\d]{11}$/, "Must be 11 numbers"),
            address: Yup.string().required("Required"),
            password: Yup.string().required("Required")
        })
    })
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-9 mx-auto shadow-sm'>
                        <div className='row'>
                            <div className='col-7 p-3'>
                                <div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <h2 className='display-4 text-center'>Sign Up</h2>
                                        <div className='form-floating'>
                                            <input 
                                                type="text" 
                                                className={formik.touched.firstName && formik.errors.firstName ? 'form-control my-2 is-invalid' : 'form-control my-2'}
                                                placeholder='First Name'
                                                name='firstName'
                                                value={formik.values.firstName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <i className='text-danger'>{formik.touched.firstName && formik.errors.firstName}</i>
                                            <label htmlFor="">First Name</label>
                                        </div>

                                        <div className='form-floating'>
                                            <input 
                                                type="text" 
                                                className={formik.touched.lastName && formik.errors.lastName ? 'form-control my-2 is-invalid' : 'form-control my-2'}
                                                placeholder='Last Name' 
                                                name='lastName'
                                                value={formik.values.lastName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <i className='text-danger'>{formik.touched.lastName && formik.errors.lastName}</i>
                                            <label htmlFor="">Last Name</label>
                                        </div>
                                        <div className='form-group d-flex'>
                                            <div className='form-floating w-100 me-1'>
                                                <input 
                                                    type="text" 
                                                    className={formik.touched.email && formik.errors.email ? 'form-control my-2 is-invalid' : 'form-control my-2'}
                                                    placeholder='Email' 
                                                    name='email'
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}   
                                                />
                                                <i className='text-danger'>{formik.touched.email && formik.errors.email}</i>
                                                <label htmlFor="">Email</label>
                                            </div>

                                            <div className='form-floating w-100 ms-1'>
                                                <input 
                                                    type="text" 
                                                    className={formik.touched.phoneNumber && formik.errors.phoneNumber ? 'form-control my-2 is-invalid' : 'form-control my-2'}
                                                    placeholder='Phone Number' 
                                                    name='phoneNumber'
                                                    value={formik.values.phoneNumber}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}    
                                                />
                                                <i className='text-danger'>{formik.touched.phoneNumber && formik.errors.phoneNumber}</i>
                                                <label htmlFor="">Phone Number</label>
                                            </div>
                                        </div>
                                        
                                        <div className='form-group d-flex'>
                                            <div className='form-floating w-100 me-1'>
                                                <input 
                                                    type="text" 
                                                    className={formik.touched.address && formik.errors.address ? 'form-control my-2 is-invalid' : 'form-control my-2'}
                                                    placeholder='Address' 
                                                    name='address'
                                                    value={formik.values.address}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                <i className='text-danger'>{formik.touched.address && formik.errors.address}</i>
                                                <label htmlFor="">Address</label>
                                            </div>

                                            <div className='form-floating w-100 ms-1'>
                                                <input 
                                                    type="text" 
                                                    className={formik.touched.password && formik.errors.password ? 'form-control my-2 is-invalid' : 'form-control my-2'}
                                                    placeholder='Password' 
                                                    name='password'
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                <label htmlFor="">Password</label>
                                                <i className='text-danger'>{formik.touched.password && formik.errors.password}</i>
                                            </div>
                                        </div>
                                        <p className='text-center'><b className={msgObj.status && msgObj.message ? "text-success" : "text-danger"}>{msgObj.message}</b></p>
                                       
                                        <button type='submit' className='btn btn-outline-primary w-100 py-3 my-2'>Sign Up</button>
                                        <p className='text-center'>Already have an account? <Link to="/signin">Sign In</Link></p>
                                    </form>
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

export default Signup