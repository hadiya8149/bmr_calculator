import React from "react"
// here we gonna use express 
class Login extends React.Component{
    render(){
        return(
            <div className="login-page">
            <div className="form-panel p-5 d-flex flex-column w-100 bg-light">
                <div className="container">
                <form id="login_form" method="post" >
                    {/* logo here */}
                    <div className="form-group row mb-12">
                        <input type="text" className="form-control" name="email" id="email" placeholder="Email or username"></input>
                    </div>
                    <div className="form-group row mb-12">
                        <input type="text" className="form-control mt-3" name="password" id="password" placeholder="Password"></input>
                    </div>
                    <div className="form-check mt-4 w-100">
                        <label className="form-check-label text-dark " >
                            <input type="checkbox"  name="remember" className="form-check-input"></input>
                              Remember me
                        </label>

                    </div>
                    <div className="form-group row mb-12">
                        <button type="Submit" className="btn btn-primary btn-md my-3 w-100 ">Login</button>

                    </div>
                </form>
                <a className="link-secondary" href="/forgot-pass">Forgot Password</a><br/>
                <a  className="link-secondary" href="/signup">Create an account</a><br/>
                <a href="/about" className="link-secondary">Learn more about our services</a>
                </div>
                </div>
                <div className="branding">
                    <div className="wrapper">
                    <p>Nice to see you again</p>
                    <h1>
                        WELCOME BACK
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
                </div>
        );
    }
}
export default Login;