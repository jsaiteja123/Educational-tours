import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from './loginbg.jpg';
import axios from 'axios';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "success") {
                    navigate('/home', { state:{ email } });
                } else {
                    console.log("Login failed");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-white p-3 rounded" style={{ width: '300px' }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                        Login
                    </button>

                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-light w-100">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
