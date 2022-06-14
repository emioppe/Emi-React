import React from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import {Link,NavLink} from "react-router-dom" 
import Cart from '../Cart/Cart'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const NavBar = () => {
  return (
    <nav className ="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink to="/" className={({ isActive }) => IsActive? `clase1` : `clase1` }>NO estoy loca</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Navlink to="/categoria/remeras" >Carteras</NavLink>
        </li>
        <li className="nav-item">
          <Navlink to="/categoria/gorras">Bolsos</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mochilas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Accesorios</a>
        </li>
      </ul>

       <link to="/Cart"> <cart/> </link> 

     {/*<a href="/Cart"> <Cart/></a>*/}
         
    
    </div>
  </div>
</nav>

  )
  
}

export default NavBar