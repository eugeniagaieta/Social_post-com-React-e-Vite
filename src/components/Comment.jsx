import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import styles from'./Comment.module.css';
import { Avatar } from './Avatar';


export function Comment() {
    return(
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/92613336?v=4" alt="" />

            <div className={styles.CommentBox}>
                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Eugenia Gaieta</strong>
                            <time title="11 de Março ás 08h30" dateTime="2023-05-11">Cerca de 1h atras</time>
                        </div>
                        <button title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}