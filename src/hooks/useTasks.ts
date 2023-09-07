import { useEffect, useState } from "react"

import api from "../config/api"

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]) // definindo o estado inicial como um array vazio

  useEffect(() => { // hook de efeito para executar uma função quando o componente for montado
    api.get("/task").then((response) => {
      setTasks(response.data) // atualizando o estado com os dados da api
    })
  }, [])

  return { tasks }
}