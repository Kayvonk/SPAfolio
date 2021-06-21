import React from "react";
import "./style.css";
import Container from "../../components/Container";
import ContactCard from "../../components/ContactCard";
import TitleCard from "../../components/TitleCard";
import CardBtn from "../../components/CardBtn";
import Flip from 'react-reveal/Flip';

function ContactPage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <TitleCard>
          <h1>Contact</h1>
          <h2 className="contactText">Want to connect about a project? I'm happy to help.</h2>
        </TitleCard>
        <Flip bottom>
          <ContactCard>
            <div className="cardText">
              <p>kayvonk@gmail.com </p>
              <br />
              <p>(503)&nbsp;309-1924</p>
            </div>
          </ContactCard>
        </Flip>
      </Container>
      <CardBtn />
    </div>
  );
}

export default ContactPage;
