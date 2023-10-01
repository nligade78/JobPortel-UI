import React from 'react'
import NavBar from "./Components/NavBar/Navbar";
import  Job  from "./Components/JobDiv/Job"
import  Search  from "./Components/SearchDiv/Search"
import  Footer  from "./Components/FooterDiv/Footer"
import  Value  from "./Components/ValueDiv/Value"

function App  ()  {
  return (
    <div>
       <NavBar/>
      <Job/>
     
      <Search/>
      <Footer/>
      <Value/>
  </div>
  )
}

export default App