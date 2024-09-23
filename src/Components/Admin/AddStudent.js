import React from 'react';
import './AddStudent.css';
import { Col, Container, Row } from 'react-bootstrap';

function AddStudent() {
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
                        <label for='name'>Enter Student's Name</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder={`Enter Student's Name`} />
                        
                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-select'>
                        <label for='class'>Select Class</label>

                        {/* <input type='text' className='form-control my-3 input-text' autoFocus required name='class' placeholder='Select Class' />

                        <i class="fa-solid fa-user input-icon"></i> */}

                        <select name='class'>
                            <option value='' disabled selected hidden>Select Class</option>
                            <option>1</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label for='rollNo'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='rollNo' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='feesPaid'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='feesPaid' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='gender'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='gender' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='dob'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='dob' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='email'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='email' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='mobile'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='mobile' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='mobile2'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='mobile2' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='permanentAddressStreetName'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressStreetName' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='permanentAddressCity'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressCity' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='permanentAddressState'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressState' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='permanentAddressPinCode'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressPinCode' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='permanentAddressCountry'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='permanentAddressCountry' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='correspondenceAddressStreetName'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressStreetName' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='correspondenceAddressCity'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressCity' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='correspondenceAddressState'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressState' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='correspondenceAddressPinCode'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressPinCode' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>

                    <div className='form-group'>
                        <label for='correspondenceAddressCountry'></label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='correspondenceAddressCountry' placeholder='' />

                        <i class="fa-solid fa-user input-icon"></i>
                    </div>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default AddStudent
