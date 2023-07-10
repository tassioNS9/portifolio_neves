import './Header.css'
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    const [toggle, setToggle] = useState(true);

    function handleclick() {
       setToggle(!toggle)

    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="header">
            <a onClick={scrollToTop} className="logo">Tassio Neves</a>

            <i onClick={handleclick} className={ toggle ? 'bx bx-x' : 'bx bx-menu' }id="menu-icon"></i>

            <nav className={toggle ? "navbar ativar" : "navbar"} >
 
                <Link
                onClick={()=>setToggle(false)}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >
                    Home
                </Link>


                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={()=>setToggle(false)}
                >
                    Sobre
                </Link>


                <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={()=>setToggle(false)}
                >
                    Tecnologias
                </Link>

                <Link
                    activeClass="active"
                    to="portifolio"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={()=>setToggle(false)}
                >
                    Portifolio
                </Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={()=>setToggle(false)}
                >
                    Contato
                </Link> 
                
            </nav>

        </header>
    )
}