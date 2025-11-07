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
        
        <div className="flex space-x-4 py-2">
        <button className="px-4">
          <img className="h-11 w-11 rounded-full" src="src/assets/elements/creator.jpg" alt="" />
        </button>
        </div>

        <div>
        <span className="inline-block align-text-top">Sammy Han</span>
        </div>

        <div>
        <button className="flex justify-center text-white bg-black items-center px-3 py-2 rounded-full space-x-2">
          <span>Subscribe</span>
        </button>
        </div>


        <div className="flex space-x-4">
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

      
      </div>
    </div>                                         
  )
}

export default Video
