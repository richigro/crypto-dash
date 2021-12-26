import { coinList } from 'cryptocompare'
import React from 'react'
import { AppContext } from '../App/AppProvider'
function Content(props) {
  const [pageState] = React.useContext(AppContext)
  if(!pageState.coinList) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Content
