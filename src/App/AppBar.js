import React from 'react';
import styled, {css} from 'styled-components'

const Logo = styled.div`
 font-size: 1.5em;
`

const Bar = styled.div`
 display: grid;
 grid-template-columns: 180px auto 100px 100px;
 margin-bottom: 40px;
`
const ControlButtonElement = styled.div`
  cursor: pointer;
  ${props => props.active && css`
   text-shadow: 0px 0px 60px #03ff03;
  `}
`;

function toProperCase(lowerCaseString) {
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.substr(1);
}

function ControlButton({name, active, ...props}) {
  return (<ControlButtonElement active={active} {...props}>{toProperCase(name)}</ControlButtonElement>)
}
export default function() {
  return <Bar>
   <ControlButton name="cryptoDash"/>
   <div/>
   <ControlButton name="dashboard"/>
   <ControlButton name="settings" active/>
  </Bar>
}