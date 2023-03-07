import React from "react";

const FormLogIn = () => {
    return (
    <div className="divForm border border-1 rounded-3 p-3 bg-light">
        <form>
            <div className="mb-3 d-flex justify-content-center">
                <h4>Sign In with :
                <i className="bi bi-facebook mx-1"></i>
                <i class="bi bi-google mx-1"></i>
                <i class="bi bi-linkedin mx-1"></i>
                </h4> 
            </div>
            <h5 className="text-center">OR</h5>
            <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Username" required />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <div className="input-group">
                <input type="password" className="form-control" id="password" name="password" required placeholder="Password" />
                <button className="btn btn-outline-secondary" type="button" id="show-password-btn">Show</button>
                </div>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember-me" name="remember-me" />
                <label className="form-check-label" for="remember-me">Remember me</label>
            </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </div>
    )
}

export default FormLogIn;