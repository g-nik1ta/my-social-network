import React from "react";
import Nav from './Navigation';
import Section from './Section';
import Aside from './Aside';

const Main = () => {
    return (
        <main>
            {/* <div className="container"> */}
                <Nav />
                <Section />
                {/* <Aside /> */}
            {/* </div> */}

        </main>
    )
}

export default Main;