import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { loginUser } from "./SignInConfig";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(email, password);
      navigate("/chat");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <motion.div
                className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Sign in to your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Please login to start more conversations.
                </p>
                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign in with Google
                </button>

                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C14.75 22 17.29 21.11 19.33 19.84L19.29 19.75L16.51 17.05L16.5 17.03C15.32 18.02 13.74 18.7 12 18.7C8.82 18.7 6.07 15.96 6.07 12C6.07 8.03 8.82 5.3 12 5.3C13.74 5.3 15.32 6.03 16.5 7.02L16.51 7.01L19.29 4.27L19.33 4.18C17.29 2.89 14.75 2 12 2ZM12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24C5.4 24 0 18.6 0 12C0 5.4 5.4 0 12 0ZM11 6H13V11H11V6ZM11 13H13V17H11V13Z" />
                    </svg>
                  </span>
                  Sign in with Github
                </button>

                <div className="mb-6 flex items-center justify-center">
                  <span className="h-[1px] w-full bg-body-color"></span>
                  <p className="px-5 text-base text-body-color">or</p>
                  <span className="h-[1px] w-full bg-body-color"></span>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-stroke dark:bg-form-input dark:border-form-strokedark dark:focus:border-primary dark:text-body-color-dark focus:border-primary w-full rounded-lg border bg-transparent py-3 px-6 text-base font-medium outline-none transition"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-stroke dark:bg-form-input dark:border-form-strokedark dark:focus:border-primary dark:text-body-color-dark focus:border-primary w-full rounded-lg border bg-transparent py-3 px-6 text-base font-medium outline-none transition"
                    />
                  </div>
                  <div className="mb-10">
                    <input
                      type="submit"
                      value={loading ? "Signing In..." : "Sign In"}
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-3 text-base font-medium text-white transition hover:bg-opacity-90"
                      disabled={loading}
                    />
                  </div>
                </form>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign Up
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M1440 0V886H0V0C57.2886 4.9269 121.122 15.6284 192 35.1786C319.931 72.2786 323.024 120.98 436.971 173.214C550.918 225.448 682.593 184.915 754 173.214C825.407 161.513 949.84 130.318 1034 152.835C1118.16 175.352 1176.29 259.388 1285 330.028C1358.89 376.668 1418.24 405.145 1440 413.035Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="720"
                y1="0"
                x2="720"
                y2="886"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.09" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SigninPage;
