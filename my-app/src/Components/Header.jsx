import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <span>Social Network</span>
                </div>
                <div className="header-info">
                    <div className="toggle active">
                        <ion-icon name="menu-outline" className="open"></ion-icon>
                        <ion-icon name="close-outline" className="close"></ion-icon>
                    </div>
                    <div className="menu-user">
                        <button className="font-awesome-icon">register</button>
                        <button className="font-awesome-icon">login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

window.addEventListener("load", () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('nav');
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    });
})


export default Header;