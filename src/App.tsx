import { Input } from 'postcss'
import './App.css'
import Button from './core/components/Button'
import HomeContainer from './sections/home/HomeContainer'
import InputText from './core/components/input/InputText'
import TaskCreator from './core/components/task-creator/TaskCreator'

function App() {

  return (
    <div className='flex flex-col items-center justify-center '>
      <TaskCreator id={1}></TaskCreator>
    </div>

  )
}

export default App
