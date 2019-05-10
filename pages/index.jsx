import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Layout from '../components/layout';

import "./style.css"

export default () => <Layout>
    <section id='top'>
        <Jumbotron fluid>
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </section>
    <section id='concerts' className='padded'>
        <Container>
            <Row>
                <Col md={8}>
                    <div className='videoWrapper'>
                        <iframe width="560" height="349" src="https://www.youtube.com/embed/dKnwxPIOjVg" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Col>
                <Col md={4}>
                    <h2>Upcoming concerts</h2>
                    <Card>
                        <Card.Img variant="top" src="/static/img/concert.jpg" />
                        <Card.Body>
                            <Card.Title>Puccini: Messa di Gloria</Card.Title>
                            <Card.Subtitle>Saturday 15th June 2019, 7.30pm Greyfriars Kirk</Card.Subtitle>
                            <Card.Text>

                                Bruckner - Te Deum<br />
                                Brahms - Alto Rhapsody<br />
                                Puccini - Messa di Gloria<br />
                                Mascagni - Easter Hymn

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
    <section id="who">
        <Row>
            <Col md={4}>
                <Link prefetch href="/md">
                    <a className='musical-director'>
                        <div className='overlay'></div>
                        <div className='overlay_content'>
                            <h2>Alistair Digges</h2>
                            <h3>Musical Director</h3>
                        </div>
                    </a>
                </Link>
            </Col>
            <Col md={8}>
                <Link prefetch href="/choir">
                    <a className='choir'>
                        <div className='overlay'></div>
                        <div className='overlay_content'>
                            <h2>The Edinburgh Singers</h2>
                            <h3>The Choir</h3>
                        </div>
                    </a>
                </Link>
            </Col>
        </Row>
    </section>
    <section id='about'>
        <Container>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <p>
                                    The Edinburgh Singers is one of the City's finest non-professional
                                    auditioned mixed-voice choirs. It is renowned for vibrant, moving
                                    and expressive performances of music from the Early Baroque to the
                                    present day. Founded more than 60 years ago, the choir remains an
                                    enthusiastic sociable group of all ages and from every walk of life.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <p>
                                    In recent years, the choir has considerably extended its repertoire both
                                    chronologically and stylistically.We have performed Renaissance and medieval
                                    pieces along with major works by 19th to 21st century composers such as Parry,
                                    Stamford, Finzi, Kodály, Widor, Walton, Poulenc, Rutter, Tavener and MacMillan,
                                    in addition to more familiar choral works by Bach, Handel, Haydn, Mozart,
                                    Mendelssohn, Faure and Elgar. It is a measure of the quality of the choir
                                    that it not only rises to these challenges, but also provides soloists from
                                    within its ranks for all but the largest oratorios.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <p>
                                    Typically the choir performs four formal concerts each year, in major venues in
                                    the centre of Edinburgh, and often in the atmospheric surroundings of
                                    Greyfriars Kirk. In recent years the choir has toured to Munich,
                                    Tuscany, Rome, Paris and Berlin, and performed in Brussels and Ghent in April 2019.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </section>
    <section id='review' className='padded'>
        <Container>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <blockquote>Edinburgh is blessed with a number of very good amateur choirs, and the The Edinburgh Singers are amongst the best of them. </blockquote>
                    <p><a href='http://theweereview.com/review/edinburgh-singers-the-dream-of-gerontius/' target='_blank'>Elgar - The Dream of Gerontius</a> 16 June 2018 in Greyfriars Kirk by Hugh Kerr</p>
                </Col>
            </Row>
        </Container>
    </section>
    <section id='sing' className='padded'>
        <div className='overlay'></div>
        <Container>
            <Row>
                <Col md={8}>
                    <h2>Sing with us</h2>
                    <p>
                        Newcomers are always welcome to audition for The Edinburgh Singers, a long-established,
                        independent choir attracting singers of all ages and from every walk of life.
                        We are always on the look out for enthusiastic and talented singers, and are
                        particularly seeking to recruit Tenors at this time.
                    </p>
                    <p>
                        We aim to audition new singers at regular points throughout the year. Please contact us
                        and tell us your voice part (Soprano, Alto, Tenor or Bass) and a little bit about your
                        singing history, and we'll get in touch to arrange an audition.
                    </p>
                </Col>
            </Row>
        </Container>

    </section>
    <section id="social">
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <a className="twitter" href="https://twitter.com/TheEdSingers">Twitter</a>
                    <a className="facebook" href="https://www.facebook.com/edinburghsingers/">Facebook</a>
                    <a className="youtube" href="http://www.youtube.com/edinburghsingers">You Tube</a>
                </Col>
            </Row>
        </Container>
    </section>
    <section id='feedback' className='padded'>
        <Container>
            <Row>
                <Col md={8}>
                    <h2>Tell us what you think</h2>
                    <p>
                        We would love to know what you think of our website. If you have any comments
                        (bouquets or brickbats) or suggestions on it, please{' '}
                        <a href='mailto:edsingerssec@gmail.com'>give us your Feedback</a>
                    </p>
                    <p>
                        Or if you have a query about the Edinburgh Singers, would like to sing with us,
                        or have a project you'd like us to get involved in, do please{' '}
                        <a href='mailto:edsingerssec@gmail.com'>get in touch</a>
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
</Layout>;
