import './App.css'
import Navbar from './components/Navbar'
import Video from './components/Video'
import Side from './components/Side'
import Shorts from './components/Shorts'


function App() {
  return (
    <div className='h-lvh'>
      <Navbar />
      <div className='flex'>
        <div className='w-[70%] h-lvh bg-white'>
          <Video />
        </div>
        <div className='w-[30%] h-lvh bg-white'>
          <Side />
          <Shorts />
        </div>
      </div>
    </div>
  )
}

export default App

