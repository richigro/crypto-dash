import React from 'react';
import styled from 'styled-components';
import './App.css'

import Welcome from './Welcome';
import AppBar from './AppBar';
import AppLayout from './AppLayout';


export default function App() {
  return (
    <AppLayout>
      <AppBar/>
      <Welcome />
    </AppLayout> 
  );
};