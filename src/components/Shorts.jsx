function Shorts() {
  return (
    <div className="bg-white p-4 w-[450px]">
      <div className="flex items-center space-x-3">
        <img className="h-7" src="src/assets/elements/shorts.svg" alt="" />
        <div>
        <h1 className="text-2xl font-bold">Shorts</h1>
        </div>
      </div>

      <div className="flex space-x-2 mt-2">
        <div>
          <img className="h-[250px] w-[850px] rounded-lg mb-2" src="src/assets/shorts/asset1.jpg" alt="" />
          <p className="flex"><h2 className="flex text-l font-semibold">The "real" side of ...</h2><img className="h-5" src="src/assets/elements/3dots.png" alt="" /></p>
            
            <p className="text-sm text-gray-600">1.8M views</p>
              
        </div>

        <div>
          <img className="h-[250px] w-[850px] rounded-lg mb-2" src="src/assets/shorts/asset2.jpg" alt="" />
          <p className="flex"><h2 className="flex text-l font-semibold">Don't attend hackathons...</h2><img className="h-5" src="src/assets/elements/3dots.png" alt="" /></p>
            
            <p className="text-sm text-gray-600">422K views</p>
            
        </div>

        <div>
          <img className="h-[250px] w-[850px] rounded-lg mb-2" src="src/assets/shorts/asset3.jpg" alt="" />
            <p className="flex"><h2 className="flex text-l font-semibold">Antonio Cipriano ...</h2><img className="h-5" src="src/assets/elements/3dots.png" alt="" /></p>
            <p className="text-sm text-gray-600">33K views</p>

          <div className="relative"></div>
            <button className="absolute 

      bg-white
      rounded-full
      p-2

      shadow-md
      shadow-gray-400

      flex 
      items-center 
      justify-center
      
      right-1
      -translate-y-55 ">
          
          <img src="src/assets/elements/arrowright.svg" alt="" />
          </button>
            
        </div>
        </div>
    </div>
  )
}

export default Shorts



      
      