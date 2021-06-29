import React from 'react'
import{ NavLink} from 'react-router-dom'

function Menu() {
    return (
        <>
            <div className="menu_style">
            <NavLink exact activeClassName="active_class" to='/'>About Us</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'>Contact Us</NavLink>
            <NavLink exact activeClassName="active_class" to='/service'>service</NavLink>
            <br></br>
            {/* <a href="/contact">contact us</a>
            <a href="/">About Us</a> */}
            </div>
            <div>
            <button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

            </div>
            
        </>
    )
}

export default Menu
