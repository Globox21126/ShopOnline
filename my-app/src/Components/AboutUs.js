import React from 'react'
import { Container, Row, Col } from 'react-grid-system';


function AboutUs() {



    return (
        <section className="about_us_section">
            <div className="wrapper">
                <Container  className="about_flex">
                    <Row className="about_us_top">
                        <Col sm={2}>
                            <h1>O nas</h1>
                        </Col>
                        <Col sm={10}>
                            <div>Nasza historia rozpoczęła się w 2002 roku z chwilą otwarcia pierwszego salonu stacjonarnego. Od tej pory nieustannie się rozwijamy, dzięki czemu staliśmy się ekspertami w branży komputerowej. Łączymy empatię i technologię, co pozwala nam lepiej rozumieć potrzeby Klientów. Jesteśmy otwarci na sugestie i oferujemy rozwiązania, zapewniające 100% satysfakcji.</div>
                        </Col>
                    </Row>
                    <Row className="about_us_numbers">
                        <Col sm={2}>
                            <span>
                                <h2>27</h2>
                                <p>salonów w Polsce</p>
                            </span>
                        </Col>
                        <Col sm={2}>
                            <span>
                                <h2>26</h2>
                                <p>działów w firmie</p>
                            </span>
                        </Col>  
                        <Col sm={2}>
                            <span>
                                <h2>1100+</h2>
                                <p>zatrudnionych pracowników</p>
                            </span>
                        </Col>
                        <Col sm={2}>
                            <span>
                                <h2>22000+</h2>
                                <p>oferowanych produktów</p>
                            </span>
                        </Col>
                        <Col sm={2}>
                            <span>
                                <h2>544</h2>
                                <p>partnerów biznesowych</p>
                            </span>
                        </Col>
                        <Col sm={2}>
                            <span>
                                <h2>895000+</h2>
                                <p>Klientów w 2019</p>
                            </span>
                        </Col>            
                    </Row>
                    <Row className="company_data">
                        <Col className="company_adress" sm={6}>
                            <h1>Dane firmy</h1>
                            <div>ShopOnline sp. z o.o.
                                ul. Uliczna 21
                                01-453 Kraśnik
                                NIP: 00000000, REGON: 111111111
                                KRS 00004523462: Sąd Rejonowy w Rivendell
                                XVII Wydział Gospodarczy Drużyny Pierścienia</div>
                            <div>Prosimy o dokonywanie przelewów za zamówienie,
                                dopiero po potwierdzeniu przez nas dostępności towaru.</div>
                        </Col>
                        <Col className="building" sm={6}>
                            <div></div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </section>
    )
}

export default AboutUs
