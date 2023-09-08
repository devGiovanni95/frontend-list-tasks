import { Box, Flex, Text } from "@chakra-ui/react"
import { Task } from "../../interfaces/task"

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <Box as="li" bg="gray.800" p={3} borderRadius="md" my={2}>
      <Flex align="center" justify="space-between">
        <Text>{task.title}</Text>
        <Text>{task.completed ? "Realizada" : "Pendente"}</Text>
      </Flex>
    </Box>
  )
}