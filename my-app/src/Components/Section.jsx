import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Section/Home";
import Profile from "./Section/Profile";
import Chat from "./Section/Chat";
import Setting from "./Section/Setting";
import ChatContainer from "./Section/ChatContainer";

const Section = () => {
    return (
        <section>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route exact path='/chat/*' element={<ChatContainer />} />
                <Route path='/setting' element={<Setting />} />
            </Routes>
        </section>
    )
}

export default Section;