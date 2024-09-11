import React, { Fragment, useEffect, useState } from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [ eye, setEye ] = useState('fa-eye');
  const [ passwordType, setPasswordType ] = useState('password');
  const [ passIcon, setPassIcon ] = useState('fa-lock');

  const viewPassword = () => {
    if(eye == 'fa-eye'){
      setEye('fa-eye-slash');
      setPasswordType('text');
      setPassIcon('fa-unlock');
    }
    else if(eye == 'fa-eye-slash'){
      setEye('fa-eye');
      setPasswordType('password');
      setPassIcon('fa-lock');
    }
  }

  const [ data, setData ] = useState({})
  console.log(data);

  const updateData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const [ logger, setLogger ] = useState('Student');

  const changeLogger = (name) => {
    setLogger(name);
    // setData({});
  }

  const loginMenu = () => {
    if(logger == 'Admin'){
      return(
        <>
          <a onClick={e => changeLogger('Student')}>Log in as Student</a>
          <a onClick={e => changeLogger('Teacher')}>Log in as Teacher</a>
        </>
      )
    }
    
    else if(logger == 'Student'){
      return(
        <>
          <a onClick={e => changeLogger('Admin')}>Log in as Admin</a>
          <a onClick={e => changeLogger('Teacher')}>Log in as Teacher</a>
        </>
      )
    }

    else if(logger == 'Teacher'){
      return(
        <>
          <a onClick={e => changeLogger('Admin')}>Log in as Admin</a>
          <a onClick={e => changeLogger('Student')}>Log in as Student</a>
        </>
      )
    }
  }

  const classes = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

  const loginForm = () => {
    if(logger == 'Admin') return(
      <>
        <div className='form-group'>
          <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder='Enter Your Name' onChange={updateData} />
          <i class="fa-solid fa-user input-icon"></i>
        </div>

        <div className='form-group'>
          <input type={passwordType} className='form-control my-3 input-text' autoFocus required name='password' placeholder='Enter Your Password' onChange={updateData} />
          <i class={`fa-solid ${passIcon} input-icon`}></i>
          <a className='pass-icon'><i class={`fa-solid ${eye}`} onClick={() => viewPassword()}></i></a>
        </div>
      </>
    )

    else if(logger == 'Student') return(
      <>
        <div className='form-group'>
          <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder='Enter Your Name' onChange={updateData} />
          <i class="fa-solid fa-user input-icon"></i>
        </div>

        <div className='form-group'>
          <input type='date' className='form-control my-3 input-text' autoFocus required name='dob' placeholder='Enter Your Date of Birth' onChange={updateData} />
          <i class="fa-solid fa-calendar input-icon"></i>
        </div>

        <div className='form-group'>
          <select className='form-select' aria-label=".form-select-lg example" autoFocus name='class' onChange={updateData} >
            <option selected hidden value=''>Select Your Class</option>
            {
              classes && classes.map((item, index) => {
                return(
                  <option key={index} value={item}>{item}</option>
                )
              })
            }
          </select>
          {/* <i class="fa-solid fa-chalkboard input-icon"></i> */}
          {/* <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder='Enter Your Name' onChange={updateData} />
          <i class="fa-solid fa-user input-icon"></i> */}
        </div>
        {/* name, dob, class */}
      </>
    )

    else if(logger == 'Teacher') return(
      <>
        <div className='form-group'>
          <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder='Enter Your Name' onChange={updateData} />
          <i class="fa-solid fa-user input-icon"></i>
        </div>

        <div className='form-group'>
          <input type='date' className='form-control my-3 input-text' autoFocus required name='dob' placeholder='Enter Your Date of Birth' onChange={updateData} />
          <i class="fa-solid fa-calendar input-icon"></i>
        </div>
        {/* name, dob */}
      </>
    )
  }

  const submit = e => {
    e.preventDefault();
    if(logger == 'Student'){
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/class-student`, { name: data.name, dob: data.dob, className: data.class, classYear: 2024 })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
  
  return (
    <Container fluid className='homeContainer'>
      <Row>
        <Col sm='12' className='login-box text-center'>
          <h4>{logger} Login</h4>
          <form className='login-form' onSubmit={submit}>
            {loginForm()}

            <div className='buttons'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </form>
          
          <div className='diff-log'>
            {loginMenu()}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home