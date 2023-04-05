import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Nav = () => {
   
    return (
      <div className='navbar'>
        <div className='container'>
          <a href="#" className="logo"> Logo </a>
          <ul>
            {/* <Link to='/'> Home </Link> 
            <Link to='/about'> About </Link>  */}
            {/* اللينك ما بتعمل ريلود للصفحة زي ال آي  */}
            {/* كأنو بعمل بريفينت ديفولت للصفحة يعني م بعمل ريلود */}


            <NavLink to='/'> Home </NavLink> 
            {/* النافلينك نفس فكرة اللينك لكن لما أضغط على أي لينك فيهم بضيف إلو كلاس اسمو آكتيف */}
            <NavLink to='/about'> About </NavLink>
            <NavLink to='/blog'> Blog </NavLink>
          </ul>
        </div>
      </div>
    )
}

export default Nav