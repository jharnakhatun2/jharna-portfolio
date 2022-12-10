import React from "react";

const About = () => {
  return (
    <div className="my-20" id="about">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <div className="divider w-1/3 mx-auto">JK</div>
        <p className="w-1/2 mx-auto text-lg mb-20">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-20">
        <div>
          <h1 className="text-2xl font-bold">Get to Know me!</h1>
          <p className="my-7">
            I'm a Junior Web Developer building different types of core javaScript projects, React js web applications and full stack web applications.
            Check out some of my work in the Projects section.
            <br />
            I also like to work with group works where I can share my knowledge to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.Also I am a quick learner about any upcoming update technology.
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <button className="btn btn-secondary shadow-lg"><a href="#contact">CONTACT</a> </button>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-7">My Skills</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">HTML</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">CSS</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">JavaScript</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Bootstrap</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Tailwind Css</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Daisy UI</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">ES6</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">npm</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Rest API</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">React js</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">React Hooq</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">React Query</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">React Router</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Node js</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Express js</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Mongodb</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Git</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">GitHub</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">VS Code</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Firebase</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Netlify</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Vercel</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Figma</h1>
                <h1 className="bg-base-200 w-fit p-3 border-none rounded text-primary font-bold">Photoshop</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;