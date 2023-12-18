import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout'
import Dashboard from './pages/dashboard'
import Chart from './pages/chart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}> 
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/chart' element={<Chart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
