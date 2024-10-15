import React, { useEffect, useState } from 'react';
import './Students.css';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router';

const cookies = new Cookies();

function Students() {
    const navigate = useNavigate();
    
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ accessToken, setAccessToken ] = useState('');
    const [ refreshToken, setRefreshToken ] = useState('');
    // console.log({name, password, accessToken, refreshToken});

    useEffect(() => {
        if(cookies.get('name')){
            if(cookies.get('password')){
                if(cookies.get('accessToken')){
                if(cookies.get('refreshToken')){
                    setName(cookies.get('name'));
                    setPassword(cookies.get('password'));
                    setAccessToken(cookies.get('accessToken'));
                    setRefreshToken(cookies.get('refreshToken'));
                }
                else{
                    setName('');
                    setPassword('');
                    setAccessToken('');
                    setRefreshToken('');
                }
                }
                else{
                    setName('');
                    setPassword('');
                    setAccessToken('');
                    setRefreshToken('');
                }
            }
            else{
                setName('');
                setPassword('');
                setAccessToken('');
                setRefreshToken('');
            }
        }
        else{
        setName('');
        setPassword('');
        setAccessToken('');
        setRefreshToken('');
        }
    })

    const [ data, setData ] = useState({
        className: '',
        classYear: '2024'
    });
    // console.log(data);

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [ classes, setClasses ] = useState([]);
    // console.log(classes);
    const classLength = classes.length;
    // console.log(classLength);

    useEffect(() => {
        if(refreshToken == '') setClasses([]);
        else{
            if(accessToken == '') setClasses([]);
            else{
                axios
                    .post(`${process.env.REACT_APP_BACKEND_URL}/classes`, { year: data.classYear, refreshToken: refreshToken}, { headers: { 'Authorization': `Bearer ${accessToken}`}})
                    .then(res => {
                        if(res.data == 'Access Denied.') setClasses([]);
                        else if(res.data == 'Access needed!') setClasses([]);
                        else setClasses(res.data);
                    })
                    .catch(err => setClasses([]))
            }
        }
    }, [accessToken, refreshToken, data.classYear])

    const years = [ 2024, 2023, 2022, 2021, 2020 ];

    const classMap = () => {
        if(classLength == 0) return(
            <option value='' disabled>No Classes Available</option>
        )

        else return(
                classes && classes?.map((item, index) => {
                    return(
                        <option key={index} value={item.name}>{item.name}</option>
                    )
                })
        )
    }

    const [ students, setStudents ] = useState([]);
    console.log(students);

    useEffect(() => {
        if(refreshToken == '') setClasses([]);
        else{
            if(accessToken == '') setClasses([]);
            else{
                axios
                    .post(`${process.env.REACT_APP_BACKEND_URL}/class-students`, { className: data.className, classYear: data.classYear, refreshToken: refreshToken}, { headers: { 'Authorization': `Bearer ${accessToken}`}})
                    .then(res => {
                        if(res.data == 'Access Denied.') setStudents([]);
                        else if(res.data == 'Access needed!') setStudents([]);
                        else setStudents(res.data);
                    })
                    .catch(err => setStudents([]))
            }
        }
    }, [ data.className, data.classYear, refreshToken, accessToken ])

    const [ matches, setMatches ] = useState(window.matchMedia('(max-width: 425px)').matches);

    const popupStyle = () => {
        if(matches == true) return {'width': '100%'}
        else if(matches == false) return {'width': '500px'}
    }

    useEffect(() => {
        window
            .matchMedia('(max-width: 425px)')
            .addEventListener('change', e => setMatches( e.matches ))
    });

  return (
    <Container fluid className='admin-student-container'>
        <Row className='admin-student-row'>
            <Col sm='12'>
                <div className='admin-header'>
                    <h6>Students List</h6>
                </div>
            </Col>

            <Col sm='12'>
                <div className='add-header'>
                    {/* <Popup trigger={<button className='add-btn'><i class="fa-solid fa-plus"></i> Add Student</button>} modal nested contentStyle={popupStyle()}>
                        {
                            close => (
                                <Container className='add-popup'>
                                    <Row>
                                        <Col sm='12' className='d-flex justify-content-end'>
                                            <button className='close-btn' onClick={() => close()}><i class="fa-solid fa-xmark"></i></button>
                                        </Col>

                                        <Col sm='12' className='add-data-from'>
                                            <h4>Add Student</h4>

                                            <form>
                                                <div className='form-group'>
                                                    <input className='form-control' />
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                    </Popup> */}

                    <button className='add-btn' onClick={() => navigate('/admin-add-student')}><i class="fa-solid fa-plus"></i> Add Student</button>
                </div>
            </Col>

            <Col sm='12' className='selection'>
                <div className='select-list'>
                    <label for='className'>Select Class</label>
                    <select name='className' onChange={updateData}>
                        <option value='' disabled selected hidden>Select Class</option>
                        {/* {
                            classes && classes?.map((item, index) => {
                                if(classLength !== 0) return(
                                    <option key={index} value={item.name}>{item.name}</option>
                                )
                                else return(
                                    <option key={index} value=''>No Classes Available</option>
                                )
                            })
                        } */}
                        {classMap()}
                    </select>
                </div>

                <div className='select-list'>
                    <label for='classYear'>Select Class</label>
                    <select name='classYear' onChange={updateData}>
                        <option value='' disabled selected hidden>Select Year</option>
                        {
                            years && years?.map((item, index) => {
                                return(
                                    <option key={index} value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </Col>

            <Col sm='12'>
                <div className='table-content table-responsive-xl'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Sr. No.</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Class</th>
                                <th scope='col'>Roll No.</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>Date of Birth</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Mobile No.</th>
                                <th scope='col'>Alternate Mobile No.</th>
                                <th scope='col'>Permanent Address</th>
                                <th scope='col'>Correspondence Address</th>
                                <th scope='col'>Fees Paid</th>
                                <th scope='col'>Edit</th>
                                <th scope='col'>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                students && students?.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.class}</td>
                                            <td>{item.rollNo}</td>
                                            <td>{item.gender}</td>
                                            <td>DATE</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.mobile2}</td>
                                            <td>PERMANENT</td>
                                            <td>CORRESPONDENCE</td>
                                            <td>{item.feesPaid}</td>
                                            <td>EDIT</td>
                                            <td>DELETE</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Students
