import React from "react";
import "./style.css";
import Container from "../../components/Container";
import ContactCard from "../../components/ContactCard";
import TitleCard from "../../components/TitleCard";
import CardBtn from "../../components/CardBtn";

function ContactPage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <TitleCard>
          <h1>Contact</h1>
          <h2>Want to connect? Here are the best ways reach me. </h2>
        </TitleCard>
        <ContactCard style={{
          backgroundColor: '#00000000'
        }}>
          <h3> email: kayvonk@gmail.com </h3>
          <br />
          <h3> phone: 503-309-1924</h3>
        </ContactCard>
      </Container>
      <CardBtn />
    </div>
  );
}

export default ContactPage;
