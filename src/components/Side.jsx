function SideVideo() {
  return (
    <div>
        <div className="justify-between items-center py-6">
        <button className="inline-flex justify-center text-white bg-black items-center px-3 py-2 rounded-full space-x-2">
            <span>All</span>
        </button>

        <button className="inline-flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-4">
          <span>From the series</span>
        </button>

        <button className="inline-flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <span>From Sammy Han</span>
        </button>

        <button className="inline-flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <span>Co</span>
        </button>

        <button className="inline-flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
            <img src="src/assets/elements/arrowright.svg" alt="" />
        </button>
        </div>

        <div className="w-[150px] ">
        <img className="mb-2" src="src/assets/side/side1.jpg" alt="" />
        <img className="mb-2" src="src/assets/side/side2.jpg" alt="" />
        <img className="mb-2" src="src/assets/side/side3.jpg" alt="" />
        <img className="mb-2" src="src/assets/side/side4.jpg" alt="" />
        </div>

        <hr />
      
    </div>


  )
}

export default SideVideo
