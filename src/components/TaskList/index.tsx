import React from "react";
import { List, Box } from "@mui/material";
import { styled } from "@mui/system";
import TaskItem from "../TaskItem";

const CenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TaskListContainer = styled(Box)({
  width: "150vh",
});

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  filter: string;
}

const TaskList = ({ tasks, toggleTask, filter }: TaskListProps) => {
  return (
    <CenteredBox>
      <TaskListContainer>
        <List>
          {filter === "all"
            ? tasks.map((task) => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
              ))
            : tasks
                .filter((task) => task.completed === (filter === "completed"))
                .map((task) => (
                  <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
                ))}
        </List>
      </TaskListContainer>
    </CenteredBox>
  );
};

export default TaskList;
