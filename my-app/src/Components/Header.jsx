import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="">Social Network</a>
                </div>
                <div className="header-info">
                    <div className="menu-user">
                        <button>register</button>
                        <button>login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;