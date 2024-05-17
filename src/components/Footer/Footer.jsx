import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import { mail } from 'react-icons-kit/icomoon/mail';
import { phone } from 'react-icons-kit/icomoon/phone';

// import { twitter } from 'react-icons-kit/icomoon/twitter';
// import { facebook } from 'react-icons-kit/icomoon/facebook';

// import { linkedin } from 'react-icons-kit/icomoon/linkedin';
// import { youtube } from 'react-icons-kit/icomoon/youtube';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="probootstrap-footer probootstrap-bg">
      <Container>
        <Row>
          <Col md={8} sm={12}>
            <div className="probootstrap-footer-widget">
              {/* <h3>About The School</h3> */}
              <p>
                SUNSHINE EDUCATION ACADEMY was established in the year 2012 with thw objective of providing "SMARTKIDZ-SKILL ENHANCEMENT PROGRAMME USING
                EXPERIENTAL LEARNING PLATFORM" which supports schools, parents and teachers in developing smart children.Our mission is to ensure children to have analytical, logical and holistic development of brain to identify their unique skills through our SMARTKIDZ PROGRAM
              </p>
              {/* <h3>Social</h3> 
              <ul className="probootstrap-footer-social">
              <li>
                  <a href="#">
                    <Icon icon={facebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon icon={twitter} />
                  </a>
                </li>
               
                <li>
                  <a href="#">
                    <Icon icon={linkedin} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon icon={youtube} />
                  </a>
                </li>
              </ul> */}
            </div>
          </Col>
          
          <Col md={4} sm={12}>
            <div className="probootstrap-footer-widget">
              <h3>Contact</h3>
              <ul className="probootstrap-contact-info">
                <li>
                  <Icon icon={home} /><span>INDIA, TAMILNADU, CHENNAI</span>
                </li>
                <li>
                  <Icon icon={mail} /><span>info@smartkidz.co.in</span>
                </li>
                <li>
                  <Icon icon={phone} /><span>+91 9962322122</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={12}  sm={12}>
            <div className="probootstrap-footer-widget">
              <h3 style={{textAlign:"center", margin:'20px'}}>GET IN TOUCH</h3>
              </div>
              </Col>

          <Col md={6}  sm={12} mdPush={1}>
            <div className="probootstrap-footer-widget1">
              <h3>Don't Be Shy</h3>
              <p>
               Feel free to get in touch with us we always open to discussing new projects.
               Creative ideas or opportunities to be part of your vision. children 
               to identify their unique skills & individuality.
            </p>
            </div>
          </Col>

          <Col md={2}>
            <div className="probootstrap-footer-widget1">
                <Form>
                    <FormGroup>
                        <Label for="name"><p className='probootstrap-footer-widget1'>Name</p></Label>
                        <Input
            type="text"
            name="name"
            id="name"
            style={{
                border: 'none',
                borderBottom: '2px solid #0ea5e9', 
                backgroundColor: 'transparent', 
                color:"#0ea5e9", 
                outline: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
                padding: '5px 0', 
                marginTop:"-30px",
                width:"170px"
            }}
           
        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone"><p className='probootstrap-footer-widget1'>Phone</p></Label>
                        <Input
            type="text"
            name="name"
            id="name"
            style={{
                border: 'none',
                borderBottom: '2px solid #0ea5e9', 
                backgroundColor: 'transparent', 
                color:"#0ea5e9", 
                outline: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
                padding: '5px 0', 
                marginTop:"-40px",
                width:"170px"
            }}
           
        />
                    </FormGroup>
                   </Form>
            </div>
        </Col> 



        <Col md={2}  sm={12}>
            <div className="probootstrap-footer-widget1">
            <Form>
            <FormGroup>
                        <Label for="email"><p className='probootstrap-footer-widget1'>Email</p></Label>
                        <Input
            type="text"
            name="name"
            id="name"
            style={{
                border: 'none',
                borderBottom: '2px solid #0ea5e9', 
                backgroundColor: 'transparent', 
                color:"#0ea5e9", 
                outline: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
                padding: '5px 0', 
                marginTop:"-30px",
                width:"170px",
            }}
        />
     </FormGroup>
                    <FormGroup>
                        <Label for="message"><p className='probootstrap-footer-widget1'>Message</p></Label>
                        <Input
            type="text"
            name="name"
            id="name"
            style={{
                border: 'none',
                borderBottom: '2px solid #0ea5e9', 
                backgroundColor: 'transparent', 
                color:"#0ea5e9", 
                outline: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
                padding: '5px 0', 
                marginTop:"-40px",
                width:"170px"
              
            }}  
        />
       </FormGroup>
       <Col md={2}  sm={12}>
                    <div className="button-container">
            <Button className="custom-button">Submit</Button>
        </div>
        </Col>
                </Form>
            </div>
        </Col> 
        </Row>
      </Container>


   
    </footer>
  );
};

export default Footer;
