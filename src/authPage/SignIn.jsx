import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SigninPage = () => {
  return (
    <>
      <Header /> {/* Include Header component */}
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
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
                      width="22"
                      height="22"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.8998 44.5 45.3998 37.6 46.1998C38.7 47.0998 39.7 48.8998 39.7 51.5998C39.7 55.3998 39.6 58.2998 39.6 60.7998C39.6 61.4998 40.1 62.4998 41.8 62.1998C54.1 57.9998 63 46.3998 63 32.7998C63 15.5998 49 1.7998 32 1.7998Z" />
                    </svg>
                  </span>
                  Sign in with GitHub
                </button>

                <div className="mb-8 flex items-center justify-center">
                  <span className="h-[1px] w-full max-w-[150px] bg-body-color"></span>
                  <p className="px-5 text-center text-base font-medium text-body-color">
                    OR
                  </p>
                  <span className="h-[1px] w-full max-w-[150px] bg-body-color"></span>
                </div>

                <form>
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
                      placeholder="example@gmail.com"
                      className="border-[f0f0f0] w-full rounded-md border bg-[#FCFDFE] py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:text-body-color-dark dark:placeholder-body-color-dark dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-8">
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
                      className="border-[f0f0f0] w-full rounded-md border bg-[#FCFDFE] py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#2C303B] dark:text-body-color-dark dark:placeholder-body-color-dark dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="checkboxLabelOne"
                        className="mr-3 h-5 w-5 accent-primary"
                      />
                      <label
                        htmlFor="checkboxLabelOne"
                        className="text-sm font-medium text-body-color"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                    >
                      Sign In
                    </button>
                  </div>
                </form>

                <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#060821" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.868C1186.26 231.898 1257.17 116.619 1243.09 2.2485L948.583 113.057C960.504 171.907 1025.88 232.58 1086.96 297.868Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1157.93 344.603C1304.83 344.603 1424.7 276.116 1424.7 194.332C1424.7 112.548 1304.83 44.0618 1157.93 44.0618C1011.03 44.0618 891.113 112.548 891.113 194.332C891.113 276.116 1011.03 344.603 1157.93 344.603Z"
                stroke="url(#paint1_linear_95:1005)"
                strokeWidth="0.5"
              />
              <path
                opacity="0.1"
                d="M429.507 483.21C529.618 552.684 654.349 518.282 676.031 434.442L382.021 388.661C373.92 448.731 363.988 441.601 429.507 483.21Z"
                fill="url(#paint2_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M361.477 542.694C416.997 597.974 530.161 625.626 624.691 571.228C719.221 516.829 748.413 402.848 692.894 347.569C637.374 292.289 524.21 264.638 429.68 319.036C335.15 373.435 305.958 487.416 361.477 542.694Z"
                stroke="url(#paint3_linear_95:1005)"
                strokeWidth="0.5"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="913.479"
                y1="-33.0217"
                x2="1242.28"
                y2="297.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="1394.7"
                y1="194.332"
                x2="881.197"
                y2="194.332"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_95:1005"
                x1="700.014"
                y1="400.886"
                x2="352.583"
                y2="504.967"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_95:1005"
                x1="715.53"
                y1="337.057"
                x2="291.322"
                y2="563.651"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      <Footer /> {/* Include Footer component */}
    </>
  );
};

export default SigninPage;
