import { Container, Heading } from "@chakra-ui/react";
import Header from "../../components/header";
import {useTasks} from "../../hooks/queries/useTasks";
import TaskForm from "../../components/tasksForm";
import TaskItem from "../../components/taskItem";

export default function Home() {

  const {data : tasks } = useTasks()
  
  
    return (
      <>
        <Header/>
          <Container>
            <Heading mt={5}>
              Lista de tasks
            </Heading>
          <hr />
            <TaskForm />
          <hr />
          <ul>
            {tasks?.map((task) => ( // percorrendo o array de tasks e renderizando cada uma delas
              <li key={task.id}>{task.title}</li> // definindo a key como o id da task
            ))}
          </ul>

        </Container>
      </>
    )
  }