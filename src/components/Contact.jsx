import styled from "styled-components";
import H1 from "./H1";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


  const Form = styled.form`
  width: 50%;
  background-color:${props => props.theme.gray};
  padding: 30px;
  margin: auto;
  margin-top: 3em;
  margin-bottom: 3em;
  border-radius: 16px;
  color: ${props => props.theme.white};
`;

  const Label = styled.label`
  display:flex;
  margin: auto;
  color: ${props => props.theme.white};
`;

  const Input = styled.input`
  display:flex;
  margin: auto;
  width: 100%;
  height: 3em;
  border-radius: 8px;
`;

  const MessageInput = styled.input`
  display:flex;
  margin: auto;
  width: 100%;
  height: 8em;
  border-radius: 8px;
`;

  const SubmitButton = styled.button`
  background: ${props => props.theme.white};
  color: ${props => props.theme.gray};
  margin: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 8px;
`;

  function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gs8zo5d', 'template_0tozgw6', form.current, 'user_qByFoiRrIhvb5JHiJPO7N')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };
    return <Form id="contact-me" ref={form} onSubmit={sendEmail}>
      <H1>Contact me!</H1>
      <Label>Name</Label>
      <Input placeholder="Enter your name" type="text" name="user_name" />
      <Label>Subject</Label>
      <Input placeholder="How can I assist you?" type="text" name="user_subject" />
      <Label>Email</Label>
      <Input placeholder="Enter your email" type="text" name="user_email" />
      <Label>Message</Label>
      <MessageInput type="text" name="message" />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  }

export default Contact;
