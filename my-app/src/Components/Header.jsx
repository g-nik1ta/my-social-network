import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <span>Social Network</span>
            </div>
            <div className="menu-user">
                <button>register</button>
                <button>login</button>
            </div>
        </header>
    )
}

export default Header;