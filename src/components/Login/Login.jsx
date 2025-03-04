
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { singInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    //sign in user
    singInUser(email, password)
      .then(result => {
        console.log(result.user)
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.log('ERROR:', error.message)
      })
  } 

/// sign with google
const handleSignInWithGoogle = () => {
  signInWithGoogle()
  .then(result => {
    console.log(result.user);
    navigate('/')
  })
  .catch(error => {
    console.log("ERROR:", error.message)
  })
}


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="pb-10 px-5">
            <p>If you have no account with this website, please go to   <Link className="btn btn-warning" to="/register" >Register</Link></p>

          </div>
          {/* button for google  */}
          <div className="p-4">
            <button onClick={handleSignInWithGoogle} className="btn btn-ghost" >Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;