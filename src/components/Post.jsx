import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        {id: 1, src: "https://github.com/diego3g.png", author: "Diego Fernandes", content: "Top, Parabéns!👏"},
        {id: 2, src: "https://github.com/maykbrito.png", author: "Mayk Brito", content: "Muito bom Álefe, Parabéns!👏"},
    ]);

    const [newCommentText, setNewCommentText] = useState("")

    console.log(`${newCommentText}`)

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
    
    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText("")
    };

    function handleNewCommentChange() {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value)
    }
    
    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment.id !== commentToDelete
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                        return <p key={line.content} >{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content} ><a target='blank' href={line.content}>{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map( comment => {
                        return (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                src={comment.src}    
                                author={comment.author}
                                content={comment.content}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }
            </div>
        </article>

    );
}