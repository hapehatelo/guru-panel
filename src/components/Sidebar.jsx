import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = () => {

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a className="brand-link">
        <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
        <span className="brand-text font-weight-light">Guru Ahli</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link to='/chapter' className="nav-link">
                <i className="nav-icon fas fa-border-style"></i>
                <p>Chapters</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/course' className="nav-link">
                <i className="nav-icon fab fa-discourse"></i>
                <p>Courses</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/cities' className="nav-link">
                <i className="nav-icon fas fa-city"></i>
                <p>Cities</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/province' className="nav-link">
                <i className="nav-icon far fa-map"></i>
                <p>Province</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/classes' className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>Classes</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/quiz' className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>Quizzes</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )

}

export default SideBar;
