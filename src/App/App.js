import React from 'react';
import styled from 'styled-components';
import './App.css'

import Welcome from './Welcome';
import AppBar from './AppBar';
import AppLayout from './AppLayout';

import AppProvider from './AppProvider';


export default function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Welcome />
      </AppProvider>
    </AppLayout> 
  );
};