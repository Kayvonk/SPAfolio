import React, { Component } from 'react'
import Container from "../Container";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default class ProfileImage extends Component {

    render() {
        return (
            <div>
                <Fade left>
                    <Container style={{ marginTop: 30 }}>
                        <img className="profileSquare"
                            style={{ borderRadius: '200px' }}
                            src="assets/profile.jpg"
                            alt="profileImage" />
                    </Container>
                </Fade>
                <Container>
                    <Slide right cascade>
                        <p className="slidingTextLine1"
                        > Full-stack Web Developer</p>
                        <br />
                        <p className="slidingTextLine2"
                        >with a passion for innovation.</p>
                    </Slide>
                </Container>
            </div>
        )
    }
}
