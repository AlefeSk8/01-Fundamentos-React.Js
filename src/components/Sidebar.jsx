import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(props) {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/AlefeSk8.png" />

                <strong>Álefe Araujo</strong>
                <span>Web developer | React.Js</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    );
}