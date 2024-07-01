import { GoSearch } from "react-icons/go"; 
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav_content">
              <div className="nav_wrapper">
                <h3>
                  Welcome,   <span>{localStorage.getItem("name").toLocaleUpperCase()}</span> 👋
                </h3>
                <p>Discover whatever you need</p>
              </div>
              <div className="nav_search_content">
                <GoSearch />
                <input className="nav_search" type="text"  placeholder="Search"/>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
