import React from 'react';
import './App.css';
import {Content} from "./components/content";
import {Intro} from "./components/intro";
import {Project} from "./components/project";
import {Experience} from "./components/experience";
import {SelfDescription} from "./components/self-description";
import {Career} from "./components/career";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Intro/>
                <div className="list">
                    <SelfDescription/>
                    <Career/>
                    <Project/>
                    <Content/>
                    <Experience/>
                </div>
            </header>
        </div>
    );
}

export default App;
