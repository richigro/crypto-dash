import React from 'react';

export const AppContext = React.createContext();

const pageSettings = () => {
  let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
  if(!cryptoDashData) {
    return ({page: 'settings', firstVisit: true})
  }
  return {page:'dashboard', firstVisit: false}
}

export default function AppProvider(props) {
  const [pageState, setPageState] = React.useState(pageSettings())
  const confirmFavorites = () => {
    setPageState({firstVisit: false, page: 'dashboard'})
    localStorage.setItem('cryptoDash', JSON.stringify({test: 'hello'}))
  }
  const value = [pageState, setPageState, confirmFavorites];
  return <AppContext.Provider value={value} {...props}/>
}
