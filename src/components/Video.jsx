function Video() {
  return (
    <div className="p-1">

      <div className="flex justify-center items-center p-3">
        <iframe className="w-full h-[445px] rounded-lg" 
        // width="990" height="557" 
        src="https://www.youtube.com/embed/WTktA94Ytt8?list=RDWTktA94Ytt8" title="Wale ft. Rihanna - Bad (Remix) Lyrics" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div>
        <h1 className="text-xl px-4 py-1">Wale ft. Rihanna - Bad (Remix) Lyrics</h1>
      </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-4 py-2">
        <button className="px-4">
          <img className="h-11 w-11 rounded-full" src="src/assets/elements/creator.jpg" alt="" />
          <strong>Sammy Han</strong>
        <br></br>
        <span>23.6K subscribers</span>
        </button>
        </div>

        <div>
        <button className="flex justify-center text-white bg-black items-center px-3 py-2 rounded-full space-x-2">
          <span>Subscribe</span>
        </button>
        </div>

        <div className="flex space-x-4">
        <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <img className="h-5" src="src/assets/elements/thumbsup.svg" alt="" />
          <span>10k</span>
          
          <img className="h-5" src="src/assets/elements/thumbsdown.svg" alt="" />
        </button>
        
        <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <img className="h-5" src="src/assets/elements/share.svg" alt="" />
          <span>Share</span>
        </button>

        <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <img className="h-5" src="src/assets/elements/arrowdown.svg" alt="" />
          <span>Download</span>
        </button>

        <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <img className="h-5" src="src/assets/elements/plus.svg" alt="" />
          <span>Clip</span>
        </button>
        </div>

      <div>
                <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-full space-x-2">
          <strong>...</strong>
        </button>
      </div>

      <div>
        <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-b-sm space-x-2">
          <strong>323K views  7 months ago</strong>
        <br></br>
        <span>Click this link to buy the Ultrahuman Ring AIR and use code 'HAN10' to get 10% off!: http://ultrahuman.com/SamuelHan</span>
        <span>Amazon code for 10% off: AMZNSAMH10</span>
        <strong>...more</strong>
        </button>
      </div>

      <div>
        <button className="flex justify-center bg-gray-100 items-center px-3 py-2 rounded-b-sm space-x-2">
        <span>The video follows a participant at a 24-hour hackathon. They share their experience working with a new team, discuss their project, and highlight...</span>
        <img className="h-5" src="src/assets/elements/diamond.svg" alt="" />
        <strong>Summary</strong>
        </button>

      </div>

      </div>
        
    </div>                                         
  )
}

export default Video
