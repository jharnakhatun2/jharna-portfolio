import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../../Componects/Gallery';


const Project = () => {
    const {id} = useParams();
    const [portfolio, setPortfolio] = useState({});

    useEffect(()=>{
        fetch('/portfolio.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const currentProject = data.find((item)=>item.id === parseInt(id));
            setPortfolio(currentProject);  
        })
    },[id]);  

    const {features}=portfolio;
    return (
        <div className="py-10 project">
            <div className="w-full lg:w-1/2 mx-auto px-10 lg:px-0">
                <Gallery imageOne={portfolio.img_one} imageTwo={portfolio.img_two} imageThree={portfolio.img_three}/>
            </div>
            <div className=" w-full lg:w-1/2 mx-auto px-10 lg:px-0">
            <div>
                <h1 className="mb-5 text-2xl font-bold text-primary">PROJECT DETAILS :</h1>
                <p className="text-justify">{portfolio.des}</p>
            </div>
            <div className="mt-10">
                <h1 className="mb-5 text-2xl font-bold text-primary">PROJECT FEATURES :</h1>
                <div>
                {
                    features?.map((feature, i) =>{
                    return <li key={i}>{feature}</li>
                })
                }
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-7 w-full text-center my-10">
                <div className="bg-secondary text-primary px-5 py-2 shadow-xl rounded"><a href={portfolio.live} target="_blank" rel="noopener noreferrer">LIVE SITE</a></div>
                <div className="bg-primary text-secondary px-5 py-2 shadow-xl rounded"><a href={portfolio.git_client} target="_blank" rel="noopener noreferrer">GITHUB CLIENT REPO</a></div>
                {
                    portfolio.git_server &&   <div className="bg-neutral text-secondary px-5 py-2 shadow-xl rounded"><a href={portfolio.git_server} target="_blank" rel="noopener noreferrer">GITHUB SERVER REPO</a></div>
                }
                
              </div>
            </div>
        </div>
    );
};

export default Project;