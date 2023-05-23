import React from 'react'
import { CRow, CRow, CCardImage, CCardBody, CCardText } from 'react-bootstrap';


function ListView() {
    return (
        <CCard className="mb-3" style={{ maxWidth: '540px' }}>
            <CRow className="g-0">
                <CCol md={4}>
                    <CCardImage src="/images/react400.jpg" />
                </CCol>
                <CCol md={8}>
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText>
                            This is a wider card with supporting text below as a natural lead-in to additional
                            content. This content is a little bit longer.
                        </CCardText>
                        <CCardText>
                            <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                        </CCardText>
                    </CCardBody>
                </CCol>
            </CRow>
        </CCard>
    )
}

export default ListView