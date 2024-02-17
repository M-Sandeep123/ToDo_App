import React, { useState } from "react";
import { Box } from "@mui/material";
import tasksData from "../../utils/data";
import AddTaskForm from "../AddTask";
import TaskList from "../TaskList";
import FilterOptions from "../FilterTasks";

function HomePage() {
  const [tasks, setTasks] = useState(tasksData);
  const [filter, setFilter] = useState("all");
  const handleAddNewTask = (title: any) => {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id:number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <AddTaskForm addTask={handleAddNewTask} />
      <Box>
        <Box display={"flex"}>
          <FilterOptions
            filter={filter}
            setFilter={(val)=> setFilter(val)}
          />
        </Box>
        <TaskList tasks={tasks} toggleTask={toggleTask} filter={filter}/>
      </Box>
    </Box>
  );
}

export default HomePage;
