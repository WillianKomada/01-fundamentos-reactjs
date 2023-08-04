import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post
            author="Willian Komada"
            content="Front-end Developer at Home Office"
          />
          <Post author="Diego Fernandes" content="Developer at Rocketseat" />
          <Post author="Luccas Marchielo" content="Developer at NASA" />
        </main>
      </div>
    </>
  );
}
