import React, { useState } from "react"

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login button clicked!")
  }

  return (
    <div className="login-page container mt-5 text-center">

      <div className="login-box">

        <h1 className="mb-5">Login</h1>

        <form onSubmit={handleSubmit}>

          <label className="m-2">Email:</label>
          <input type="email" placeholder="Enter email" required/>

          <label className="m-2">Password:</label>
          <input type={showPassword ? "text" : "password"} placeholder="Enter password" required/>

          <div className="show-password mt-2">
            <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
             <span>Show Password</span>
          </div>

          <button type="submit" className="btn btn-secondary my-4">SIGN IN</button>

        </form>

        <div className="login-links">
          <p> Forgot Username / Password?</p>
          <p> Don't have an account?<a href="#"> Sign up</a></p>
        </div>

      </div>

    </div>
  )
}

export default LoginPage