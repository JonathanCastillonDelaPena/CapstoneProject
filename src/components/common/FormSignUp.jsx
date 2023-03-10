import React from "react";

const FormSignUp = () => {
    return (
        // <div className="d-flex flex-column justify-content-center align-items-center ">
        //     <h2>Sign Up</h2>
        //     <form className="form-control d-flex flex-column w-25">
        //         <label htmlFor="firstName">First Name</label>
        //         <input type="text" id="firstName" name="firstName" required />

        //         <label htmlFor="lastName">Last Name</label>
        //         <input type="text" id="lastName" name="lastName" required />

        //         <label htmlFor="email">Email</label>
        //         <input type="email" id="email" name="email" required />

        //         <label htmlFor="password">Password</label>
        //         <input type="password" id="password" name="password" required />

        //         <label htmlFor="username">Username</label>
        //         <input type="text" id="username" name="username" required />

        //         <label htmlFor="gender">Gender</label>
        //         <select id="gender" name="gender" required>
        //             <option value="">Select Gender</option>
        //             <option value="male">Male</option>
        //             <option value="female">Female</option>
        //             <option value="other">Other</option>
        //         </select>

        //         <button type="submit">Sign Up</button>
        //     </form>
        // </div>

        <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select className="form-control" id="gender" name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default FormSignUp;