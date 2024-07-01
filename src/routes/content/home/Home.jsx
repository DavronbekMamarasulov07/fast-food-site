import "./Home.css"

import Nav from "../../../components/nav/Nav"
import Hero from "../../../components/hero/Hero"
import { Outlet } from "react-router-dom"
import Card_Select from "../../../components/card_select/Card_Select"



const Home = () => {
  return (
       <div className="home_page">
         <Nav/>
         <Hero/>
         <Card_Select/>
         <div className="home_page_content">
            <Outlet/>
         </div>
       </div>
  )
}

export default Home
