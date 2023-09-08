import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { Task } from "../../interfaces/task"
import { useUpdateTask } from "../../hooks/mutations/mutationTask"

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
    
    const { mutate, isLoading } = useUpdateTask()

    const handleUpdateTask = (task: Task) => {
      mutate({
        title: task.title,
        completed: !task.completed
      })
    }
    
  return (
    <Box as="li" bg="gray.800" p={3} borderRadius="md" my={2}>
      <Flex align="center" justify="space-between">
        <Text>{task.title}</Text>
        <Button colorScheme={task.completed ? 'green' : 'red'}
          onClick={() => { handleUpdateTask(task) }}
          isLoading={isLoading}>{task.completed ? "Realizada" : "Pendente"}</Button>
      </Flex>
    </Box>
  )
}