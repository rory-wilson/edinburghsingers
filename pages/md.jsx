import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Layout from '../components/layout';

import "./style.css"

export default () => <Layout>
    <Container>
        <Row>
            <Col md={8}>
                <h1>Musical Director</h1>
                <p>
                    Alistair Digges was born in Glasgow and began his musical studies as a horn player and pianist. He studied at the Royal Conservatoire of Scotland before being awarded Mason and Ackroyd scholarships to the Royal College of Music International Opera School, where he went on to win their prestigious Knights of the Round Table Prize.
                </p>
                <p>
                    He is co-founder and Musical Director of Scotland's professional touring company Opera Bohemia, conducting productions of Eugene Onegin, La Traviata, Gianni Schicchi and The Pearl Fishers. Other conducting engagements have included Gounod's La Colombe for West Green House Opera, a co-production with Opera Danube, and the closing concerts of the 2015 and 2016 Rainhill Music Festivals. In addition to The Edinburgh Singers, he is also Musical Director of Edinburgh's Songbirds and of Fife Opera, with whom he's conducted Carmen, Faust, Eugene Onegin and The Magic Flute. He was appointed Musical Director of Edinburgh Grand Opera in 2017, conducting their recent production of The Pearl Fishers. Forthcoming engagements in 2018 include assistant conductor to David Parry for a production of Tosca at the Netherlands Reisopera, as well as conducting Falstaff for Opera Bohemia and Cendrillon for Fife Opera. He is on the musical staff of the National Youth Choirs of Great Britain and the Ulster Youth Choirs and is in demand as an adjudicator, guest conductor and workshop leader across the UK. Previous musical director positions held include the London Fairlawn Singers and Kilmarnock and District Choral Union.
                </p>
                <p>
                    Before pursuing his conducting career, Alistair performed extensively as an operatic tenor and concert soloist throughout Europe and beyond. Engagements included a series of recitals across India with renowned soprano Patricia Rozario, the title role in the premier of Sir Nigel of Tilford under the baton of Laurence Cummings, Rodolfo for Vignette Production's acclaimed tour of La Bohème in England and France, Nemorino in L'elisir d'amore for Opera South, Don Gomez in Die Drei Pintos at London's Bloomsbury theatre, Dumain in Verlorene Liebesmüh for Opera da Camera Linz in Austria, Alfredo in La Traviata for Go Opera at the London Olympic site, Tamino in The Magic Flute for Dartington Opera, various roles at London's Britten Theatre, Pinkerton in Madama Butterfly, Edgardo in Lucia di Lammermoor, and performances in Russia, Germany and at the Buxton and Aldeburgh festivals of Britten's Parables for Mahogany Opera Group and with Britten Sinfonia. He has performed extensively as an oratorio and concert soloist throughout the UK and France, singing in many of the country's leading concert halls and cathedrals, and working under the likes of Philip Moore, Stephen Cleobury, Jonathan Willcocks, James Grossmith, Ralph Allwood, Alain Charron, Chris Gray and Dominic Peckham. His vast repertoire includes Britten's Saint Nicolas, Verdi's Requiem, Mendelsohn's Elijah, Puccini's Messe di Gloria, Rossini's Stabat Mater and Pettite Messe Solenelle, as well as the masses and oratorios of Handel, Bach, Haydn and Schubert. A keen exponent of contemporary repertoire, he sang the lead role of John in Michael Oliva's Singularity in London's From the Soundhouse series, Gareth Wiliams's Breath Cycle for Scottish Opera, the Sloans Project for Noise Opera and has also workshopped new repertoire with the Mahogany Opera Group.
                </p>
            </Col>
            <Col md={4}>
                <Image src='/static/backgrounds/alistair.jpg' fluid />
            </Col>
        </Row>
    </Container>
</Layout>;
