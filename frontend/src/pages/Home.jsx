import React from "react";
import './Home.css';

import {useState, useEffect} from 'react';
import { sendRequest } from "../sendRequest";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";

const Home = () => {

    useEffect(() => {
        // const data = sendRequest()
    }, [])

    return ( 
        <div>
            <Feed />
        </div>
    )
}

export default Home;