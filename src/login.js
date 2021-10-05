import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
    }

    return (
        <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                           className="form-control" 
                           value={email} 
                           onChange={(e) => setEmail(e.target.value)} 
                           placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control"  
                    value={password}
                    onChange={(e) => setPassowrd(e.target.value)} 
                    placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
    )
}

export default Login