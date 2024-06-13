import React, { useState } from 'react';
import { TaskInput } from './TaskInput';
import { TaskList } from './TaskList';
import { Title } from '@mantine/core';
import { FaClipboardList } from "react-icons/fa";

interface Task {
  id: number;
  text: string;
  checked: boolean;
}

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: string) => {
    const newTaskObject = {
      id: Date.now(),
      text: newTask,
      checked: false
    };
    setTasks([...tasks, newTaskObject]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCheck = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    ));
  };

  return (
    <div>
      <div className='flex gap-8 items-center'>
        <Title >To do List</Title>
        <FaClipboardList size={35}/>
      </div> 
      <TaskInput addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCheck={toggleCheck} />
    </div>
  );
};

