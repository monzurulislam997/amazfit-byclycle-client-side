import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from "../../../../images/background-02-1920x800.jpg"
import slider2 from "../../../../images/background-03-1920x800.jpg"
import slider3 from "../../../../images/background-04-1920x800.jpg"
const Banner = () => {
    return (
        <div >
            <Carousel fade>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Reserve Your Bike Online and Save</h3>
                        <p>All of our listed US tours offer remarkable opportunities .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 >Traveling by bicycle is an excellent way</h3>
                        <p>Bicycle tours help give kids a feel for a country, its terrain and its people more like.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Remember, it’s more about the journey than the destination.</h3>
                        <p>
                            At a cyclist’s pace, you’ll experience places four-wheeled travelers will never know existed.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;