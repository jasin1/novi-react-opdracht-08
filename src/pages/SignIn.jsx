import {Link} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useState} from "react";


function SignIn() {
    const {myAuth, loginFunction} = useContext(AuthContext);
    const [email, setEmail] = useState('');

    const handleEmail = () =>{
        loginFunction({myUser: email});
        console.log('gebruikers Email', myAuth.user);
    }


    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form>
                {/*<p>*invoervelden*</p>*/}
                <div>
                    <label htmlFor="email">
                        Email
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        Wachtwoord
                        <input
                            type="text"
                            id="password"
                        />
                    </label>
                </div>
                <button
                    type="button"
                    onClick={handleEmail}

                >Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;