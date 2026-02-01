import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Classes from './pages/Classes'
import Lessons from './pages/Lessons'
import Ratings from './pages/Ratings'

import './App.css'

const App = () => {
  return (
    <BrowserRouter basename='/AdminPanel/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Students />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="ratings" element={<Ratings />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="classes" element={<Classes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
