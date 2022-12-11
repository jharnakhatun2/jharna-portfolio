import React from 'react';
import Gallery from '../../Componects/Gallery';


const Project = () => {
    return (
        <div className="py-20 project">
            <div className="w-full lg:w-1/2 mx-auto px-10 lg:px-0">
                <Gallery/>
            </div>
            <div className=" w-full lg:w-1/2 mx-auto px-10 lg:px-0">
            <div>
                <h1 className="mb-5 text-2xl font-bold text-primary">PROJECT DETAILS :</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate doloremque dolorem error expedita soluta porro laborum quisquam est perspiciatis velit saepe odit, adipisci at? Eius unde beatae nesciunt vitae impedit perferendis, dignissimos excepturi officiis quas distinctio quae cumque commodi aut animi, nihil iusto provident non molestias accusantium itaque minus. Ad iusto libero magni veniam maiores natus, repellendus praesentium laboriosam cupiditate accusantium necessitatibus laborum rerum reiciendis distinctio, consectetur atque quo quis quas excepturi dicta. Et alias cum saepe ipsam illo nobis explicabo commodi qui ratione facilis quia, exercitationem, harum obcaecati necessitatibus debitis assumenda nemo repudiandae distinctio hic? Accusamus ut eaque facilis.</p>
            </div>
            <div className="mt-10">
                <h1 className="mb-5 text-2xl font-bold text-primary">PROJECT FEATURES :</h1>
                <ul className="list-disc list-inside">
                    <li>necessitatibus debitis assumenda nemo repudiandae distincti</li>
                    <li>necessitatibus debitis assumenda nemo repudiandae distincti</li>
                    <li>necessitatibus debitis assumenda nemo repudiandae distincti</li>
                    <li>necessitatibus debitis assumenda nemo repudiandae distincti</li>
                    <li>necessitatibus debitis assumenda nemo repudiandae distincti</li>
                    <li>necessitatibus debitis assumenda nemo repudiandae distincti</li>
                    <li>necessitatibus debitis assumenda nemo repudiandae distincti</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-7 w-full text-center mt-5">
                <div className="bg-secondary text-primary px-5 py-2 shadow-xl rounded"><a href="https://sounds-mart.web.app/" target="_blank" rel="noopener noreferrer">LIVE SITE</a></div>
                <div className="bg-primary text-secondary px-5 py-2 shadow-xl rounded"><a href="https://sounds-mart.web.app/" target="_blank" rel="noopener noreferrer">GITHUB CLIENT REPO</a></div>
                <div className="bg-neutral text-secondary px-5 py-2 shadow-xl rounded"><a href="https://sounds-mart.web.app/" target="_blank" rel="noopener noreferrer">GITHUB SERVER REPO</a></div>
              </div>
            </div>
        </div>
    );
};

export default Project;