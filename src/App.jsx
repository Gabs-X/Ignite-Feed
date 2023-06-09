import { Sidebar } from './components/Sidebar';

import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css'


function App() {
  
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
    <Sidebar />
      <main>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores consequatur reprehenderit quia autem, suscipit eum omnis pariatur atque incidunt tenetur eius rerum facere tempora ab accusamus in. Nostrum!"
      />
      <Post 
        author="Gabriel Buzzi"
        content="Um novo post muito legal"      
      />
      </main>
      </div>
    </div>
  )
}

export default App
