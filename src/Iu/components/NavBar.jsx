import { Link, NavLink, useNavigate } from 'react-router-dom';


export const NavBar = () => {

    const navigate=useNavigate();

    const onLogout=()=>{
        navigate("/login",{
            replace:true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 ">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
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

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-link nav-item text-info">
                        Isaac Escutia
                    </span>
                    <button 
                    className='nav-link nav-item btn'
                    onClick={onLogout}>
                    Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
