import React from 'react';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Container,
} from '@mantine/core';
import ContactIconsList from '../ContactIconsList';
import '../ContactUs.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

function ContactUs() {
  return (
    <Container size="lg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="wrapper" style={{ width: '85%' }}> {/* Increased width slightly */}
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> {/* Centered */}
            <Title className="title" style={{ color: 'white', textAlign: 'left' }}>
              Contact us
              <Text className="description" mt="sm" mb={30} style={{ textAlign: 'left' }}>
                Leave your email, and we will get back <br /> to you within 24 hours.
              </Text>
            </Title>

            <ContactIconsList /> {/* Contact Details */}

            {/* Social media icons aligned in the center */}
            <Group mt="lg" spacing="xs">
              {social.map((Icon, index) => (
                <ActionIcon key={index} size={28} className="social" variant="transparent">
                  <Icon size={22} stroke={1.5} />
                </ActionIcon>
              ))}
            </Group>
          </div>

          <div
            className="form"
            style={{
              width: '90%', // Slightly bigger form
              minHeight: '500px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'rgba(39, 46, 34, 1)',
              padding: '30px',
              borderRadius: '8px',
              margin: 'auto', // Centered the form
            }}
          >
            <TextInput
              label={<span style={{ color: 'white' }}>Email</span>}
              placeholder="your@email.com"
              required
              style={{ height: '50px', marginBottom: '20px' }}
              classNames={{ input: 'input', label: 'inputLabel' }}
            />

            <TextInput
              label={<span style={{ color: 'white' }}>Name</span>}
              placeholder="Ayush Ranjan"
              mt="md"
              style={{ height: '50px', marginBottom: '20px' }}
              classNames={{ input: 'input', label: 'inputLabel' }}
            />

            <Textarea
              required
              label={<span style={{ color: 'white' }}>Your Message</span>}
              placeholder="I want to order your goods"
              minRows={6}
              mt="md"
              style={{ height: '120px', marginBottom: '20px' }}
              classNames={{ input: 'input', label: 'inputLabel' }}
            />

            <Group position="right" mt="md">
              <Button className="control">Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </Container>
  );
}

export default ContactUs;
