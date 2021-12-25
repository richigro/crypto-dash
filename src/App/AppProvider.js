import React from 'react';
const cc = require('cryptocompare');

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
  React.useEffect(() => {
    (async() => {
      const {data: coinData} = (await cc.coinList());
      console.log('The coin list', coinData);
      setPageState((prevState) => ({...prevState, coinList: coinData}))
    })();
  }, [])
  const value = [pageState, setPageState, confirmFavorites];
  return <AppContext.Provider value={value} {...props}/>
}
