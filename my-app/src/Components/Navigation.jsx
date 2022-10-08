import React from "react";

const Nav = () => {
    return (
        <nav className="active">
            <ul>
                <li className="list active">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span className="title">home</span>
                    </a>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span className="title">profile</span>
                    </a>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                        <span className="title">messages</span>
                    </a>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span className="title">setting</span>
                    </a>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <span className="title">Password</span>
                    </a>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="title">sign out</span>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

window.addEventListener("load", () => {
    const list = document.querySelectorAll('.list');
    list.forEach(element => {
        element.addEventListener("click", () => {
            list.forEach(el => {
                el.className = 'list';
            });
            element.className = 'list active';
        })
    });
})


export default Nav;