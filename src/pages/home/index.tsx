import { Container } from "@chakra-ui/react";
import Header from "../../components/header";
import useTasks from "../../hooks/useTasks";

export default function Home() {

  const { tasks } = useTasks()
  
    return (
      <>
        <Header/>
        <Container>
          <h1>Home</h1>

          <ul>
            {tasks.map((task) => ( // percorrendo o array de tasks e renderizando cada uma delas
              <li key={task.id}>{task.title}</li> // definindo a key como o id da task
            ))}
          </ul>

        </Container>
      </>
    )
  }