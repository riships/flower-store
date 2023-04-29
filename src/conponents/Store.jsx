import React from 'react'
import '../stylesheets/common.css'
import myImage from '../stylesheets/img/flower.png'
import { Container, Row, Col, Card } from 'react-bootstrap';


function Store() {

    return (
        <>
            <Container >
                <Row>
                    <Col xs={6}>
                        <div className='hero-section-data'>
                            <p>Welcome to</p>
                            <h1>Flower Store</h1>
                            <p>We Provide all Kind of Flower For you and your oved Once, so that you and our loved once always be near to the nature and always bloom like these flowers.</p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className='hero-section-image'>
                            <figure>
                                <img src={myImage} alt='flowers' className='hero-section-img' />
                            </figure>
                        </div>
                    </Col>
                </Row>
            </Container >
            <Card className="bg-dark text-white">
                <Card.Img src={myImage} alt="Card image" className='hero-section-img' />
                <Card.ImgOverlay>
                    <Card.Title>Welcome to</Card.Title>
                    <Card.Title>Flower Store</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>

    )
}

export default Store