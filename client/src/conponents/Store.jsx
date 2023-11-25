import React from 'react'
import FilterSection from './FilterSection'
import { Row, Col } from 'react-bootstrap';
import AllProduct from './AllProduct';
import styled from 'styled-components'




function Store() {
    return (
        <>
            <ContainerCustm>
                <Row>
                    <Col md={2}>
                        <FilterSection />
                    </Col>
                    <Col md={10}>
                        <AllProduct />
                    </Col>
                </Row >
            </ContainerCustm>
        </>
    )
}
const ContainerCustm = styled.div`
    width:95%;
`

export default Store