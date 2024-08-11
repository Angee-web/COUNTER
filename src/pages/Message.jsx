// Message.js
import  { useState } from 'react';
import styled from 'styled-components';

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background-color: #f0f0f0;
  margin-top:40px
`;

const MessageHeading = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ChangeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Message Component
const Message = () => {
  // State management
  const [message, setMessage] = useState("Hello, Welcome to Our Shelter!");

  // Function to update the message
  const changeMessage = () => {
    setMessage("Thank you for Visiting Us!");
  };

  return (
    <Container>
      <MessageHeading>{message}</MessageHeading>
      <ChangeButton onDoubleClick={changeMessage}>Change Message</ChangeButton>
    </Container>
  );
};

export default Message;
