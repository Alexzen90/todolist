import React, { useState } from 'react'
import { Button } from '@mantine/core';

interface TaskInputProps {
  addTask: (task: string) => void
}

export const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={handleChange} 
        placeholder="Nouvelle tâche..." 
      />
      <Button type='submit' variant="filled" className='mb-4'>Ajouter la tache</Button>
    </form>
  );
}