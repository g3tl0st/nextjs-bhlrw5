import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>TODO LIST</div>
        <div>
          <span>
            <input name="hi" />
            <button>add</button>
          </span>

          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <span></span>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
