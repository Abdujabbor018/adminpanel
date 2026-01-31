import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">ADMIN PANEL</div>

      <nav className="menu">
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/ratings">Ratings</NavLink>
        <NavLink to="/lessons">Lessons</NavLink>
        <NavLink to="/classes">Classes</NavLink>

      </nav>
    </aside>
  )
}

export default Sidebar
