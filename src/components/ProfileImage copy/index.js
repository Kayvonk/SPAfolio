import React, { Component } from 'react'
import Container from "../Container";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default class ProfileImage extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ show: !this.state.show });
    }
    render() {
        return (
            <div>
                {/* <Fade left when={this.state.show}>
                </Fade> */}
                <Fade left>
                    {/* <Slide left> */}
                    <Container style={{ marginTop: 30 }}>
                        <img className="profileSquare"
                            onClick={this.handleClick}
                            style={{ borderRadius: '200px' }}
                            src="assets/profile.jpg"
                            alt="profileImage" />
                        <br />
                    </Container>
                    {/* </Slide> */}
                </Fade>
                <Container>
                    <Slide right when={this.state.hide}>
                        {/* <Fade right> */}
                        <p
                            className="slidingTextLine1"
                        > Full-stack Web Developer</p>

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
