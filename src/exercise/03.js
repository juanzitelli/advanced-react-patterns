// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
  )
}

const useToggleContext = () => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error(
      'usetoggleContext must be used inside a ToggleContext.Provider',
    )
  }
  return context
}

const ToggleOn = ({children}) => {
  const {on} = useToggleContext()
  return on ? children : null
}

const ToggleOff = ({children}) => {
  const {on} = useToggleContext()
  return on ? null : children
}

const ToggleButton = ({...props}) => {
  const {on, toggle} = useToggleContext()
  return <Switch on={on} onClick={toggle} {...props} />
}

const App = () => {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>

        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
