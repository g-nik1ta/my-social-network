import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <span>Social Network</span>
            </div>
            <div className="menu-user">
                <button className="font-awesome-icon">register</button>
                <button className="font-awesome-icon">login</button>
            </div>
        </header>
    )
}

export default Header;