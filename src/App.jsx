import React from 'react'
import { ModeToggle } from './components/mode-toggle'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1>Hello World!</h1>
      <ModeToggle />
    </div>
  )
}

export default App