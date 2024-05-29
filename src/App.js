import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import TaskDashboard from './Components/TaskDashboard'
// import loginstyle\node_modules\bootstrap\dist\css\bootstrap.min.css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import '../  /rsuite/dist/rsuite.min.css';
import "../node_modules/rsuite/dist/rsuite.min.css"

const App = () => {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/> */}
      <Route path='/' element={<TaskDashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
