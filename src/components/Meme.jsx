import memesData from "../memesData"

export default function Meme() {

    let url = ""
   function getMemeImage () {
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        console.log(random)
        url = memesArray[random].url
        console.log(url) 
    }
    
    return (
        <main>
            <div className="form">
                <div className="form--inputs">
                        <div className="top--text">
                    <label htmlFor="topText" className="block pl-4 pb-2">Top Text:</label>
                    <input type="text" placeholder="Shut up" id="topText"/>
                        </div>
                        <div className="bottom--text">
                    <label htmlFor="bottomText" className="block pl-4 pb-2">Bottom Text:</label>
                    <input type="text" placeholder="and take my money" id="bottomText"/>
                         </div>
                </div>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}