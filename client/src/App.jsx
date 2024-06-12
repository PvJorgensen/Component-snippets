import { useState } from 'react'
import { AppRouter } from './components/AppRouter/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRouter></AppRouter>
    </>
  )
}

export default App
