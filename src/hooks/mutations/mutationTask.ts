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

const updateTask = (task: Task) => api.put<Task>(`/task/${task.id}`, task)

export const useUpdateTask = () => {
  const queryClient = useQueryClient()

  return useMutation((task: Task) => updateTask(task), {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks')
    }
  })
}

const deleteTask = (id: number) => api.delete<Task>(`/task/${id}`)

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  return useMutation((id: number) => deleteTask(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks')
    }
  })
}