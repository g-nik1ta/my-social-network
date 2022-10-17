import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Section/Home";
import Profile from "./Section/Profile";
import Chat from "./Section/Chat";
import Setting from "./Section/Setting";

const Section = (props) => {
    return (
        <section>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route exact path='/chat/*' element={<Chat chat={props.chat} dispatch={props.dispatch} />} />
                <Route path='/setting' element={<Setting />} />
            </Routes>
        </section>
    )
}

export default Section;