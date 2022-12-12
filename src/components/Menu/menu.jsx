import "./menu.css";
import { BsYoutube, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Menu(){

    const [active, setMode] = useState(false)

    const toggleMode = () => {
        setMode(!active)
    }

    return(
        <div className="menu">        
            <a className="social" href="https://www.youtube.com/" target="_blank">
                    <BsYoutube size={25}  color="#fff"/>
            </a>

            <a className="social" href="https://www.instagram.com/" target="_blank">
                <BsInstagram size={25}  color="#fff"/>
            </a>
            <Link className="menu-item" to="/links" >
                Meus Links
            </Link>
        </div>
)}