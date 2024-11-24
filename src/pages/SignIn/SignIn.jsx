import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
const SignIn = () => {
    const handleSignIn=(event)=>{
        event.preventDefault();
    }
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-8">
          <img src={login} alt="" />
        </div>
        <div className="card w-full max-w-sm shrink-0 border-2">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign In!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn text-white bg-[#FF3811] hover:bg-[#FF3476]">
                Sign In
              </button>
            </div>
            <p className="p-2 text-center">New here cars doctor please <Link to='/signup' className="text-[#FF3811] font-bold underline">signup</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
