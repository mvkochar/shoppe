import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './PriceSlider.css'

function valuetext(value: number) {
  return `$${value}`;
}

function PriceSlider() {
  const [value, setValue] = React.useState<number[]>([40, 180]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 262 }}>
      <Slider
        getAriaLabel={() => 'Price: $40 - $180'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="price-info d-f jc-sb">
        <div className="price-values">Price: ${value[0]} - ${value[1]}</div>
        <div className="price-filter">Filter</div>
      </div>
    </Box>
  );
}

export default PriceSlider