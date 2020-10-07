import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import AboutUsWallpaper from "../images/about_us_wallpaper.jpg";

function AboutUs() {
    return (
        <section>
            <div className="wrapper about_us_section">
            
                <Container>
                    <Row>
                        <Col sm={8}>
                            <div className="wallpaper"><img src={AboutUsWallpaper}/></div>
                        </Col>
                        <Col sm={4}>
                            One of two columns
                        </Col>
                    </Row>
                </Container>

            </div>
        </section>
    )
}

export default AboutUs
