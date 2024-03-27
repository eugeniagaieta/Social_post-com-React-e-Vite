import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return(
    <div>
        <Header/>

       <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
                author="Marcia Gaieta"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam atque, maxime ullam delectus cum voluptate laudantium ad incidunt eum impedit in eius debitis illo earum sint perspiciatis vitae magni beatae."
          />
          <Post 
                author="Marcia Gaieta"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam atque, maxime ullam delectus cum voluptate laudantium ad incidunt eum impedit in eius debitis illo earum sint perspiciatis vitae magni beatae."
          />
        </main>
       </div>
       
    </div>
  )
}

export default App