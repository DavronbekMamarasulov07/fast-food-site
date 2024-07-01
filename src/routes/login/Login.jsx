import "./Login.css"

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(Login)
    const name = document.querySelector("#name").value
    localStorage.setItem("name", name)


    setTimeout(() => {
      window.location.replace("/")
    }, 3000)
  }

  return (
    <div className='login'>
      <div className="login_content">
        <form className="auth_form">
          <h1>Login</h1>
          <div className="auth_form_group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="auth_form_group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button onClick={handleLogin} className="auth_form_btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
