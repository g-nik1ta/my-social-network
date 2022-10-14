import React from "react";
import Nav from './Navigation';
import Section from './Section';
import Aside from './Aside';

const Main = (props) => {
    return (
        <main>
            <div className="container">
                <Nav />
                <Section state={props.appState} />
                {/* <Aside /> */}
            </div>

        </main>
    )
}

export default Main;