import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href="">Social Network</a>
            </div>
            <div className="header-info">
                <div className="header-menu">
                    <div className="icon">
                        <i className="add-post"></i>
                    </div>
                    <div className="icon">
                        <i className="search"></i>
                    </div>
                    <div className="icon">
                        <i className="dark-theme"></i>
                    </div>
                    <div className="icon">
                        <i className="notifications"></i>
                    </div>
                </div>
                <div className="login">
                    <button>register</button>
                    <button>login</button>
                </div>
            </div>
        </header>
    )
}

export default Header;