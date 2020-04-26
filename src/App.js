
import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"

import './index.css'

const pages = [
({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><Home /></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><Projects /></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}><About /></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'tomato' }}><Contact /></animated.div>,
]

export default function App() {

  const [index, set] = useState(0)
  const onClickRight = useCallback(() => set(state => (state + 1) % 4), [])
  const onClickLeft = useCallback(() => set(state => ( state <= 0 ?"" : state - 1) % 4), [])
  
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  
  return (

    <section className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}

      <button className="btn-move-right" onClick={onClickRight}>
        Move right
      </button>

      <button className="btn-move-left" onClick={onClickLeft}>
        Move left
      </button>

    </section>
  )
}

render(<App />, document.getElementById('root'))
