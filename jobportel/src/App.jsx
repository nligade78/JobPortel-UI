import React from 'react'
import NavBar from "./Components/NavBar/Navbar";
import Job from "./Components/JobDiv/Job"
import Search from "./Components/SearchDiv/Search"
import Footer from "./Components/FooterDiv/Footer"
import Value from "./Components/ValueDiv/Value"

function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  )
}

export default App