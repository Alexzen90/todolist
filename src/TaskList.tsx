import React from 'react';
import { Button } from '@mantine/core';
import { Checkbox } from '@mantine/core';

interface TaskListProps {
  tasks: { id: number; text: string; checked: boolean }[];
  deleteTask: (id: number) => void;
  toggleCheck: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleCheck }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li className="flex items-center gap-12 mb-4" key={task.id}>
          <span className={task.checked ? 'line-through' : ''}>{task.text}</span>
          <Checkbox
            checked={task.checked}
            onChange={() => toggleCheck(task.id)}
          />
          <Button variant="filled" color="red" onClick={() => deleteTask(task.id)}>Supprimer</Button>
        </li>
      ))}
    </ul>
  );
};