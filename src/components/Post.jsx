import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/39250804?v=4" />
          <div className={styles.authorInfo}>
            <strong>Willian Komada</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="07 de Agosto às 13:24" dateTime="2023-08-07 13:24:40">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa! ✌</p>

        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no NLW, evento...
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea placeholder="Deixe um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
