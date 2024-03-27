import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.Post}>
            <header>
                <dir className={styles.author}>
                    <Avatar  src="https://github.com/diego3g.png" />
                    <div className={styles.authorInfo}>
                        <strong>Marcia Gaieta</strong>
                        <span>Web Developer</span>
                    </div>
                </dir>

                <time title="11 de Março ás 08h30" dateTime="2023-05-11">Publicado há 1h</time>
            </header>

            <div className={styles.content}>

            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>{'  '} <a href="">jane.design/doctorcare</a> </p>

            <p>
                <a href="">#novoprojeto</a>{' '}
                 <a>#nlw</a> {' '}
                 <a>#rocketseat</a>
            </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='deixe um comentario'
                />
                <footer>
                <button type="submit" >Publicar</button>
                </footer>
            </form>

            <div className={styles.CommentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}