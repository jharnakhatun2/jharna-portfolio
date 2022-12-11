import React from 'react';
import { BsGithub, BsLinkedin} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-neutral px-5">
            <div className="footer footer-center py-8 text-base-300 flex justify-center items-center">
                <p>Copyright © 2022 - All right reserved by Jharna Khatun</p>               
                <div className="divider divider-horizontal w-1 bg-white"></div>
                <a href="https://www.linkedin.com/in/jharna-khatun2/"><BsLinkedin className="text-white text-xl"></BsLinkedin></a>            
                <div className="divider divider-horizontal w-1 bg-white"></div>
                <a href="https://github.com/Jharna203"><BsGithub className="text-white text-xl"></BsGithub></a>    
            </div>
    </footer>
    );
};

export default Footer;