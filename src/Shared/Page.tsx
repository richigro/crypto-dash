import React from 'react'
import { AppContext } from '../App/AppProvider'

function Page({name, children}) {
  const [pageState] = React.useContext(AppContext)
  if(pageState.page !== name){
    return null;
  }
  return <div>{children}</div>;
}

export default Page
