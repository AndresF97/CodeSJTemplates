import React from "react";
import { Link } from "gatsby"


const Navbar = () =>{
    return(
        <div
        style={{
            background:"#646a74"
        }}
        >
            <ul
            style={{
                listStyle:"none",
                display:"flex",
                justifyContent:"space-evenly",
                tetxtColor:"#ffffff"
            }}
            >   
                <li>
                    <Link>Our Work</Link>
                </li>
                <li>
                    <Link>Get Involved</Link>
                </li>
                <li>
                    <Link>Events</Link>
                </li>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link><button>Donate</button></Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
