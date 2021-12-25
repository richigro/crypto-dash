import React from 'react';
export const AppContext = React.createContext();

export default function AppProvider(props) {
  const [page, setPage] = React.useState('dashboard')
  const value = [page, setPage];
  return <AppContext.Provider value={value} {...props}/>
}
