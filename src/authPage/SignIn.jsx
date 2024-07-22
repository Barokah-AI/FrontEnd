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
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(email, password);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/chat");
      }, 2000); // Menampilkan modal selama 2 detik sebelum berpindah halaman
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

                <div className="mb-6 flex items-center justify-center">
                  <span className="h-[1px] w-full bg-body-color"></span>
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
                  <div className="mb-5">
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
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Login Successful!</h2>
            <p>You will be redirected to the chat page shortly.</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SigninPage;
