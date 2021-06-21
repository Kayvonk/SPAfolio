import React, { Component } from 'react'
import Container from "../Container";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default class ProfileImage extends Component {

    render() {
        return (
            <div>
                <Fade top>
                    {/* <Slide left> */}
                    <Container style={{ marginTop: 30 }}>
                        <img className="profileSquare"
                            style={{ borderRadius: '200px' }}
                            src="assets/profile.jpg"
                            alt="profileImage" />
                        <br />
                    </Container>
                    {/* </Slide> */}
                </Fade>
                <Container style={{ position: "relative" }}>
                    <Slide right cascade>
                        {/* <Fade right> */}
                        <p
                            className="slidingTextLine1"
                        > Full-stack Web Developer</p>
                        <br />
                        {/* </Fade> */}
                        {/* <Fade right> */}
                        <p
                            className="slidingTextLine2"
                        >with a passion for innovation.</p>
                        {/* </Fade> */}
                    </Slide>
                </Container>
            </div>
        )
    }
}
