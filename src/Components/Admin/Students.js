import React, { useEffect, useState } from 'react';
import './Students.css';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Students() {
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

    const [ classes, setClasses ] = useState([]);
    console.log(classes)

    useEffect(() => {
        if(refreshToken == '') setClasses([]);
        else{
            if(accessToken == '') setClasses([]);
            else{
                axios
                    .post(`${process.env.REACT_APP_BACKEND_URL}/classes`, { year: 2024, refreshToken: refreshToken}, { headers: { 'Authorization': `Bearer ${accessToken}`}})
                    .then(res => {
                        if(res.data == 'Access Denied.') setClasses([]);
                        else if(res.data == 'Access needed!') setClasses([]);
                        else setClasses(res.data);
                    })
                    .catch(err => setClasses([]))
            }
        }
    }, [accessToken, refreshToken])

    const [ data, setData ] = useState({
        className: ''
    })

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
  return (
    <Container fluid className='admin-student-container'>
        <Row className='admin-student-row'>
            <Col sm='12'>
                <div className='admin-header'>
                    <h6>Students List</h6>
                </div>
            </Col>

            <Col sm='12'>
                <div className='select-list'>
                    <label for='className'>Select Class</label>
                    <select name='className'>
                        <option value='' disabled selected hidden>Select Class</option>
                        {
                            classes && classes?.map((item, index) => {
                                return(
                                    <option key={index} value={item.name}>{item.name}</option>
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
                                <th scope='col'></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Students
