import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Amiakhum from './../../../images/Amiakhum.png';
import Debotakhum from './../../../images/debotakhum-bandarban-1.jpg';

// Home page why choose us component  
const About = () => {
    return (
        <Container>
            <Row className="align-items-center my-5">

                
                <Col md={6}>
                    <div className="">
                        <h1>Amiakhum <span className='text-primary'>Waterfall</span> </h1> <br />
                        <p>
                        Amiakhum Waterfall is one of the most beautiful waterfalls in Bangladesh and an excellent place to travel. Every traveler should have a tour plan to visit this beautiful tourism spot of Bandarban at least once and then they will feel to visit that travel spot again and again. Amiyakhum is situated at a remote area called Tindu of Thanchi upazilla under Bandarban Hill District in Bangladesh. It’s near to Bangladesh Myanmar Border. This waterfall is situated in one of the most remote areas in Bandarban.
                        </p>

                        <Link className="btn btn-success" to='/service/617ce8afbbb023fea4580116'>Read More</Link>
                        
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Amiakhum} alt="Amiakhum" className='img-fluid img-thumbnail' />
                </Col>
            </Row>
            <Row className="align-items-center my-5">

                <Col md={6}>
                    <img src={Debotakhum} alt="Debotakhum" className='img-fluid img-thumbnail' />
                </Col>
                
                <Col md={6}>
                    <div className="">
                        <h1>Debotakhum <span className='text-warning'>Waterfall</span> </h1> <br />
                        <p>
                        Debotakhum is located in Roangchhari upazila of Bandarban district. Natural Bandarban is said to be the paradise of Khum and the crown of excellence of this kingdom will undoubtedly go to Devatakhum. According to the locals, this khum is about 50-60 feet deep and 600 feet long which is much bigger than Velakhum and much more wild. If you want to go to Devtakhum, first you have to go from Roangchhari to Kachhapatli Army Camp and trek to Shilbandha Para (Liragaon) with permission. Of course, you have to make a strong bamboo valve from the sealed area.
                        </p>

                        <Link className="btn btn-success" to='service/617ce832bbb023fea4580115'>Read More</Link>
                        
                    </div>
                </Col>
               
            </Row>
        </Container>
    );
};

export default About;