import React from 'react'
import FilterSection from './FilterSection'
import { Container, Row, Col } from 'react-bootstrap';
import AllProduct from './AllProduct';
function Store() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>
                        <FilterSection />
                    </Col>
                    <Col md={9}>
                        <AllProduct />
                    </Col>
                </Row >
            </Container>
        </>
    )
}

export default Store