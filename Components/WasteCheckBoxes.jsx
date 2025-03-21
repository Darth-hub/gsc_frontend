import { Checkbox, Flex, Image, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
// import icons from './icons';
import './WasteCheckBoxes.css'

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  image,
  ...others
}) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      data-checked={value || undefined}
      className="WasteBoxesbutton"
    >
      <Image src={image} alt={title} width={5} height={5} />

      <div className="WasteBoxesbody">
        <Text c="dimmed" size="xs" lh={1} mb={5} ml={5}>
          {description}
        </Text>
        <Text fw={500} size="sm" lh={1}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
    </UnstyledButton>
  );
}

const mockdata = [
  { description: 'E-waste', title: 'E-waste', image: '../src/assets/e-waste.png'},
  
];

export default function WasteCheckBoxes() {
  const items = mockdata.map((item) => <ImageCheckbox {...item} key={item.title} />);
  return <SimpleGrid display={Flex} w={300} cols={{ base: 3, sm: 2, md: 4 }}>{items}</SimpleGrid>;
}
