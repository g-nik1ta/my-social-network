import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href="">Social Network</a>
            </div>
            <div className="header-info">
                <div className="header-nav">
                    <span>Home</span>
                    <span>About</span>
                    <span>Blog</span>
                    <span>Contact</span>
                </div>
                <div className="menu-user">
                    <div className="box">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <button>register</button>
                    <button>login</button>
                </div>
            </div>
        </header>
    )
}

export default Header;