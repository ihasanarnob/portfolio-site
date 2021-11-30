import React from 'react';
import './Home.css';
import Menubar from '../Menubar/Menubar';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="banner">
        <Menubar></Menubar>
        <div className="main-info">
        <h1 className="mt-5"> Front-End Web Developer</h1>
        <p className="container container-fluid">My goal is to work with immense responsibility to design progressive web applications and solve user problems as an enthusiastic developer that has worked with numerous front-end technologies.</p>

        <a href="https://drive.google.com/uc?id=1wJaJa5Yk34urjdUqlNV435xYaQR3I0Ip&export=download" download ><Button className="px-5 py-2 mt-2" variant="danger">DOWNLOAD RESUME</Button>  </a>
        
        
        </div>
        </div>
    );
};

export default Home;