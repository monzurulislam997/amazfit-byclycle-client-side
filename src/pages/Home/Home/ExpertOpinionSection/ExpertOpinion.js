import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../../../images/products-img/6.jpg'
import img2 from '../../../../images/products-img/7.jpg'
import img3 from '../../../../images/products-img/3.jpg'
const ExpertOpinion = () => {
    return (
        <div className='p-5'>
            <h1 className=' text-danger'>EXPERT  <span className='text-warning'>OPINION</span></h1>
            <Row xs={1} md={3} className="g-4">

                <Col>
                    <Card>
                        <Card.Title>Top Gear</Card.Title>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <button className='  w-100  border border-none bg-dark text-light'>Expert Comment</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mt-0'>Driver Spark</Card.Title>
                            <Card.Img variant="top" height={320} src={img2} />

                            <button className='  w-100  border border-none bg-dark text-light'>Expert Comment</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Title>Gaurab Hingshi</Card.Title>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <button className='  w-100  border border-none bg-dark text-light'>Expert Comment</button>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default ExpertOpinion;