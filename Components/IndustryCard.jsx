import { IconHeart } from "@tabler/icons-react";
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import './IndustryCard.css'
import { Link, NavLink } from "react-router-dom";


const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Beach Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { emoji: "☀️", label: "BEST PRICE" },
    { emoji: "🦓", label: "EASY SERVICE" },
    { emoji: "🌊", label: "Sea" },
    { emoji: "🌲", label: "Nature" },
    { emoji: "🤽", label: "Water sports" },
  ],
};

export default function IndustryCard({id,name,description,location,image}) {
  const {badges} = mockdata
  const url = `/selltoindustries/${id}`

  const features = badges.map((badge) => (
    <Badge  variant="light" color="green" key={badge.label} >
      {badge.label}
    </Badge>
  ));

  return (
    <Card bg="#18181b" mt={0} ml={0} mb={0} radius="md" className="Industrycard">
      <Card.Section>
        <Image radius="md"  src={image} alt={name} height={180}/>
      </Card.Section>

      <Card.Section bg='#18181b' className="Industrysection text-white">
        <Group justify="space-between">
          <Text size="xl" mt={5} weight={400}>
            {name}
          </Text>
          <Badge size="sm" variant="light" color="green">
            {location}
          </Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className="Industrysection">
        <Text mt="sm" mb='sm' className="Industrylabel" color="dimmed">
          CLAIMS
        </Text>
        <Group>
          {features}
        </Group>
      </Card.Section>

      <Group bg="#18181b" m="xs">
        <NavLink to={url}>
          <Button radius="md" mt="md" className="button" h={50} bg="#18181b" style={{ flex: 1 }}>
              Show details
          </Button>
        </NavLink>
        <ActionIcon mt='md' bg="#222C1D" variant="default" radius="md" size={36}>
          <IconHeart className="Industrylike" stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
