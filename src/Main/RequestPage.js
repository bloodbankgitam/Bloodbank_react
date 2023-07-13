import React, { useState } from 'react';
import Bg from "../assets/img/Background_form.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../project_styles/donatepage.css';
import Button from 'react-bootstrap/Button';
export default function RequestNew() {
  const [Fullname, setFullname] = useState("");
  const [email, setemail] = useState("");

  const handleName = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, "");

    setFullname(result);
  };

  const handleEmail = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, "");

    setemail(result);
  };
  return (
    <>
    <div className=' bg-black '>
    <div className='imageclass col-2'>
        <img src={Bg} alt='#'/>
    </div>
    <div className='class1 col-8'>
        <h1 style={{color: "white", fontSize: 50}}>Request</h1>
        <br/>
        <Row>
        <Col>
    <Form.Label style={{color: "white"}}>First Name</Form.Label>
      <Form.Control
        type="text"
        id="firstname"
        placeholder='Enter your name'
        value = {Fullname}
        onChange = {handleName}
        className='pb-2'
      />
      </Col>
      <Col>
      <Form.Label style={{color: "white"}}>Blood Group</Form.Label>
      <Form.Select aria-label="BloodGroup">
      <option>Select Blood Group</option>
      <option value="1">A+</option>
      <option value="2">A-</option>
      <option value="3">B+</option>
      <option value="3">B-</option>
      <option value="3">O+</option>
      <option value="3">O-</option>
      <option value="3">AB+</option>
      <option value="3">AB-</option>
      <option value="3">Other</option>

    </Form.Select>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <Form.Label style={{color: "white"}}>Email</Form.Label>
      <Form.Control
        type="email"
        id="firstname"
        placeholder='Enter Email'
        value = {email}
        onChange={handleEmail}
        className='pb-2'
      />
        </Col>
        <Col>
        <Form.Label style={{color: "white"}}>Phone number</Form.Label>
      <Form.Control
        type="number"
        id="phonenumber"
        placeholder='Enter Phone Number'
        className='pb-2'
      />
    
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <Form.Label style={{color: "white"}}>Gender</Form.Label>
      <Form.Select aria-label="Gender">
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Other</option>
      </Form.Select>
        </Col>
        <Col>
        <Form.Label style={{color: "white"}}>Required Date</Form.Label>
      <Form.Control
        type="date"
        id="dob"
        placeholder='Enter Date of Birth'
        className='pb-2'
      />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <Form.Label style={{color: "white"}}>AGE</Form.Label>
      <Form.Control
        type="email"
        id="firstname"
        placeholder='Enter Email'
        className='pb-2'
      />
        </Col>
        <Col>
        <Form.Label style={{color: "white"}}>No of Units required</Form.Label>
      <Form.Control
        type="number"
        id="phonenumber"
        placeholder='Enter Phone Number'
        className='pb-2'
      />
    
        </Col>
      </Row>
      <br/>
      <Row>
      <Form.Label style={{color: "white"}}>Purpose</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Row>
    <div>
    <center>
    <Button type="submit" className='col-7 mt-5'>Submit form</Button>
    </center>
    </div>
    </div>
    
    </div>
    </>
  );
}