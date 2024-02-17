import React from 'react';
import { ListItem, ListItemText, Checkbox} from '@mui/material';
import { styled } from '@mui/system';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const StyledListItem = styled(ListItem)({
    marginBottom: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  });


const TaskItem = ({ task, toggleTask }: TaskItemProps) => {
 
  return (
    <StyledListItem disablePadding>
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        color="primary"
      />
      <ListItemText primary={task.title} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
    </StyledListItem>
  );
};

export default TaskItem;
