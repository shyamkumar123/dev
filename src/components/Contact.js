import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Container>
      <h2>Contact Us</h2>
      <Form>
        <Label>
          Name:
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" />
        </Label>
        <Label>
          Message:
          <Textarea name="message" />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
