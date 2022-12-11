import React from "react";

const About = () => {
  return (
    <div className="my-20" id="about">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <div className="divider w-1/3 mx-auto"><img  src="https://i.ibb.co/bJKzvQL/devider-removebg-preview.png" alt="divider"/></div>
        <p className="w-1/2 mx-auto text-lg mb-20 text-slate-600">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-20">
        <div>
          <h1 className="text-2xl font-bold">GET TO KNOW ME :</h1>
          <p className="my-7 text-lg text-justify text-slate-600">
            I'm a Junior Web Developer building different types of core javaScript projects, React js web applications and full stack web applications.
            Check out some of my work in the Projects section.
            <br />
            I also like to work with group works where I can share my knowledge to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.Also I am a quick learner about any upcoming update technology.
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <button className="btn btn-secondary shadow-lg w-full lg:w-1/3"><a href="#contact">CONTACT</a> </button>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-7">MY SKILLS :</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="text-center p-3 border rounded text-accent">HTML</div>
                <div className="text-center p-3 border rounded text-accent">CSS</div>
                <div className="text-center p-3 border rounded text-accent">JavaScript</div>
                <div className="text-center p-3 border rounded text-accent">Bootstrap</div>
                <div className="text-center p-3 border rounded text-accent">Tailwind Css</div>
                <div className="text-center p-3 border rounded text-accent">Daisy UI</div>
                <div className="text-center p-3 border rounded text-accent">ES6</div>
                <div className="text-center p-3 border rounded text-accent">npm</div>
                <div className="text-center p-3 border rounded text-accent">ES6</div>
                <div className="text-center p-3 border rounded text-accent">Rest API</div>
                <div className="text-center p-3 border rounded text-accent">React js</div>
                <div className="text-center p-3 border rounded text-accent">React Hooq</div>
                <div className="text-center p-3 border rounded text-accent">React Query</div>
                <div className="text-center p-3 border rounded text-accent">React Router</div>
                <div className="text-center p-3 border rounded text-accent">React Query</div>
                <div className="text-center p-3 border rounded text-accent">Node js</div>
                <div className="text-center p-3 border rounded text-accent">Express js</div>
                <div className="text-center p-3 border rounded text-accent">Mongodb</div>
                <div className="text-center p-3 border rounded text-accent">Git</div>
                <div className="text-center p-3 border rounded text-accent">GitHub</div>
                <div className="text-center p-3 border rounded text-accent">VS Code</div>
                <div className="text-center p-3 border rounded text-accent">Firebase</div>
                <div className="text-center p-3 border rounded text-accent">Netlify</div>
                <div className="text-center p-3 border rounded text-accent">Vercel</div>
                <div className="text-center p-3 border rounded text-accent">Figma</div>
                <div className="text-center p-3 border rounded text-accent">Photoshop</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;