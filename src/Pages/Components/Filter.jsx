import { Button, NumberInput, Group, Box, SegmentedControl } from '@mantine/core';
import { useForm } from '@mantine/form';

function ScrapFilterForm({getFilterDetails, currentRender}) {
  const form = useForm({
    initialValues: {
      locationType: currentRender,
      minWeight: 5,
      maxWeight: 50,
    },

    validate: {
      minWeight: (value, values) => 
        value > values.maxWeight ? 'Min must be ≤ Max' : null,
      maxWeight: (value, values) => 
        value < values.minWeight ? 'Max must be ≥ Min' : null,
    },
  });

  const handleWeightChange = (field, value) => {
    const numericValue = Number(value);
    form.setValues(current => {
      const updates = { [field]: numericValue };
      
      if (field === 'minWeight' && numericValue > current.maxWeight) {
        updates.maxWeight = numericValue;
      }
      if (field === 'maxWeight' && numericValue < current.minWeight) {
        updates.minWeight = numericValue;
      }
      
      return { ...current, ...updates };
    });
  };


  return (
    <Box className="bg-[#1B2316] text-white p-5 rounded-md h-[95vh] w-[26vw]">
      <h2 className="text-lg font-bold mb-3">Filter Scrap Pickups</h2>

      <SegmentedControl
        value={form.values.locationType}
        onChange={(value) => form.setFieldValue('locationType', value)}
        data={[
          { label: 'State', value: 'state' },
          { label: 'District', value: 'district' },
        ]}
        fullWidth
        color="green"
        className="mb-4"
      />

      <NumberInput
        label="Min Scrap Weight (kg)"
        min={1}
        max={form.values.maxWeight}
        {...form.getInputProps('minWeight')}
        onChange={(value) => handleWeightChange('minWeight', value)}
        className="mb-4"
      />

      <NumberInput
        label="Max Scrap Weight (kg)"
        min={form.values.minWeight}
        max={500}
        {...form.getInputProps('maxWeight')}
        onChange={(value) => handleWeightChange('maxWeight', value)}
        className="mb-4"
      />

      <Group position="apart">
        <Button variant="default" onClick={form.reset}>Reset</Button>
        <Button 
          color="green" 
          onClick={() => getFilterDetails(form.values)}
        >
          Apply Filters
        </Button>
      </Group>
    </Box>
  );
}

export default ScrapFilterForm;