import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* 特別注意：要加上exact屬性，首頁的樣式才會正常被套用，不然就會一直有被按到的樣式 */}
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                首頁
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/login"
              >
                登入
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/logout"
              >
                登出
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/register"
              >
                註冊
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/profile"
              >
                個人資料
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu
