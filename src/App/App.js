import React from 'react';
import styled from 'styled-components';
import './App.css'

import Welcome from '../Settings/Welcome';
import AppBar from './AppBar';
import AppLayout from './AppLayout';
import AppProvider from './AppProvider';
import Settings from '../Settings';


export default function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Settings/>
      </AppProvider>
    </AppLayout> 
  );
};