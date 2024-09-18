import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router';
import Cookies from 'universal-cookie';
import { Col, Container, Row } from 'react-bootstrap';

const cookies = new Cookies();

function Dashboard() {
  const navigate = useNavigate();

  // const [ name, setName ] = useState('');
  // const [ password, setPassword ] = useState('');
  // const [ accessToken, setAccessToken ] = useState('');
  // const [ refreshToken, setRefreshToken ] = useState('');
  

  // useEffect(() => {
  //   if(cookies.get('name')){
  //     if(cookies.get('password')){
  //       if(cookies.get('accessToken')){
  //         if(cookies.get('refreshToken')){
  //           setName(cookies.get('name'));
  //           setPassword(cookies.get('password'));
  //           setAccessToken(cookies.get('accessToken'));
  //           setRefreshToken(cookies.get('refreshToken'));
  //         }
  //         else{
  //           setName('');
  //           setPassword('');
  //           setAccessToken('');
  //           setRefreshToken('');
  //           navigate('/');
  //         }
  //       }
  //       else{
  //         setName('');
  //         setPassword('');
  //         setAccessToken('');
  //         setRefreshToken('');
  //         navigate('/');
  //       }
  //     }
  //     else{
  //       setName('');
  //       setPassword('');
  //       setAccessToken('');
  //       setRefreshToken('');
  //       navigate('/');
  //     }
  //   }
  //   else{
  //     setName('');
  //     setPassword('');
  //     setAccessToken('');
  //     setRefreshToken('');
  //     navigate('/');
  //   }
  // })
  return (
    <Container fluid className='admin-student-container'>
        <Row className='admin-student-row'>
            <Col sm='12'>Admin Dashboard</Col>
        </Row>
    </Container>
  )
}

export default Dashboard
