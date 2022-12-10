import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

export default function Home() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  function checkIfDuplicateExists(arr) {
    return new Set(arr.map((v) => v.todo));
  }

  let isDuplicate = false;

  function addTodo() {
    // if input is empty then return
    if (!input.replaceAll(' ', '')) return;

    if (isDuplicate) return;

    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        todo: input,
        isCompleted: false,
      },
    ]);

    setInput('');
  }

  function removeTodo(value) {
    const index = todoList.indexOf(value);
    console.log(index);

    // if (index > -1) {
    //   todoList.splice(index, 1);
    // }
    // setTodoList(todoList);
  }

  useEffect(() => {
    let duplicate = checkIfDuplicateExists(todoList);

    isDuplicate = duplicate.size < todoList.length;

    if (isDuplicate) {
      alert('Task is already exists');
      return;
    }
  }, [todoList]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div>TODO LIST</div>

        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addTodo()}>Add</button>

        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.todo}
                  <button onClick={removeTodo(todo.id)}>remove</button>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
