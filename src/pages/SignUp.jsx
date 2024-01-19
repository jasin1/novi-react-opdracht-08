import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <div>
              <label htmlFor="email">
                  Email
                  <input
                      type="text"
                      id="email"
                  />
              </label>
              <label htmlFor="user">
                  Gebruikersnaam
                  <input
                      type="text"
                      id="user"
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
          <button type="button">Registreren</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;