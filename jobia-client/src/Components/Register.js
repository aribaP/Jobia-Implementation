//organization registration

import React from 'react'
import '../Styles/style.css'
import {useState, useEffect} from 'react';
import validator from 'validator';
import polygon from '../assets/Polygon.png'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Organization from './Organization';

const Register = () => {
    const initialvalues = {
      orgName:"",
      orgEmail:"",
      orgPassword:"",    
    };

    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    let name, value;
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value }); //...=>spread operator
      console.log("form values", formValues);
        
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      console.log(formValues);
    };
    const postData = async()=>{
       
      const body = {
        "orgName": formValues.orgName,  
        "orgEmail": formValues.orgEmail,
        "orgPassword": formValues.orgPassword
    }
    
      console.log("boduuuu", body);
      
      try{
          await axios.post("http://localhost:5000/organization/signupOrg",body)
          .then((response) => {
              console.log("Data recieved");   
              console.log(response.data);
              const results = response.data;
          })
          
      }catch(err){
          console.log(err);
      }

  };
    
    useEffect(() => {                     
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
            
            postData(formValues);
            console.log(formValues);  //Rectified values after validation
      }
    },[formErrors]);



    const validate = (values) => {
 
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.orgName) {
        errors.orgName = "Username is required!";
      }
      if (!values.orgEmail) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.orgEmail)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.orgPassword) {
        errors.orgPassword = "Password is required";
      } else if (values.orgPassword.length < 4) {
        errors.orgPassword = "Password must be more than 4 characters";
      } else if (values.orgPassword.length > 10) {
        errors.orgPassword = "Password cannot exceed more than 10 characters";
      }
      
      if (!validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
          errors.orgPassword = "Password must be strong";
      } 
      return errors;
  };
   
  return (
    <>
      <Header />
      <div className='body'>
        <h4 className='white-txt font-28 mb-revert '>READY TO JOIN THE BEST JOB HIRING SOLUTION ?</h4>
        <div className='body-form-register'>
        <form onSubmit={handleSubmit}>
          <h5 className='mb-revert text-center'>Sign up for a free account</h5>

          <div class="mb-3">
            <input type="text"  name= "orgName" class="form-control input-Fields" id="OrganizationName" required placeholder="Organization name" 
                value={formValues.orgName}
                onChange={handleChange}/>
                <div className="formErrors text-danger">
                    <p>{formErrors.orgName}</p>
                </div>
          </div>

          <div class="mb-3">
            <input type="email" name="orgEmail" class="form-control input-Fields" id="EmailAddress" required placeholder="Email address"  
                value={formValues.orgEmail}
                onChange ={handleChange}/>
                <div className="formErrors text-danger">
                    <p>{formErrors.orgEmail}</p>
                </div>

          </div>

          <div class="mb-3">
            <input type="password" name ="orgPassword" class="form-control input-Fields" id="Password" required placeholder="Create password" 
                value={formValues.orgPassword} 
                onChange={handleChange}/>
                <div className="formErrors text-danger">
                    <p>{formErrors.orgPassword}</p>
                </div>
          </div>

         {/* <Link to='/organization'> */}
         <button className="btn body-button-style11" type="submit" onSubmit={Organization}>Register</button>
         {/* </Link> */}
        </form>
        </div>
        <img className='polygon' src={polygon} alt="" />
      </div><footer>
      <Footer /></footer>
    </>
  )
}

export default Register;