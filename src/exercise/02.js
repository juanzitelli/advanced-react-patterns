// Compound Components
// http://localhost:3000/isolated/exercise/02.js
/* eslint no-unused-vars: "off" */

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children: toggleChildren}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(toggleChildren, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, toggle})
  })
}

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => (on ? children : null)

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => (on ? null : children)

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Geo</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App
