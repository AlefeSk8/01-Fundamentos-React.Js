import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AlefeSk8.png",
      name: "Álefe Araujo",
      role: "Web, API, APP Developer | React.Js, Node.Js and React-Native 🧑‍💻"
    },
    content: [
      {type: "paragraph", content: "Uffa!🙌"},
      {type: "paragraph", content: "Enfim, realizei o deploy da minha API em NodeJs, na EC2 da AWS, criando também um storage no S3(AWS) para salvar os uploads de arquivos, configurei o SES(AWS) para envio de email de recuperação de senha."},
      {type: "paragraph", content: "E para finalizar a trilha de NodeJS 2021, criei uma aplicação com Serverless framework, que gera o certificado de conclusão, salva em PDF no bucket do S3(AWS) e registra no banco de dados DynamoDB(AWS), retornando o link para visualização do certificado em PDF. Faz também a validação do certificado, buscando pelo id no banco de dados que consta no certificado gerado."},
      {type: "paragraph", content: "E agora estou desenvolvendo essa Web page com ReactJs e ampliando meus conhecimentos.🧑‍💻✅"},
      {type: "link", content: "https://github.com/AlefeSk8/RentalX-API-NodeJs"},
    ],
    publishedAt: new Date('2023-04-19 21:23:16'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://scontent.fbau6-1.fna.fbcdn.net/v/t39.30808-6/334221095_189845620329761_7960969700994507072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=3gNkb6ddk7oAX-w0eu3&_nc_ht=scontent.fbau6-1.fna&oh=00_AfChem2W3g_S-Qt3TyaQDwpUKPF2mlH4eUjjXeVPf4qxTg&oe=6446F2A5",
      name: "Kalebe Haruki",
      role: "Filho do Álefe & Carol"
    },
    content: [
      {type: "paragraph", content: "Hoje eu brinquei um monte!🦖🤩"},
    ],
    publishedAt: new Date('2023-04-20 14:20:30'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://scontent.fbau6-1.fna.fbcdn.net/v/t39.30808-6/327435121_701244091702998_8871103293222764973_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SIOrHG-LAP4AX97gqMa&_nc_ht=scontent.fbau6-1.fna&oh=00_AfCqtJ1zend8vTSrYuFiaPAeEIvPkTvEGpb09l6f0rxNMA&oe=644633DD",
      name: "Caroline Mikawa",
      role: "Mãe do Kalebe👶"
    },
    content: [
      {type: "paragraph", content: "Tentando descansar...🥲"},
    ],
    publishedAt: new Date('2023-04-20 14:42:05'),
  },

];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          {
          posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
          }
        </main>
        
      </div>
    </div>
  )
}

export default App
