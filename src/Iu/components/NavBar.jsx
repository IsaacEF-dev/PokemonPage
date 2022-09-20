import { Link, NavLink, useNavigate } from 'react-router-dom';
import {BsFillSunFill,BsFillMoonFill,ImLinkedin2,BsGithub,BsGlobe2} from 'react-icons/all'


export const NavBar = () => {

    const navigate=useNavigate();

    const onLogout=()=>{
        navigate("/login",{
            replace:true
        })
    }

    const toggle=(e)=>{
      e.preventDefault();
      const getBody=document.querySelector("body");
      
      if(e.target.className.includes("active")){
        e.target.className="slider round"
        getBody.className="";
        return;
      }

      e.target.className="slider round active"
      getBody.className="active";
    }

    const onMobileMenu=(e)=>{
        e.preventDefault();
        const mobileMenu=document.querySelector(".hamburger-lines");
        const navbarItems=document.querySelector(".navbar__items");

        mobileMenu.classList.toggle("active")
        navbarItems.classList.toggle("active")
    }

    return (
        <nav className="content__navbar">
            <div className="navbar">
                <img src="../../../assets/Pokemon-Logo.png" alt="" className="logo" />

                <div className="navbar__items">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active":""}`}
                        to="/pokemons"
                    >
                        Pokemons
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active":""}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>

                <div className="content__mode__social">
                    <div className="container__social__media">
                        <a className="social__media">
                            <ImLinkedin2 className='icon__social'/>
                        </a>
                        <a className="social__media">
                            <BsGithub className='icon__social'/>
                        </a>
                        <a className="social__media">
                            <BsGlobe2 className='icon__social'/>
                        </a>
                    </div>

                    <label htmlFor="" className='switch'>
                        <input type="checkbox"/>
                        <span onClick={toggle} className={`slider round`}></span>
                    </label>

                    <div className="hamburger-lines" onClick={onMobileMenu}>
                        <a href="" className='line line1'></a>
                        <a href="" className='line line2'></a>
                        <a href="" className='line line3'></a>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}
