import { BsHandbag } from "react-icons/bs"; 
import { SlSettings } from "react-icons/sl"; 
import { HiOutlineTicket } from "react-icons/hi"; 
import { AiOutlineHeart ,  AiOutlineLogin} from "react-icons/ai"; 
import { TbNotification } from "react-icons/tb"; 
import { HiHome } from "react-icons/hi"; 
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside>
        <div className="sidebar_content">
          <img  src={logo} alt="logo" />
          <ul className="sidebar_list">
            <li className="sideabr_list_item"><NavLink className="sideabr_list_item_link" to="/home"><HiHome /></NavLink></li>
            <li className="sideabr_list_item"><NavLink className="sideabr_list_item_link" to="/notifications"><TbNotification /></NavLink></li>
            <li className="sideabr_list_item"><NavLink className="sideabr_list_item_link" to="/likes"><AiOutlineHeart /></NavLink></li>
            <li className="sideabr_list_item"><NavLink className="sideabr_list_item_link" to="/basket"><BsHandbag /> </NavLink></li>
            <li className="sideabr_list_item"><NavLink className="sideabr_list_item_link" to="/tickets"><HiOutlineTicket /></NavLink></li>
            <li className="sideabr_list_item"><NavLink className="sideabr_list_item_link" to="/settings"><SlSettings /></NavLink></li>
          </ul>
          <div className="sidebar_footer">
            <NavLink className="sideabr_footer_link"  to="/login">
              <AiOutlineLogin />
            </NavLink>
          </div>
        </div>
    </aside>
  )
}

export default Sidebar
