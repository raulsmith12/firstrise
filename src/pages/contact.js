import React, { useState } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const Contact = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [contactTime, setContactTime] = useState('');
    const [contactMethod, setContactMethod] = useState('');
    const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState('');

    const handleContactTime = (e) => setContactTime(e.target.value);
    const handleContactMethod = (e) => setContactMethod(e.target.value);
    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://galacticblue.net/firstrisebakery/wp-json/contact-form-7/v1/contact-forms/168/',
            headers: { 'content-type': 'multipart/form-data' },
            data: { customerName, customerEmail, customerPhone, contactTime, contactMethod, message }
        })
        .then(result => {
            setMailSent(result.data.sent)
            swal('Thank you!', 'We have received your message. You should hear back from us within the next two or three business days.', 'success')
        })
        .catch(error => swal('Uh oh!', 'Something went wrong. Maybe try sending your message again?', 'danger'));
    };

    return (
        <Container className="pt-5 mt-5">
            <h2 className="display-1">Contact First Rise Bakery</h2>
            <Form className="form" onSubmit={e => handleFormSubmit(e)}>
                <Row>
                    <Col md="6">
                        <Form.Group>
                            <Form.Label for="customerName"><h4>Name</h4></Form.Label>
                            <Form.Control type="text" name="customerName" id="customerName" bsSize="lg" placeholder="Please Enter a Name" required value={customerName} onChange={e => setCustomerName(e.target.value)} />
                            <Form.Control.Feedback>Name is required to submit form</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group>
                            <Form.Label for="customerEmail"><h4>Email</h4></Form.Label>
                            <Form.Control type="email" name="customerEmail" id="customerEmail" bsSize="lg" placeholder="Please Enter an Email" required value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                            <Form.Control.Feedback>Please enter a valid email address to submit form</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Form.Group>
                            <Form.Label for="customerPhone"><h4>Phone</h4></Form.Label>
                            <Form.Control type="phone" name="customerPhone" id="customerPhone" bsSize="lg" placeholder="Please Enter a Phone Number" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                        </Form.Group>
                        <h4>Preferred Time to Contact You?</h4>
                        <Form.Group>
                            <Form.Label>
                                <Form.Check type="radio" name="timeRadio" value="day" checked={contactTime==='day'} onChange={handleContactTime} label="Day" />{' '}
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <Form.Check type="radio" name="timeRadio" value="afternoon" checked={contactTime==='afternoon'} onChange={handleContactTime} label="Afternoon" />{' '}
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <Form.Check type="radio" name="timeRadio" value="evening" checked={contactTime==='evening'} onChange={handleContactTime} label="Evening" />{' '}
                            </Form.Label>
                        </Form.Group>
                        <h4>Which Way Do You Prefer We Contact You?</h4>
                        <Form.Group>
                            <Form.Label>
                                <Form.Check type="radio" name="contactRadio" value="email" checked={contactMethod==='email'} onChange={handleContactMethod} label="Email" />{' '}
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                <Form.Check type="radio" name="contactRadio" value="phone" checked={contactMethod==='phone'} onChange={handleContactMethod} label="Phone" />{' '}
                            </Form.Label>
                        </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group>
                            <Form.Label for="messageArea"><h4>Message</h4></Form.Label>
                            <Form.Control type="textarea" name="messageArea" id="messageArea" bsSize="lg" style={{height: '200px'}} placeholder="Please Leave a Message, a Comment, a Compliment, or a Suggestion" value={message} onChange={e => setMessage(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" className="button-title">Submit</Button>{' '}
                    </Col>
                </Row>
                <div>
                    {mailSent}
                </div>
            </Form>
        </Container>
    )
};

export default Contact;
