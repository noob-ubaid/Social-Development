import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { register, google, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    register(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Successfully logged in");
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .then((error) => {
            setUser(user);
            toast(error);
          });
      })
      .then(() => {});
  };
  const handleGoogle = () => {
    google()
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className=" mt-20">
      <div className="flex items-center justify-center ">
        <div className="card-body max-w-md border dark:bg-white border-[#0F0F0F26] rounded-md">
          <h2 className="text-2xl font-semibold mt-4 mb-2 border-b border-b-[#0F0F0F26] pb-4 text-center">
            Register Your Account
          </h2>
          <form onSubmit={handleSubmit} className="">
            {/* Name  */}
            <label className="label text-[14px] font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter your name"
            />
            {/* photo */}
            <label className="label text-[14px] mt-2 font-medium mb-1">
              Photo Url
            </label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Photo Url"
            />
            {/* email  */}
            <label className="label text-[14px] mt-2 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            {/* password  */}
            <label className="label text-[14px] mt-2 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              <button type="button" className="cursor-pointer"></button>
            </div>
            <button type="submit" className="btn btn-neutral w-full mt-4">
              Register
            </button>
            <p className="text-center text-[14px] mt-2 font-medium">
              Already have an account .{" "}
              <Link to={"/login"} className="text-red-400 underline">
                Login
              </Link>
            </p>
            <div className="flex gap-4 items-center">
              <div className="border-b w-[45%] border-b-[#0F0F0F26]"></div>
              <p className="w-[5%] font-medium text-base">Or</p>
              <div className="border-b w-[45%] border-b-[#0F0F0F26]"></div>
            </div>
            <div>
              <button
                onClick={handleGoogle}
                className="btn bg-white w-full mt-2 text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
