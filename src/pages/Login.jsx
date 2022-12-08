import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    return (
        <form>
            <h3>Sign In</h3>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                </div>
            </div>
            <div className="d-grid">
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log("test");
                        fetch("http://localhost:5000/login");
                    }}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Login;