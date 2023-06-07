import React from 'react'
import { Row, CardImg, Card, CardText, Col, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";



function ListView({ product }) {
    return (<div>
        {
            product.map((curEle) => {
                const { images, id, name, description } = curEle;
                return <Card className="mb-3" key={id} style={{ maxWidth: '540px' }}>
                    <Row className="g-0">
                        <Col md={4}>
                            <Link to={`/singleproduct/${id}`}>
                                <CardImg src={images[0].url} alt={name} />
                            </Link>
                        </Col>
                        <Col md={8}>
                            <Card>
                                <CardTitle>{name}</CardTitle>
                                <CardText>{description}
                                </CardText>
                                <CardText>
                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            })
        }
    </div>
    )
}

export default ListView