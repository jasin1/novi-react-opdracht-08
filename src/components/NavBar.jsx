import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const navigate = useNavigate();

    const {myAuth, logoutFunction} = useContext(AuthContext);
    // console.log(toggleAuth);
    console.log('new user', myAuth.user.myUser);



    // console.log(whatsInTheContext);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>

                {!myAuth.isAuth ? (
                    <div>
                        <button
                            type="button"
                            onClick={() => navigate('/signin')}
                        >
                            Log in
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Registreren
                        </button>
                    </div>
                ) : (
                    <div>

                        <p>{myAuth.user.myUser}</p>
                        <button
                            type="button"
                            onClick={logoutFunction}
                        >Log out
                        </button>

                    </div>
                )}

            </div>
        </nav>
    );
}

export default NavBar;