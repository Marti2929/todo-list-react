import List from './List';
import Form from './Form';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

let tasks = [
  {id: 1, content: "zrobić zakupy", done: false},
  {id: 2, content: "kupić prezenty", done: true},
];

let hideDoneTasks = false;

function App() {
  return (
    <Container>      
      <Header title="Lista zadań" />
          <Section title="Dodaj nowe zadanie" body={<Form />} />      
          <Section  title="Lista zadań"
                    headerButtons={<Buttons tasks={tasks} />}
                    body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}/>
    </Container>
  );
}

export default App;