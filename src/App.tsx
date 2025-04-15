import { Input } from 'postcss'
import './App.css'
import Button from './core/components/Button'
import HomeContainer from './sections/home/HomeContainer'
import InputText from './core/components/input/InputText'

function App() {

  return (
    <div className='flex flex-col items-center justify-center '>
      <InputText variant='TEXT' placeholder='Enter text...'></InputText>
    </div>

  )
}

export default App
