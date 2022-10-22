import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="active">
            <ul>
                <li className="list active">
                    <b></b>
                    <b></b>
                    <NavLink className="home" to='/home'>
                        <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span className="title">home</span>
                    </NavLink>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <NavLink className="profile" to='/profile'>
                        <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span className="title">profile</span>
                    </NavLink>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <NavLink className="chat" to='/chat'>
                        <span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                        <span className="title">messages</span>
                    </NavLink>
                </li>
                <li className="list">
                    <b></b>
                    <b></b>
                    <NavLink className="setting" to='/setting'>
                        <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span className="title">setting</span>
                    </NavLink>
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
            <div className="toggle active">
                <ion-icon name="menu-outline" className="open"></ion-icon>
                <ion-icon name="close-outline" className="close"></ion-icon>
            </div>
        </nav>
    )
}

window.addEventListener("load", () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('nav');
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    const list = document.querySelectorAll('.list');
    list.forEach(element => {
        element.addEventListener("click", () => {
            list.forEach(el => {
                el.className = 'list';
            });
            element.className = 'list active';
        })
    });

    const section = document.querySelector("section");
    const sectionChild = section.childNodes;
    const activeList = document.querySelector('nav').querySelector(`a.${sectionChild[0].className}`);
    list.forEach(el => {
        el.className = 'list';
    });
    activeList.parentNode.className = 'list active';
})


export default Nav;