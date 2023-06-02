import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import styled from 'styled-components'
// import MainPhoto from '../stylesheets/img/flower2.png'

function About() {
    const storeData = {
        name: 'Lovely Flowers',
        email: 'lovely@flowers.com',
        phone: '0123456789',
        city: 'Noida',
        address: 'Lovely Flowers, Noida, Uttar Pradesh, 201301'
    }
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}><h1 style={{ textAlign: 'center' }}>About Us</h1></Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div>
                        {/* <StyledImage src={MainPhoto} alt="Your-Image" /> */}
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <h1>Welcome to {storeData.name}</h1>
                    <p>
                        At {storeData.name}, we are passionate about bringing the beauty and joy of flowers into your life.
                        We believe that flowers have a unique power to uplift spirits, brighten spaces, and create memorable moments.
                    </p>
                    <h2>Our Story</h2>
                    <p>
                        {storeData.name} was founded with a simple vision - to provide our community with the freshest,
                        most vibrant flowers, carefully curated arrangements, and exceptional customer service.
                        We have been serving the {storeData.city} area for 5 years and have built a reputation for our commitment to quality and creativity.
                    </p>
                    <h2>Our Team</h2>
                    <p>
                        Behind every stunning bouquet and arrangement is a team of talented and dedicated floral designers.
                        Our skilled florists are experienced in crafting unique creations that capture the essence of each flower's beauty.
                        They are passionate about their craft and take great pride in creating arrangements that exceed your expectations.
                    </p>
                    <h2>Our Products</h2>
                    <p>
                        At {storeData.name}, we offer a wide variety of flowers, from classic roses and lilies to exotic orchids and seasonal blooms.
                        Whether you need a bouquet for a special occasion, a centerpiece for a wedding or event, or a thoughtful gift for a loved one,
                        we have the perfect arrangement for you.
                        We source our flowers from trusted local growers and suppliers to ensure freshness and quality.
                    </p>
                    <h2>Customer Experience</h2>
                    <p>
                        We strive to provide a seamless and delightful customer experience.
                        Our knowledgeable and friendly staff is here to assist you in choosing the perfect arrangement,
                        answering any questions you may have, or offering advice on flower care and maintenance.
                        We value your satisfaction and aim to exceed your expectations with every order.
                    </p>
                    <h2>Community Involvement</h2>
                    <p>
                        At {storeData.name}, we believe in giving back to our community.
                        We actively participate in local events, support charitable causes, and collaborate with other businesses to promote the love of flowers and enrich our community.
                    </p>
                    <h2>Contact Us</h2>
                    <p>
                        We would be thrilled to assist you with your floral needs.
                        Visit our store at {storeData.address}, browse our online catalog, or give us a call at {storeData.phone}.
                        We look forward to creating stunning floral arrangements that bring joy and beauty into your life.
                    </p>
                </Col>

            </Row>
        </Container >
    );
}
// const StyledImage = styled.img`
// box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// `

export default About;
