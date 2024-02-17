import React from 'react';
import { ButtonGroup, Button, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';

interface FilterOptionsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const StyledSelect = styled(Select)({
  marginBottom: '20px',
});

const FilterOptions= ({ filter, setFilter }: FilterOptionsProps) => {

  return (
    <StyledSelect value={filter} onChange={(e:any) => setFilter(e.target.value)} variant="outlined">
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="completed">Completed</MenuItem>
      <MenuItem value="incomplete">Incomplete</MenuItem>
    </StyledSelect>
  );
};

export default FilterOptions;
