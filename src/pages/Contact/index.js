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
        <TitleCard><h1>Contact</h1></TitleCard>
        <ContactCard><h3> Email: kayvonk@gmail.com </h3>
          <h3> Phone: 503-309-1924</h3>
        </ContactCard>
      </Container>
      <CardBtn />
    </div>
  );
}

export default ContactPage;
