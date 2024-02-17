export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  const tasks: Task[] = [
    { id: 1, title: "Complete homework", completed: false },
    { id: 2, title: "Read a book", completed: false },
    { id: 3, title: "Go for a run", completed: true },
    { id: 4, title: "Buy groceries", completed: false }
  ];
  
  export default tasks;