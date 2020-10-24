import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import PONavbar from './Nav/Navigation';
import SimpleMap from './map/POMap';
import {Row,Col,Image} from 'react-bootstrap';
import Carousel from "./images/Carousel";

import './App.css';

const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(true);

    return (
        <>
            {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto">React-Bootstrap</strong>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </>
    );
};

const POImage = () => (
    <Container>
        <Row>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122640.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122545.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122640.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122640.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122753.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122753.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122958.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123046.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123144.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123306.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123352.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123445.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123536.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123553.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123631.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123713.jpg" fluid />
            </Col>
            <Col xs={6} md={4}>
                <Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123752.jpg" fluid />
            </Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123821.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123859.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_123924.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_124014.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_124044.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_124127.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_124215.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_124304.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_124438.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_124507.jpg" fluid /></Col>



        </Row>
    </Container>
);

const App = () => (
    <Container className="p-3">
        <PONavbar/>
        <Jumbotron>
            <h1 className="header">Welcome To Pristine Ocean</h1>
            <ExampleToast>
                We now have Toasts
                <span role="img" aria-label="tada">
          🎉
        </span>
            </ExampleToast>
        </Jumbotron>
        <Carousel/>
{/*
        <LightboxPage/>
*/}
        <POImage/>
        <SimpleMap/>
    </Container>
);

export default App;
