import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";


const Navbar = () =>{
    return(
    <>  
        <Helmet>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </Helmet>
            <nav
            className="navContainer md:flex md:items-center md:justify-between"
            >   <div className="flex justify-between items-center">
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
                    <span className="text-md cursor-pointer md:hidden block mx-2">
                        <ion-icon name="menu-outline"></ion-icon>
                    </span>
                </div>
            <ul className=" md:flex md:item-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 " id="mini-background">
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
                    <button className="text-white m-2 p-3 font-semibold text-sm rounded-full" id="donate">
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
