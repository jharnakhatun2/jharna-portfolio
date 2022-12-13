import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import lottieMail from "../../data-contact-green.json";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_noybaa5', 'template_y6ttext', form.current, 'qFjflBrNN9XeBXDra')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Email Send!");
  };
    return (
        <div className="pt-20 bg-base-200" id="contact">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">CONTACT</h1>
        <div className="divider w-1/3 mx-auto"><img  src="https://i.ibb.co/bJKzvQL/devider-removebg-preview.png" alt="divider"/></div>
        <p className="w-full lg:w-1/2 px-8 mx-auto text-lg text-accent">
        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-8 lg:pt-0">
        <div className="flex items-center justify-around">
        <div className="w-96 p-7 shadow bg-secondary border-none rounded ">
          <h1 className="text-3xl text-center">CONTACT ME</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" name="user_name" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="user_email" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea name="user_message" className="textarea textarea-bordered" ></textarea>
            </div>
            <div className="form-control w-full mt-7">
              <input type="submit" className="btn btn-neutral w-full"  value="SUBMIT"/>
            </div>          
          </form>
        </div>
      </div>
        <div>
        <Lottie className="" animationData={lottieMail} />
        </div>
      </div>
      </div>
    );
};

export default Contact;