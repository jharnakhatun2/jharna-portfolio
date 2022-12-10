import React from 'react';


const Hero = () => {
    return (
        <div className="w-full h-[500px] backgroundImage flex flex-col items-center justify-center">
            <div className="w-1/2 mx-auto text-center">
                <h1 className="text-5xl font-bold">HEY, I'M JHARNA KHATUN</h1>
                <h3 className="text-xl my-5">I am a full-stack web developer.I am seeking a web challenging position in a reputed organization where I can expand my web developing knowledge</h3>
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 w-9/12 mx-auto">
                    <button className="btn btn-primary shadow-lg"><a href="#project">PROJECTS</a></button>
                    <button className="btn btn-secondary shadow-lg"> <a href="https://drive.google.com/file/d/1G4awyCsWOnt3BYBccuP3v-D7m0iTJwYp/view?usp=share_link" target="_blank" rel="noopener noreferrer">DOWNLOAD RESUME</a></button>
                </div>
                
            </div>
        </div>
    );
};

export default Hero;