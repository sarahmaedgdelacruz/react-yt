function Video() {
  return (
    <div className="p-4 space-y-4">

      <div className="flex justify-center items-center p-2">
        <iframe
          className="w-full h-[600px] rounded-lg"
          src="https://www.youtube.com/embed/WTktA94Ytt8?list=RDWTktA94Ytt8"
          title="Wale ft. Rihanna - Bad (Remix) Lyrics"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <h1 className="text-2xl px-2 font-bold">Wale ft. Rihanna - Bad (Remix) Lyrics</h1>
      </div>
      
      <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3 px-2">
        <img className="h-11 w-11 rounded-full"
      src="src/assets/elements/creator.jpg"
      alt=""
    />
    <div>
      <h2 className="text-l font-semibold">Sammy Han</h2>
      <p className="text-sm text-gray-600">23.6K subscribers</p>
    </div>
    <button className="bg-black text-white px-3 py-2 rounded-full ml-3">
      Subscribe
    </button>
  </div>

        
        <div className="flex space-x-2">
          <div className="flex items-center bg-gray-100 rounded-full">
            <button className="flex items-center px-3 py-2 space-x-2">
            <img className="h-5" src="src/assets/elements/thumbsup.svg" alt="like" />
            <span>10k</span>
            </button>
          <div className="w-px h-6 bg-gray-300"></div>
            <button className="flex items-center px-3 py-2">
            <img className="h-5" src="src/assets/elements/thumbsdown.svg" alt="dislike" />
          </button>
        </div>

          
          <button className="flex items-center bg-gray-100 px-3 py-2 rounded-full space-x-2">
            <img className="h-5" src="src/assets/elements/share.svg" alt="share" />
            <span>Share</span>
          </button>
          
          <button className="flex items-center bg-gray-100 px-3 py-2 rounded-full space-x-2">
            <img className="h-5" src="src/assets/elements/download.png" alt="download" />
            <span>Download</span>
          </button>
          
          <button className="flex items-center bg-gray-100 px-3 py-2 rounded-full space-x-2">
            <img className="h-5" src="src/assets/elements/trim.png" alt="clip" />
            <span>Clip</span>
          </button>
          
          <button className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
            <img className="h-5" src="src/assets/elements/dots.png" alt="" />
          </button>
        </div>
      
      </div>
      <div className="bg-gray-100 p-3 rounded-md space-y-2">
        <strong>323K views 7 months ago</strong>
        <p>
          💻 Click this link to buy the Ultrahuman Ring AIR and use code 'HAN10' to get 10% off:{" "}
          <a
            className="text-blue-600 underline"
            href="http://ultrahuman.com/SamuelHan"
          >
            http://ultrahuman.com/SamuelHan
          </a>
        </p>
        <p>📦 Amazon code for 10% off: AMZNSAMH10</p>
        <strong>...more</strong>
      </div>

      <div className="bg-gray-100 p-3 rounded-md flex items-center space-x-2">
        <span className="flex-1">
          The video follows a participant at a 24-hour hackathon. They share their experience
          working with a new team, discuss their project, and highlight...
        </span>
        <img className="h-5" src="src/assets/elements/diamond.svg" alt="summary" />
        <strong>Summary</strong>
        <img className="h-5" src="src/assets/elements/arrowdown.svg" alt="expand" />
      </div>
    </div>
  );
}

export default Video;
