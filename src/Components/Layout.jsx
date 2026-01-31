import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
