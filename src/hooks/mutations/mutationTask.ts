import api from "../../config/api"
import { useMutation, useQueryClient } from 'react-query'

import { Task } from "../../interfaces/task"

const createTask = (task: Task) => api.post<Task>("/task", task)

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation((task: Task) => createTask(task), {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks')
    }
  })
}