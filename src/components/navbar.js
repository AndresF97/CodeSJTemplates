import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";


const Navbar = () =>{
    return(
    <>
            <nav
            className="navContainer md:flex md:items-center md:justify-between"
            >   <div>
                    <span>
                        <StaticImage
                            className="ml-10"
                            src="../images/CodeForSanJose.png"
                            layout="fixed"
                            alt="Code For San Jose Logo"
                            quality={95}
                            height={35}
                        />
                    </span>
                </div>
            <ul className="md:flex md:item-center">
                <li className="mx-6 mt-5 font-semibold ourWork">
                    <Link>Our Work</Link>
                </li>
                <li className="mx-6 mt-5 font-semibold">
                    <Link>Get Involved</Link>
                </li>
                <li className="mx-6 mt-5 font-semibold">
                    <Link>Events</Link>
                </li>
                <li className="mx-6 mt-5 font-semibold">
                    <Link>About Us</Link>
                </li>
                <li className="mx-6">
                    <Link>
                    <button className="text-white m-2 p-3 font-semibold text-sm rounded-full donate">
                        Donate
                    </button>
                    </Link>
                </li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar;
