import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Content.css"

const Content = () => {
  return (
    <div className='content_main'>
      <Sidebar/>
      <div className="content_wrapper">
        <Outlet/>
      </div>
    </div>
  )
}

export default Content
