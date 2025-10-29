import './App.css'
import Navbar from './components/Navbar'
import Video from './components/Video'

function App() {
  return (
    <div className='h-lvh'>
      <Navbar />
      <div className='flex'>
        <div className='w-[70%] h-lvh bg-pink-300'>
          <Video />
        </div>
        <div className='w-[30%] h-lvh bg-purple-300'>Side</div>
      </div>
    </div>
  )
}

export default App

