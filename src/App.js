import React, {useState} from 'react';
import List from './List';
import Form from './Form';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

function App() {
  
  const [tasks, setTasks] = useState([
    {id: 1, content: "zrobić zakupy", done: false},
    {id: 2, content: "kupić prezenty", done: true},
  ]);

  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const addNewTask = (newTask) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTask,
        done: false,
        // id: tasks.length === 0 ? 1 : (tasks.length + 1),
        id: tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1,
      }])
  }

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  }

  const completeAllTasks = () => {
    setTasks(tasks => tasks.map(task => ({...task, done: true})))
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      return (task.id === id ? { ...task, done: !task.done } :  task) }))
  }

  return (
    <Container>      
      <Header title="Lista zadań" />
          <Section title="Dodaj nowe zadanie"
                   body={
                     <Form addNewTask={addNewTask}/>} />      
          <Section title="Lista zadań"
                   headerButtons={
                     <Buttons tasks={tasks}
                              hideDoneTasks={hideDoneTasks}
                              toggleHideDoneTasks={toggleHideDoneTasks}
                              completeAllTasks={completeAllTasks} />}
                   body={
                     <List tasks={tasks}
                           hideDoneTasks={hideDoneTasks}
                           toggleTaskDone={toggleTaskDone} />} />
    </Container>
  );
}

export default App;