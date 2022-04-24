import React from "react";
import { Link } from "gatsby"


const Navbar = () =>{
    return(
    <>
        <div className="navContainer">
            <nav
            className="flex items-center p-3 flex-wrap"
            >   
                <div>
                    <Link>Our Work</Link>
                </div>
                <div>
                    <Link>Get Involved</Link>
                </div>
                <div>
                    <Link>Events</Link>
                </div>
                <div>
                    <Link>About Us</Link>
                </div>
                <div>
                    <Link>
                    <button className="text-white m-2 p-3 font-semibold text-sm rounded-full donate">
                        Donate
                    </button>
                    </Link>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar;
