import React, {useState} from 'react';
import List from './List';
import Form from './Form';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

let hideDoneTasks = false;

function App() {
  
  const [tasks, setTasks] = useState([
    {id: 1, content: "zrobić zakupy", done: false},
    {id: 2, content: "kupić prezenty", done: true},
  ]);

  const addNewTask = (newTask) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTask,
        done: false,
        // id: tasks.length === 0 ? 1 : (tasks.length + 1),
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      }])
  }

  return (
    <Container>      
      <Header title="Lista zadań" />
          <Section title="Dodaj nowe zadanie"
                   body={
                     <Form addNewTask={addNewTask}/>} />      
          <Section title="Lista zadań"
                   headerButtons={
                    <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                   body={
                    <List tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
    </Container>
  );
}

export default App;