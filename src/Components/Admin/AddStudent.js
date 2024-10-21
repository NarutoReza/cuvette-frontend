import React, { useEffect, useState } from 'react';
import './AddStudent.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function AddStudent() {
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
        name: '',
        gender: '',
        dob: '',
        permanentAddressStreetName: '',
        permanentAddressCity: '',
        permanentAddressState: '',
        permanentAddressPinCode: '',
        permanentAddressCountry: '',
        correspondenceAddressStreetName: '',
        correspondenceAddressCity: '',
        correspondenceAddressState: '',
        correspondenceAddressPinCode: '',
        correspondenceAddressCountry: '',
        mobile: '',
        mobile2: '',
        email: '',
        feesPaid: '',
        class: '',
        classYear: '2024',
        rollNo: ''
    })
    console.log(data);

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const classList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

    const [ checkbox, setCheckbox ] = useState(false);
    const [ disabled, setDisabled ] = useState(false);

    useEffect(() => {
        if(checkbox == true){
            setData({
                ...data,
                correspondenceAddressStreetName: data.permanentAddressStreetName,
                correspondenceAddressCity: data.permanentAddressCity,
                correspondenceAddressState: data.permanentAddressState,
                correspondenceAddressPinCode: data.permanentAddressPinCode,
                correspondenceAddressCountry: data.permanentAddressCountry
            });
            setDisabled(true);
        }
        else{
            setData({
                ...data,
                correspondenceAddressStreetName: '',
                correspondenceAddressCity: '',
                correspondenceAddressState: '',
                correspondenceAddressPinCode: '',
                correspondenceAddressCountry: ''
            });
            setDisabled(false);
        }
    }, [checkbox])

    const [ disabled1, setDisabled1 ] = useState(true);

    useEffect(() => {
        if(data.class == ''){
            setDisabled1(true);
        }
        else{
            setDisabled1(false);
            axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/get-fees-structure`, { name: data.class, refreshToken: refreshToken}, { headers: { 'Authorization': `Bearer ${accessToken}`}})
                .then(res => {
                    setData({
                        ...data,
                        feesPaid: res.data.studentFees
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [data.class])

  return (
    <Container fluid className='admin-student-container'>
        <Row className='admin-student-row'>
            <Col sm='12'>
                <div className='admin-header'>
                    <h6>Add Student</h6>
                </div>
            </Col>

            <Col sm='12'>
                <form className='add-form'>
                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder={`Enter Student's Name`} onChange={updateData} />
                        
                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-select'>
                        <select name='class' onChange={updateData}>
                            <option value='' disabled selected hidden>Select Class</option>
                            {
                                classList?.map((item, index) => {
                                    return(
                                        <option key={index}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='form-group'>
                        <input type='number' className='form-control my-3 input-text' autoFocus required name='rollNo' placeholder={`Enter Student's Roll Number`} onChange={updateData} min={1} max={30} disabled={disabled1} />

                        <i class="fa-solid fa-hashtag input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='number' className='form-control my-3 input-text' autoFocus required name='feesPaid' placeholder='Enter Fees Amount' onChange={updateData} disabled={true} value={data.feesPaid} />

                        <i class="fa-solid fa-indian-rupee-sign input-icon"></i>
                    </div>

                    <div className='form-select'>
                        <select name='gender' onChange={updateData}>
                            <option value='' disabled selected hidden>Select Student's Gender</option>
                            <option value='Female'>Female</option>
                            <option value='Male'>Male</option>
                            <option value='Others'>Others</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <input type='date' className='form-control my-3 input-text' autoFocus required name='dob' placeholder={`Enter Student's Date of Birth`} onChange={updateData} />

                        <i class="fa-solid fa-calendar input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='email' placeholder={`Enter Student's Email Id`} onChange={updateData} />

                        <i class="fa-solid fa-envelope input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='number' className='form-control my-3 input-text' autoFocus required name='mobile' placeholder={`Enter Student's Mobile Number`} onChange={updateData} />

                        <i class="fa-solid fa-phone input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='number' className='form-control my-3 input-text' autoFocus required name='mobile2' placeholder={`Enter Student's Alternate Mobile Number`} onChange={updateData} />

                        <i class="fa-solid fa-phone input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <h6>Permanent Address</h6>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressStreetName' placeholder='Enter Permanent Street Name' onChange={updateData} />

                        <i class="fa-solid fa-street-view input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressCity' placeholder='Enter Permanent City' onChange={updateData} />

                        <i class="fa-solid fa-building input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressState' placeholder='Enter Permanent State' onChange={updateData} />

                        <i class="fa-solid fa-city input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressPinCode' placeholder='Enter Permanent PinCode' onChange={updateData} />

                        <i class="fa-solid fa-map-pin input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressCountry' placeholder='Enter Permanent Country' onChange={updateData} />

                        <i class="fa-solid fa-globe input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <h6>Correspondence Address</h6>
                    </div>

                    <div className='form-checkbox'>
                        <input type='checkbox' name='checkbox' onChange={ e => setCheckbox(!checkbox) } />

                        <label>Permanent Address and Correspondence Address is same</label>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressStreetName' placeholder='Enter Correspondence Street Name' defaultValue={data.correspondenceAddressStreetName} onChange={updateData} disabled={disabled} />

                        <i class="fa-solid fa-street-view input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressCity' placeholder='Enter Correspondence City' defaultValue={data.correspondenceAddressCity} onChange={updateData} disabled={disabled} />

                        <i class="fa-solid fa-building input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressState' placeholder='Enter Correspondence State' defaultValue={data.correspondenceAddressState} onChange={updateData} disabled={disabled} />

                        <i class="fa-solid fa-city input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressPinCode' placeholder='Enter Correspondence PinCode' defaultValue={data.correspondenceAddressPinCode} onChange={updateData} disabled={disabled} />

                        <i class="fa-solid fa-map-pin input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressCountry' placeholder='Enter Correspondence Country' defaultValue={data.correspondenceAddressCountry} onChange={updateData} disabled={disabled} />

                        <i class="fa-solid fa-globe input-icon"></i>
                    </div>

                    <div className='button'>
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default AddStudent
