import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Profilee from '../assets/Profile.png';
import Edit from '../assets/edit.png';
import Footer from './Footer'
import NavBarComponent2 from "./NavBarComponent2";
import { axiosApiService } from '../services/axiosAPIs';


const EditOneJob = () => {
<<<<<<< HEAD
    const location = useLocation();
    const navigate = useNavigate();
    const initialvalues = {
        jdPosition: "",
        jdMinimumExperience: null,
        jdRequiredSkills: "",
        jdLocation: "",
        jdCity: ""
=======

  const navigate = useNavigate();
  const initialvalues = {
    jdId: "",
    jdPosition: "",
    jdMinimumExperience: "",
    jdRequiredSkills: "",
    jdLocation: "",
    jdCity: ""
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [setJD, setJDDetails] = useState({});
  const [formValues, setFormValues] = useState(initialvalues);

  // Edit useState
  const [posHide, setPosShow] = useState(false);
  const [expHide, setExpShow] = useState(false);
  const [skillHide, setSkillShow] = useState(false);
  const [cityHide, setCityShow] = useState(false);
  const [locHide, setLocShow] = useState(false);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormValues({ ...formValues, [name]: value }); //...=>spread operator
    console.log("form values", formValues);

  };


  const handleCancel = (e) => {
    navigate('/organization', { replace: true });

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));

    if (formValues.jdCity === "")
      formValues.jdCity = setJD.jdCity;

    if (formValues.jdLocation === "")
      formValues.jdLocation = setJD.jdLocation;

    if (formValues.jdPosition === "")
      formValues.jdPosition = setJD.jdPosition;

    if (formValues.jdMinimumExperience === null)
      formValues.jdMinimumExperience = setJD.jdMinimumExperience;

    if (formValues.jdRequiredSkills === "")
      formValues.jdRequiredSkills = setJD.jdRequiredSkills;

    console.log(formValues);
  };


  const postData = async (body) => {
    const data = {
      jdPosition: body.jdPosition,
      jdCity: body.jdCity,
      jdLocation: body.jdLocation,
      jdMinimumExperience: body.jdMinimumExperience,
      jdRequiredSkills: body.jdRequiredSkills,
>>>>>>> a8ad92a055e4b8af7b703063f586080cd1a0e7b9
    };
    try {
      await axios.patch("http://localhost:5000/job-description/update/133", data)
        .then((response) => {
          console.log("Data recieved");
          console.log(response.data);
          alert("Information saved.");
          window.location.reload();
        })

    } catch (err) {
      console.log(err);
    }

  };

  const getData = async () => {

<<<<<<< HEAD
    const handleCancel = (e) => {
        navigate('/organization', { replace: true });
=======
    try {
      await axios.get("http://localhost:5000/job-description/getone/133")
        .then((response) => {
          console.log("Data recieved");
          setJDDetails(response.data);
          console.log("JDSET", setJD);

        })
>>>>>>> a8ad92a055e4b8af7b703063f586080cd1a0e7b9

    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    getData();
    console.log(formErrors);
    if (isSubmit && Object.keys(formErrors).length === 0) {
      console.log("useeffect", setJD);
      postData(formValues);
      console.log(formValues);
    }

<<<<<<< HEAD
        if (formValues.jdCity === "")
            formValues.jdCity = setJD.jdCity;

        if (formValues.jdLocation === "")
            formValues.jdLocation = setJD.jdLocation;

        if (formValues.jdPosition === "")
            formValues.jdPosition = setJD.jdPosition;

        if (formValues.jdMinimumExperience === null)
            formValues.jdMinimumExperience = setJD.jdMinimumExperience;

        if (formValues.jdRequiredSkills === "")
            formValues.jdRequiredSkills = setJD.jdRequiredSkills;

        console.log(formValues);
    };


    const postData = async (body) => {
        const data = {
            jdPosition: body.jdPosition,
            jdCity: body.jdCity,
            jdLocation: body.jdLocation,
            jdMinimumExperience: body.jdMinimumExperience,
            jdRequiredSkills: body.jdRequiredSkills,
        };
        try {
            console.log("JdId: ", location.state.jdId);
    
            axiosApiService.coreApi.patch(`job-description/update/${location.state.jdId}`, body)
                .then((response) => {
                    console.log("Data recieved");
                    console.log(response.data);
                    alert("Information saved.");
                    window.location.reload();
                })

        } catch (err) {
            console.log(err);
        }

    };

    const getData = async () => {

        try {
            axiosApiService.coreApi.get(`job-description/getone/${location.state.jdId}`)
                .then((response) => {
                    console.log("Data recieved");
                    setJDDetails(response);
                    console.log("JDSET", setJD);

                })

        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {
        getData();
        console.log(formErrors);
        if (isSubmit && Object.keys(formErrors).length === 0) {
            console.log("useeffect", setJD);
            postData(formValues);
            console.log(formValues);
        }

    }, [formErrors]);
=======
  }, [formErrors]);
>>>>>>> a8ad92a055e4b8af7b703063f586080cd1a0e7b9



  const validate = (values) => {
    const errors = {};

    return errors;
  };


<<<<<<< HEAD
    return (
        <>
            
 {/* <Header /> */}
 <NavBarComponent2/>
         <section className="update">
          <div>
            <h2 className="contactUsHeading">Job Update</h2>
          </div>
        </section>
              <div class="row"  style={{
          
          justifyContent: "center",height:"40%"
          
        }}>

               
            <div class="col-10 profile-body-right">
                    <div style={{
          marginTop: "80px",marginBottom: "80px", borderRadius: "3px",
          boxShadow: "-1px 3px 18px 0px rgb(0 0 0 / 75%)",
          padding:"30px"
        }}>
                        <label className="mb-3"> Job Position</label>
                        <div className='orgIcon'>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                disabled="true"
                                id="jdPosition"
                                name="jdPosition"
                                value={setJD?.jdPosition}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>

                        </div>

                        <div className='mb-3'>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                id="jdPosition"
                                name="jdPosition"
                                placeholder="Edit here"
                                value={formValues.jdPosition}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdPosition}</p>
                            </div>
                        </div>

                        <label className="mb-3"> Minimum Experience </label>
                        <div className='orgIcon'>
                            <input
                                type="integer"
                                class="form-control input-Fields"
                                id="jdMinimumExperience"
                                name="jdMinimumExperience"
                                disabled="true"
                                value={setJD?.jdMinimumExperience}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>
                        </div>

                        <div className='mb-3'>
                            <input
                                type="integer"
                                class="form-control input-Fields"
                                id="jdMinimumExperience"
                                name="jdMinimumExperience"
                                placeholder="Edit here"
                                value={formValues.jdMinimumExperience}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdMinimumExperience}</p>
                            </div>
                        </div>


                        <label className="mb-3"> Required Skills</label>
                        <div className='orgIcon'>
                            <textarea
                                type="text"
                                name="jdRequiredSkills"
                                class="form-control input-Fields"
                                id="jdRequiredSkills"
                                disabled="true"
                                value={setJD?.jdRequiredSkills}
                            />
                            <button className='btn btn-small btn-outline-secondary'>
                                <img src={Edit} alt="" width="30px" height="30px" />
                            </button>
                        </div>
                        <div>
                            <input
                                type="text"
                                class="form-control input-Fields"
                                id="jdRequiredSkills"
                                name="jdRequiredSkills"
                                placeholder="Edit here"
                                value={formValues.jdRequiredSkills}
                                onChange={handleChange}
                            />
                            <div className="formErrors text-danger">
                                <p>{formErrors.jdRequiredSkills}</p>
                            </div>
                        </div>
=======
  return (


    <>
>>>>>>> a8ad92a055e4b8af7b703063f586080cd1a0e7b9

<NavBarComponent2/>
      <section className="update">
        <div>
          <h2 className="contactUsHeading">Job Update</h2>
        </div>
      </section>
      <div class="row" style={{

        justifyContent: "center", height: "40%"

      }}>

        <div class="col-10 profile-body-right">
          <div style={{
            marginTop: "80px", marginBottom: "80px", borderRadius: "3px",
            boxShadow: "-1px 3px 18px 0px rgb(0 0 0 / 75%)",
            padding: "30px"
          }}>
            <label className="mb-3"> Job Position</label>
            <div className='orgIcon'>
              <input
                type="text"
                class="form-control input-Fields"
                disabled="true"
                id="jdPosition"
                name="jdPosition"
                value={setJD.jdPosition}
              />
              <button className='btn btn-small btn-outline-secondary'
              onClick={() => setPosShow(!posHide)}
              >
                <img src={Edit} alt="" width="30px" height="30px" />
              </button>

            </div>

            <div className='mb-3'>
            {
              posHide && 
              <input
                type="text"
                class="form-control input-Fields"
                id="jdPosition"
                name="jdPosition"
                placeholder="Edit here"
                value={formValues.jdPosition}
                onChange={handleChange}
              />
            }
              
              <div className="formErrors text-danger">
                <p>{formErrors.jdPosition}</p>
              </div>
            </div>

            <label className="mb-3"> Minimum Experience </label>
            <div className='orgIcon'>
              <input
                type="number"
                class="form-control input-Fields"
                id="jdMinimumExperience"
                name="jdMinimumExperience"
                disabled="true"
                value={setJD.jdMinimumExperience}
              />
              {/* Edit Button */}
              <button className='btn btn-small btn-outline-secondary'
              onClick={() => setExpShow(!expHide)}
              >
                <img src={Edit} alt="" width="30px" height="30px" />
              </button>
            </div>

            <div className='mb-3'>
            {/* Edit */}
            {
              expHide && 
              <input
                type="number"
                class="form-control input-Fields"
                id="jdMinimumExperience"
                name="jdMinimumExperience"
                placeholder="Edit here"
                value={formValues.jdMinimumExperience}
                onChange={handleChange}
              />
            }
              
              <div className="formErrors text-danger">
                <p>{formErrors.jdMinimumExperience}</p>
              </div>
            </div>


            <label className="mb-3"> Required Skills</label>
            <div className='orgIcon'>
              <textarea
                type="text"
                name="jdRequiredSkills"
                class="form-control input-Fields"
                id="jdRequiredSkills"
                disabled="true"
                value={setJD.jdRequiredSkills}
              />
              <button className='btn btn-small btn-outline-secondary'
              onClick={() => setSkillShow(!skillHide)}
              >
                <img src={Edit} alt="" width="30px" height="30px" />
              </button>
            </div>
            <div>
            {
              skillHide && 
              <input
                type="text"
                class="form-control input-Fields"
                id="jdRequiredSkills"
                name="jdRequiredSkills"
                placeholder="Edit here"
                value={formValues.jdRequiredSkills}
                onChange={handleChange}
              />
            }
              
              <div className="formErrors text-danger">
                <p>{formErrors.jdRequiredSkills}</p>
              </div>
            </div>

            <label className="mb-3"> City</label>
            <div className='orgIcon'>
              <input
                type="text"
                name="jdCity"
                class="form-control input-Fields"
                id="jdCity"
                disabled="true"
                value={setJD.jdCity}
              />
              <button className='btn btn-small btn-outline-secondary'
              onClick={() => setCityShow(!cityHide)} 
              >
                <img src={Edit} alt="" width="30px" height="30px" />
              </button>
            </div>
            <div>
            {
              cityHide && 
              <input
                type="text"
                class="form-control input-Fields"
                id="jdCity"
                name="jdCity"
                placeholder="Edit here"
                value={formValues.jdCity}
                onChange={handleChange}
              />
            }
             
              <div className="formErrors text-danger">
                <p>{formErrors.jdCity}</p>
              </div>
            </div>

            <label className="mb-3"> Location </label>
            <div className='orgIcon'>
              <input
                type="text"
                name="jdLocation"
                class="form-control input-Fields"
                id="jdLocation"
                disabled="true"
                value={setJD.jdLocation}
              />
              <button className='btn btn-small btn-outline-secondary'
              onClick={() => setLocShow(!locHide)}
              
              >
                <img src={Edit} alt="" width="30px" height="30px" />
              </button>
            </div>
            <div>
            {
              locHide && 
              <input
                type="text"
                class="form-control input-Fields"
                id="jdLocation"
                name="jdLocation"
                placeholder="Edit here"
                value={formValues.jdLocation}
                onChange={handleChange}
              />
            }
             
              <div className="formErrors text-danger">
                <p>{formErrors.jdLocation}</p>
              </div>
            </div>

            <form className="d-flex justifyContent width-100">
              <button className="btn button-style-outline me-2 btn-sm" type="submit" onClick={handleCancel}>Cancel</button>
              <Link to='/organization'><button className="btn button-style-full me-2 btn-sm" type="submit" onClick={handleSubmit}>Save</button></Link>

            </form>

          </div>


        </div>
      </div>
      <footer>
        <Footer dark={true} />
      </footer>
    </>

  )
}

export default EditOneJob