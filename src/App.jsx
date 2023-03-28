import { Header } from './components/Header';
import { Post } from './Post'
import './global.css';

function App() {
  
  return (
    <div>
    <Header />

      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores consequatur reprehenderit quia autem, suscipit eum omnis pariatur atque incidunt tenetur eius rerum facere tempora ab accusamus in. Nostrum!"
      />
      <Post 
        author="Gabriel Buzzi"
        content="Um novo post muito legal"      
      />

    </div>
  )
}

export default App
