import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/detail">Detail</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
            </ul>
        </div>
    )
};

export default Home;