import React  from 'react'
import Home from '../newsComponent/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  
import NewsError from '../newsComponent/NewsError'

const News = () => { 
 const ctgOps =   ["business", "entertainment", "health", "science", "technology"]  
  return (
    <div>
     
      <Router>

        <Routes>
          <Route path='/' element={  <Home catr="general" key={"home"} />}  />
          

          {
            ctgOps.map(Item =>  <Route path={`/${Item}`} element={  <Home catr={Item} key={Item} />}  />)
          }
         
          {/* <Route path='/' element={  <Home/>}  />
          <Route path='/' element={  <Home/>}  /> */}

          <Route path='*'  element={<NewsError/>} />
        </Routes>
      </Router>
         
     
    </div>
  )
}

export default News
