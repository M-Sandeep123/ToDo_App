import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

interface Task {
    id: number;
    title: string;
    completed: boolean;
  }

interface AddTaskFormProps {
  addTask: (title: string) => void;
}

const StyledForm = styled('form')({
  marginBottom: '20px',
});

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const AddTaskForm = ({ addTask }:AddTaskFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title.trim());
      setTitle('');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledBox>
        <TextField
          type="text"
          label="Add new task"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: '100vh' }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ marginLeft: '10px' }}>
          Add Task
        </Button>
      </StyledBox>
    </StyledForm>
  );
};

export default AddTaskForm;
