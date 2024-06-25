import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 10%;
  max-width: 600px;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  const [homeContent, setHomeContent] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get('/data/homeContent.json')
      .then(response => {
        setHomeContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching home content:', error);
      });
  }, []);

  return (
    <Container>
      <Section>
      <Image src="/images/welcome.jpg" alt="Welcome" />
        <Subtitle>{homeContent.title}</Subtitle>
        <Content>
        {homeContent.content}
        </Content>
       
      </Section>

      <Section>
      <Image src="/images/services.jpg" alt="Services" />
        <Content>
          We offer a wide range of investigative services tailored to meet the unique needs of our clients, including:
          <ul>
            <li><strong>Corporate Investigations:</strong> Protect your business interests with thorough investigations into fraud, embezzlement, and corporate espionage.</li>
            <li><strong>Private Investigations:</strong> Get peace of mind with our discreet private investigation services, including background checks, surveillance, and infidelity investigations.</li>
            <li><strong>Legal Support:</strong> Strengthen your legal case with our evidence-gathering expertise and witness interviews.</li>
            <li><strong>Digital Forensics:</strong> Uncover digital evidence with our cutting-edge forensic services, including data recovery and cyber investigations.</li>
          </ul>
        </Content>
       
      </Section>

      <Section>
      <Image src="/images/why-choose-us.jpg" alt="Why Choose Us" />
        <Content>
          <ul>
            <li><strong>Experienced Professionals:</strong> Our team comprises seasoned investigators with backgrounds in law enforcement, military, and private sectors.</li>
            <li><strong>Confidentiality:</strong> We handle all investigations with the highest level of confidentiality to protect your privacy.</li>
            <li><strong>Cutting-Edge Technology:</strong> We employ the latest investigative tools and techniques to ensure accurate and timely results.</li>
            <li><strong>Client-Centric Approach:</strong> We prioritize your needs and work diligently to deliver the best possible outcomes.</li>
          </ul>
        </Content>
      </Section>

      <Section>
      <Image src="/images/testimonials.jpg" alt="Testimonials" />
        <Content>
          <blockquote>
            “The team provided invaluable assistance in uncovering critical evidence for our case. Their professionalism and attention to detail were outstanding.” - [Client Name], [Client Position]
          </blockquote>
          <blockquote>
            “I was impressed with how quickly and discreetly [Your Company Name] handled my investigation. Their findings were thorough and exceeded my expectations.” - [Client Name], [Client Position]
          </blockquote>
        </Content>
      </Section>

      <Section>
      <Image src="/images/contact-us.jpg" alt="Contact Us" />
        <Content>
          Whether you need corporate investigation services, private investigation support, or digital forensics, [Your Company Name] is here to help. Contact us today to discuss your needs and find out how we can assist you.
        </Content>
        <Button>Contact Us</Button>
        
      </Section>
    </Container>
  );
};

export default Home;
