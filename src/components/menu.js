import React from "react"

const Menu = () => {
  return (
    <>
      <nav class="menu">
      
        <button aria-expanded="false" aria-controls="menu-list">
        <span class="open">☰</span>
        <span class="close">×</span>
          Menu
        </button>

        <ul id="menu-list">
        
          <li><a href="">Link1</a></li>
          <li><a href="">Link1</a></li>
          <li><a href="">Link1</a></li>
          <li><a href="">Link1</a></li>
          <li><a href="">Link1</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
