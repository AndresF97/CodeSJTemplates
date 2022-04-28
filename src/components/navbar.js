import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";


const Navbar = () =>{

     const MenuBurger = (event) =>{
        console.log(event.target.name)
        let listItem = document.querySelector('ul');
        //return  event.target.name === 'menu-outline' ? (event.target.name = 'close',listItem.classList.add('top-[80px]'), listItem.classList.add('opacity-100')) : (event.target.name ='menu-outline', listItem.classList.remove('top-[80px]'), listItem.classList.remove('opacity-100'))
        return  event.target.name === 'menu-outline' ? (event.target.name = 'close',listItem.classList.remove('absolute'),listItem.classList.add('display:grid'), listItem.classList.add('opacity-100'),listItem.classList.add('text-center'),listItem.classList.add('pl-0')) : (event.target.name ='menu-outline', listItem.classList.remove('opacity-100'), listItem.classList.add('absolute'), listItem.classList.remove('display:grid'),listItem.classList.remove('pl-0') )
        
    }
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
                        <ion-icon name="menu-outline"  onClick={MenuBurger}></ion-icon>
                    </span>
                </div>
            <ul className=" md:flex md:item-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 top-[-400px] transition-all ease-in duration-500 " id="mini-background">
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
