import React from "react";
import Lottie from "lottie-react";
import contact2 from "../../assets/lottiAnimation/70702-contact-us.json";
import { BsGithub, BsLinkedin, BsMedium, BsTwitter } from "react-icons/bs";
import useTitle from "../../Hook/useTitle";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ProjectButtonTwo from "../../Componects/ProjectButtonTwo";
import MainButton from "../../Componects/MainButton";
export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7rdxw3j",
        "template_vqmwm0f",
        form.current,
        "b8tC_2lQjrtBlXXU_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useTitle("Contact");

  return (
    <div className="bg-[url('https://i.ibb.co/6v09WSC/v1016-a-02.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto px-0 md:px-10 lg:px-20 py-24">
        <div className="lg:flex  lg:-mx-10">
          <div className="lg:w-8/12 lg:mx-10">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              Let’s talk
            </h1>
            <div className="divider w-1/12 my-2"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Ask me everything and I would love to hear from you
            </p>
            <form ref={form} onSubmit={sendEmail} className=" mt-10 mb-20">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="your name"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="demo@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="w-full my-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                  defaultValue={""}
                  name="message"
                />
              </div>

              <MainButton>
                <input
                  type="submit"
                  value="Submit now"
                  className="cursor-pointer capitalize"
                />
              </MainButton>
            </form>
          </div>
          <div className="mt-8 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-4/12 lg:mx-10 justify-center gap-20">
            <div className="">
              <Lottie
                className="w-full"
                animationData={contact2}
                loop={true}
              ></Lottie>
            </div>
            <div className="w-full mx-auto">
              <div className="space-y-2 md:-mt-8 lg:-mt-10">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#f33bea]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className=" text-gray-700 truncate w-72 dark:text-gray-400">
                    Savar, Dhaka, Bangladesh
                  </span>
                </p>
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6  text-[#f33bea]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    jharnakhatun203@gmail.com
                  </span>
                </p>
              </div>
              <div className="mt-6 w-80 md:mt-8 ">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow Me</h3>
                <div className="flex mt-2  items-center gap-2">
                  <a href="https://www.linkedin.com/in/jharna-khatun2/">
                    <BsLinkedin className="hover:text-[#f33bea] text-gray-500 text-xl"></BsLinkedin>
                  </a>
                  <div className="">|</div>
                  <a href="https://github.com/Jharna203">
                    <BsGithub className="hover:text-[#f33bea] text-gray-500 text-xl"></BsGithub>
                  </a>
                  <div className="">|</div>
                  <a href="https://jharnakhatun.medium.com/">
                    <BsMedium className="hover:text-[#f33bea] text-gray-500 text-xl"></BsMedium>
                  </a>
                  <div className="">|</div>
                  <a href="https://twitter.com/Jharna203">
                    <BsTwitter className="hover:text-[#f33bea] text-gray-500 text-xl"></BsTwitter>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
