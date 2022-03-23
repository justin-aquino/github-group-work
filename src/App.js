import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Layout from './components/layout/Layout'
function App () {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
