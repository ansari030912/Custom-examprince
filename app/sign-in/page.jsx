/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Footer } from "../components/footer";
import { Navbar } from "../navbar";
import style from "./style.module.css";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <div className={style.container}> */}
              <div className="flex min-h-screen">
                <div className="flex flex-row w-full">
                  <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                    <div className="flex items-center justify-start space-x-3">
                      <span className="bg-black rounded-full w-8 h-8"></span>
                      <a href="#" className="font-medium text-xl">
                        Brand
                      </a>
                    </div>
                    <div className="space-y-5">
                      <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                        Enter your account and discover new experiences
                      </h1>
                      <p className="text-lg">You do not have an account?</p>
                      <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                        Create account here
                      </button>
                    </div>
                    <p className="font-medium">© 2022 Company</p>
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex lg:hidden justify-between items-center w-full py-4">
                      <div className="flex items-center justify-start space-x-3">
                        <span className="bg-black rounded-full w-6 h-6"></span>
                        <a href="#" className="font-medium text-lg">
                          Brand
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>Not a member? </span>
                        <a
                          href="#"
                          className="underline font-medium text-[#070eff]"
                        >
                          Sign up now
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                      <div className="flex flex-col space-y-2 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                          Sign in to account
                        </h2>
                        <p className="text-md md:text-xl">
                          Sign up or log in to place the order, no password
                          required!
                        </p>
                      </div>
                      <div className="flex flex-col max-w-md space-y-5">
                        <input
                          type="text"
                          placeholder="Username"
                          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                        />
                        <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                          Confirm with email
                        </button>
                        <div className="flex justify-center items-center">
                          <span className="w-full border border-black"></span>
                          <span className="px-4">Or</span>
                          <span className="w-full border border-black"></span>
                        </div>
                        <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                          <span className="absolute left-4">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                fill="#EA4335 "
                                d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2218182,5.67878754 16.3696696,6.88173552 L20.2131818,3.03822329 C18.0261595,1.32926454 15.3031982,0 12,0 C6.47727273,0 1.88909091,4.58818182 1.88909091,10.1109091 C1.88909091,15.6336364 6.47727273,20.2218182 12,20.2218182 C16.1093182,20.2218182 19.7339432,17.6884783 20.8901729,13.9296197 L5.26620003,9.76452941 Z"
                                id="Shape"
                              ></path>
                              <path
                                fill="#4285F4"
                                d="M20.8901729,13.9296197 L16.3696696,17.6751309 C14.796132,16.4820675 13.0020622,15.6818182 12,15.6818182 C10.5629816,15.6818182 9.26202157,16.3493453 8.36689526,17.2861656 L5.31582118,14.4271423 C6.48148777,12.8355899 8.42467532,11.6818182 10.7272727,11.6818182 C11.7322295,11.6818182 12.6646922,11.9634553 13.4723983,12.4665377 L16.3199338,9.72629765 C15.1370238,8.78947729 13.5972406,8.18181818 12,8.18181818 C9.03272727,8.18181818 6.59209091,10.4981818 5.31582118,13.073387 L20.8901729,13.9296197 Z"
                                id="Shape"
                              ></path>
                              <path
                                fill="#FBBC05"
                                d="M12,19.6622727 C14.3848922,19.6622727 16.4581818,18.7013636 17.969937,17.1540435 L14.098,14.3717153 C13.3839082,14.8285092 12.5150364,15.0890909 11.5733333,15.0890909 C10.4894518,15.0890909 9.55698915,14.5990944 8.97166991,13.7572128 L5.31880475,16.6736225 C6.40772516,18.6756383 8.45411014,19.6622727 12,19.6622727 Z"
                                id="Shape"
                              ></path>
                              <path
                                fill="#34A853"
                                d="M8.96969697,13.7272727 C8.59976065,13.1860931 8.37636364,12.5272727 8.37636364,11.8181818 C8.37636364,11.1090909 8.59976065,10.4502705 8.97166991,9.90909091 L5.31880475,6.99268116 C4.4189011,8.50140909 3.80909091,10.2386779 3.80909091,11.8181818 C3.80909091,13.3976857 4.4189011,15.1349545 5.31880475,16.6436824 L8.96969697,13.7272727 Z"
                                id="Shape"
                              ></path>
                            </svg>
                          </span>
                          <span>Sign in with Google</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
