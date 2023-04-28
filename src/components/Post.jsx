import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        "Muito bom, Parabéns!👏",
    ]);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    
    function handleCreateNewComment() {
        event.preventDefault();
        
        const newCommentText = event.target.comment.value;

        setComments([...comments, newCommentText]);
    };

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a target='blank' href={line.content}>{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map( comment => {
                        return (
                            <Comment
                                content={comment}
                            />
                        )
                    })
                /* <Comment author="Diego Fernandes" src="https://github.com/diego3g.png" />

                <Comment author="Mayk Brito" src="https://github.com/maykbrito.png" /> */
                }
            </div>
        </article>

    );
}