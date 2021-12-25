import React from 'react';
import './App.css';
import styled from 'styled-components';

import Welcome from './Welcome';

const MyButton = styled.div`
  color: green;
`;

export default function App() {
  return (
    <div>
      <Welcome />
      <MyButton>Hello</MyButton>
    </div>
  );
};