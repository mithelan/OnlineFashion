import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import Axios from "axios";
import ErrorNotice from "./ErrorNotice";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                "http://localhost:5000/customers/login",
                loginUser
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            {error && (
                                <ErrorNotice message={error} clearError={() => setError(undefined)} />
                            )}
                            <form className="form-signin" onSubmit={submit}>
                                <div className="form-label-group">
                                    <input

                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                         id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                    <br/>
                                </div>
                                <div className="form-label-group">
                                    <input
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="inputPassword" className="form-control" placeholder="Password" required />
                                    <br/>
                                </div>

                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                <hr className="my-4" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>












    );
}
