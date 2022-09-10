import { Link, NavLink, useNavigate } from 'react-router-dom';


export const NavBar = () => {

    const navigate=useNavigate();

    const onLogout=()=>{
        navigate("/login",{
            replace:true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm  p-3 ">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img src="../../../assets/Pokemon-Logo.png" alt="" className='logo'/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active":""}`}
                        to="/pokemons"
                    >
                        Pokemons
                    </NavLink>
                    
                </div>
            </div>
        </nav>
    )
}
