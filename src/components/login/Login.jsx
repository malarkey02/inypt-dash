import React, {useState} from "react";
import PropTypes from 'prop-types';

function Login ({setToken}){

    const [userid, setuserid] = useState('');
    const [pass, setpass] = useState(''); 


    async function loginUser(credentials){
        return fetch ('http://localhost:3002/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(credentials)
           })
           .then(data=>data.json());
        }
    


        const handleSubmit = async e => {
            e.preventDefault(); 
            const token = await loginUser({
                username: userid, 
                password: pass
            });
            setToken(token);
        }
      

        

    return (
        <div> 
            <h1>Login</h1>
            <p>Enter your Dashboard</p>

            <form onSubmit={handleSubmit}> 
                
                <div>
                    <label for="username">Username</label>
                    <input id="username" name="username" onChange={e => setuserid(e.target.value)} type="text"></input>
                </div>

                <div>
                    <label for="password">Password</label>
                    <input id="password" name="password" onChange={e => setpass(e.target.value)} type="password"></input>
                </div>
                <button type="submit">Sign In</button>

            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;