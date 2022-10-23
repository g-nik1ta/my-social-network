import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Section/Home";
import Profile from "./Section/Profile";
import Setting from "./Section/Setting";
import Friends from './Section/Friends';
import ChatContainer from "./Section/Chat/ChatContainer";

const Section = () => {
    return (
        <section>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/friends' element={<Friends />} />
                <Route exact path='/chat/*' element={<ChatContainer />} />
                <Route path='/setting' element={<Setting />} />
            </Routes>
        </section>
    )
}

export default Section;