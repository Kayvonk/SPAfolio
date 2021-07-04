import React, { Component } from 'react'
import Container from "../Container";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './style.css'

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
                    <div className="slidingTextLine1"
                    >
                        <Slide right cascade>
                            <div>
                                Hi, my name is
                            </div>
                        </Slide>

                        <Slide right cascade>
                            <span className="wordGradient"> Kayvon</span>

                        </Slide>
                        .</div>
                    <br />

                    <Slide left cascade>
                        <div className="slidingTextLine2"
                        >~Full-stack Web Developer</div>

                    </Slide>
                </Container>
            </div>
        )
    }
}
