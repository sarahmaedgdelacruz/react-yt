function Navbar() {
  return (
    <div className="h-[60px] bg-white flex justify-between items-center px-5 py-2">
      
      <div className="flex space-x-5">
        <img className="h-7" src="src/assets/elements/bar.svg" alt="" />
        <img className="h-6" src="src/assets/elements/ytlogo.svg" alt="" />
      </div>
      
      <div className="flex w-[45%] justify-center">
        <input className="border rounded-l-full px-3 py-1 w-[70%]" type="text" placeholder="Search" />

        <button className="border rounded-r-full w-[55px] flex justify-center items-center bg-gray-100" >
        <img className="h-6" src="src/assets/elements/search.svg" alt="" />
        </button>
        
        <button className="w-10 ml-4 bg-gray-100 flex justify-center items-center rounded-full" >
        <img className="h-6" src="src/assets/elements/mic.svg" alt="" />
        </button>
      
      </div>
      
      <div className="flex space-x-4">
        <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <img className="h-5" src="src/assets/elements/plus.svg" alt="" />
          <span>Create</span>
        </button>

        <button className="relative">
          <img className="h-7" src="src/assets/elements/bell.svg" alt="" />
          <div className="absolute top-2.5 left-4 h-4 w-4 border text-[7px] text-white font-medium flex justify-center items-center bg-red-500 rounded-full">
          7
          </div>
        </button>

        <button className="">
          <img className="h-11 w-11 rounded-full" src="src/assets/elements/avatar.jpg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
