import React from 'react'
import Container from "../Container";
import Slide from 'react-reveal/Slide';

function Banner() {

    return (
        <>
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
        </>
    )
}

export default Banner;
