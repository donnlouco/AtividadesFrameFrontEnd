import { useState, useEffect } from 'react';

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setTarefas(data.slice(0, 10)); // Limita a 10 itens para visualização
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p>Carregando tarefas...</p>;
  }

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          {tarefa.title} {tarefa.completed ? '✅' : '❌'}
        </li>
      ))}
    </ul>
  );
}