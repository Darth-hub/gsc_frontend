import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
<div 
  className={classes.wrapper}
  style={{
    display: "flex",
    alignItems: "center",  // Align icon and text in a row
    gap: "10px",  // Add space between icon and text
    paddingLeft: "15%", // Increased padding to move it right
    marginLeft: "auto", // Pushes the div further right
  }}
  {...others}
>
  <Box>
    <Icon size={24} />
  </Box>

  <div>
    <Text size="xs" className={classes.title}>
      {title}
    </Text>
    <Text className={classes.description}>{description}</Text>
  </div>
</div>

  );
}

const MOCKDATA = [
  { title: 'Email', description: 'ayushranjan112400@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+91 96307-39557', icon: IconPhone },
  { title: 'Address', description: 'Dwarka, Delhi', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 a.m.', icon: IconSun },
];

export default function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} style={{ marginBottom: '16px' }} />
  ));

  return (
    <Stack 
      spacing="lg" 
      style={{ 
        paddingRight: '15%',
        paddingLeft: '10%',  // Increased padding to shift right
        marginLeft: '',  // Pushes it further right
        width: 'fit-content' // Ensures it doesn't take full width
      }}
    >
      {items}
    </Stack>
  );
}

