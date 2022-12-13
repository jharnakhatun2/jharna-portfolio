import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = ({imageOne,imageTwo,imageThree}) => {
    return (
        <div>
                <h2 className="mb-5 text-2xl font-bold text-primary">PROJECT PHOTO GALLERY :</h2>
                <Carousel>
                    <div>
                        <img src={imageOne} alt="" />
                        <p className="legend">My Photo 1</p>
                    </div>
                    <div>
                        <img src={imageTwo} alt="" />
                        <p className="legend">My Photo 2</p>
                    </div>
                    <div>
                        <img src={imageThree} alt="" />
                        <p className="legend">My Photo 3</p>
                    </div>
                </Carousel>
            </div>
    );
};

export default Gallery;