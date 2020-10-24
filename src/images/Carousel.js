import React  from 'react';
import Carousel from 'react-bootstrap/Carousel';
/*
*/
const POCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122640.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122545.jpg"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122640.jpg"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default POCarousel;
