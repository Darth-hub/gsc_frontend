import { Button } from '@mantine/core';
import { TwitterIcon } from '@mantinex/dev-icons';

export default function TwitterButton(props) {
  return (
    <Button bg='#171717'style={{color: 'white'}} leftSection={<TwitterIcon size={16} color="#00ACEE" />} variant="default" {...props} />
  );
}

