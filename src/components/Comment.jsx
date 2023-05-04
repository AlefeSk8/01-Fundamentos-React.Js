import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';


export function Comment(props) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        props.onDeleteComment(props.id);
    }

    function handleLikeComment() {
        setLikeCount((likeCountState) => { //Acessa o estado mais recente da variável likeCount
            return likeCountState + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={props.src} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.author}</strong>
                            <time 
                                title="20 de Abril às 08:19h" 
                                dateTime="2023-04-20 08:19:00">Cerca de 3h atrás
                            </time>
                        </div>

                        <button 
                            onClick={handleDeleteComment}
                            title='Deletar comentário'
                        >
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}