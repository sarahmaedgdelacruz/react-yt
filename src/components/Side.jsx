function SideVideo() {
  return (
    <div className="w-[450px] ">
        <div className="justify-between items-center py-6 space-x-2">
        <button className="inline-flex justify-center text-white bg-black items-center px-3 py-2 rounded-xl space-x-2">
            <span>All</span>
        </button>

        <button className="inline-flex justify-center bg-gray-100 items-center px-3 py-2 rounded-xl space-x-4">
          <span>From the series</span>
        </button>

        <button className="inline-flex justify-center bg-gray-100 items-center px-3 py-2 rounded-xl space-x-2">
          <span>From Sammy Han</span>
        </button>

        <button className="inline-flex justify-center bg-gray-100 items-center px-3 py-2 rounded-xl space-x-2">
          <span>Co</span>
        </button>

        <button>
            <img src="src/assets/elements/arrowright.svg" alt="" />
        </button>
        </div>

        <div className=" space-y-2 mb-6">
          <div className="flex items-center space-x-2">
            <img className="w-[180px] rounded-lg" src="src/assets/side/side1.jpg" alt="" />
            <div>
            <div className="flex"><h2 className="text-l font-semibold">Tensionado (Live at The Cozy Cove) - Soapdish</h2>

            <button className="relative">
          <div className="absolute top-18 right-63 h-5 w-7  text-[10px] text-white font-medium flex justify-center items-center bg-black rounded-sm opacity-75">
          3:47
          </div>
        </button>
            
              <img className="h-5" src="src/assets/elements/3dots.png" alt="" /></div>
            <p className="text-sm text-gray-600">Nine Degrees North</p>
            <p className="text-sm text-gray-600">985K views · 2 weeks ago</p></div>
            
            
          </div>

          
            <div className="flex items-center space-x-2">
            <img className="w-[180px] rounded-lg" src="src/assets/side/side2.jpg" alt="" />
            <div>
            <div className="flex"><h2 className="text-l font-semibold">How Hackers Use SQL Injection to Get Into Websites</h2>
            <button className="relative">
          <div className="absolute top-18 right-63 h-5 w-7  text-[10px] text-white font-medium flex justify-center items-center bg-black rounded-sm opacity-75">
          13:04
          </div>
        </button>
            <img className="h-5" src="src/assets/elements/3dots.png" alt="" />
            </div>
            <p className="text-sm text-gray-600">Neurix</p>
            <p className="text-sm text-gray-600">115K views · 2 weeks ago</p></div>
            
            
          </div>

          <div className="flex items-center space-x-2">
            <img className="w-[180px] rounded-lg" src="src/assets/side/side3.jpg" alt="" />
            <div>
            <div className="flex"><h2 className="text-l font-semibold">Day in the Life of a Japanese Game Programmer</h2>
            <button className="relative">
          <div className="absolute top-18 right-63 h-5 w-7  text-[10px] text-white font-medium flex justify-center items-center bg-black rounded-sm opacity-75">
          13:47
          </div>
        </button>
            <img className="h-5" src="src/assets/elements/3dots.png" alt="" />
            </div>
            <div className="flex">
            <p className="text-sm text-gray-600">Paolo fromTOKYO</p>
            <div className="flex items-center ml-0.5">
            <img className="h-3" src="src/assets/elements/check.svg" alt="" />
            </div>
            </div>
            <p className="text-sm text-gray-600">17M views · 5 years ago</p></div>
            
            
          </div>

          <div className="flex items-center space-x-2">
            <img className="w-[180px] rounded-lg" src="src/assets/side/side4.jpg" alt="" />
            <div>
            <div className="flex justify-between"><h2 className="text-l font-semibold">Why is VFX so Expensive jumbo hotdog? </h2>
            <button className="relative">
          <div className="absolute top-18 right-63 h-5 w-7  text-[10px] text-white font-medium flex justify-center items-center bg-black rounded-sm opacity-75">
          19:48
          </div>
        </button>
            <img className="h-5" src="src/assets/elements/3dots.png" alt="" />
            </div>
            <div className="flex">
            <p className="text-sm text-gray-600">ErikDoesVFX</p>
            <div className="flex items-center ml-0.5">
            <img className="h-3" src="src/assets/elements/check.svg" alt="" />
            </div>
            </div>
            <p className="text-sm text-gray-600">2.8M views · 3 weeks ago</p></div>
            
            
          </div>

        </div>
      
      
        <hr className="border-gray-300"/>
      
    </div>


  )
}

export default SideVideo
