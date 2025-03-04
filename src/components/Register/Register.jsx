
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  //using User context
  const { createUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    //create user
    createUser(email, password)
    .then( result => {
      console.log(result.user)
      //if user is created, then navigate to homepage
      e.target.reset();
      navigate('/');

      
    })
    .catch((error) => {
      console.log( 'ERROR:', error.code)
      console.log('ERROR:', error.message)
      
    });
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>
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
           
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="pb-10 px-5">
            <p>If you have already an account with this website, please go to   <Link className="btn btn-warning" to="/login" >Log in</Link></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;