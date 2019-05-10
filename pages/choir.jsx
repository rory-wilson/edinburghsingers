import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

import Layout from '../components/layout';

import "./style.css"

export default () => <Layout>
    <Container>
        <Row>
            <Col md={8}>
                <h1>The Choir</h1>
                <Table striped size="sm">
                    <thead>
                        <tr>
                            <td>Soprano</td>
                            <td>Alto</td>
                            <td>Bass</td>
                            <td>Tenor</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Anne Backhouse</span></td>
                            <td><span>Shona Banks</span></td>
                            <td><span>Martin Boyle</span></td>
                            <td><span>Seth Armitage</span></td>
                        </tr>

                        <tr>
                            <td><span>Aileen Boyle</span></td>
                            <td><span>Catherine Dunlop</span></td>
                            <td><span>Michael Campkin</span></td>
                            <td><span>David Cameron</span></td>
                        </tr>

                        <tr>
                            <td><span>Holly Carter</span></td>
                            <td><span>Lauren Johnston-Smith</span></td>
                            <td><span>John Dunkel</span></td>
                            <td><span>Jim Gilchrist</span></td>
                        </tr>

                        <tr>
                            <td><span>Rhona Fairgrieve</span></td>
                            <td><span>Elen MacAskill</span></td>
                            <td><span>Ed Jupp *</span></td>
                            <td><span>Bob Gould</span></td>
                        </tr>

                        <tr>
                            <td><span>Sarah Gore</span></td>
                            <td><span>Alex Marks</span></td>
                            <td><span>Wilf Krause</span></td>
                            <td><span>Gareth Hateley</span></td>
                        </tr>

                        <tr>
                            <td><span>Sylvia Hamilton</span></td>
                            <td><span>Sarah McHugh</span></td>
                            <td><span>Tom Macintyre</span></td>
                            <td><span>David Leaver</span></td>
                        </tr>

                        <tr>
                            <td><span>Morag Kyle</span></td>
                            <td><span>Lucy Metcalfe *</span></td>
                            <td><span>Stephen Metcalfe</span> </td>
                            <td><span>Simon Maclaren</span></td>
                        </tr>

                        <tr>
                            <td ><span>Jenny Mackenzie *</span></td>
                            <td><span>Alison Preston</span></td>
                            <td><span>David Pudney</span></td>
                            <td><span>Iain McIntyre *</span></td>
                        </tr>

                        <tr>
                            <td><span>Gillian Mitchell</span></td>
                            <td><span>Isobel Ramsay</span></td>
                            <td><span>Don Roberts</span></td>
                            <td><span>Justin Nash</span></td>
                        </tr>

                        <tr>
                            <td><span>Anna Neubert Wood</span></td>
                            <td><span>Jenny Rice-Jones</span></td>
                            <td><span>Bruce Royan *</span></td>
                            <td><span>Geoff Waters *</span></td>
                        </tr>

                        <tr>
                            <td><span>Betsy Ogilvie</span></td>
                            <td><span>Frances Rive</span></td>
                            <td><span>Pat Snowdon</span></td>
                            <td><span>Robin Watson</span></td>
                        </tr>

                        <tr>
                            <td><span>Ellie Pilkington</span></td>
                            <td><span>Ailis Sandilands</span></td>
                            <td><span>Paul Williams *</span></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td><span>Jo Richards *</span></td>
                            <td><span>Jane Shankland</span></td>
                            <td><span>Mark Woods</span></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td><span>Alison Robson</span></td>
                            <td><span>Harriet Skipworth</span> </td>
                            <td><span>Jonathan Wright</span></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td><span>Julia Sanders</span></td>
                            <td><span>Nicola Stock</span></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><span>Maddy Seale</span></td>
                            <td><span>Natasha Tomkinson *</span></td>
                            <td></td> <td></td>
                        </tr>

                        <tr>
                            <td ><span>Anna Skinner *</span></td>
                            <td></td> <td></td> <td></td>
                        </tr>

                        <tr>
                            <td ><span>Jean Waddie</span></td>
                            <td></td> <td></td> <td></td>
                        </tr>

                        <tr>
                            <td ><span>Zoe Westwood *</span></td>
                            <td ><span>&nbsp;</span> </td>
                            <td></td> <td></td>
                        </tr>

                        <tr>
                            <td ><span>Louise Wright</span></td>
                            <td></td> <td></td> <td></td>
                        </tr>
                    </tbody>
                </Table>
                <p>* Committee members</p>
            </Col>
            <Col md={4}>
                <Image src='/static/img/choir.jpg' fluid />
            </Col>
        </Row>
    </Container>
</Layout>;
