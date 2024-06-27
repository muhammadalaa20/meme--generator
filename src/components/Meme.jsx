import { useEffect, useState } from "react"
export default function Meme() {
    const [meme, setMeme]= useState(
        {
            topText: "",
            bottomText: "",
            image: "http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allMeme, setAllMeme] = useState([])

    useEffect(() => {
        // async () => {
        //     const res = await fetch("https://api.imgflip.com/get_memes")
        //     const data = await res.json()
        //     setAllMemes(data.data.memes)
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    }, [])

    let url = ""
   function getMemeImage () {
        const random = Math.floor(Math.random() * allMeme.length)
        url = allMeme[random].url
        setMeme( oldState => ({...oldState, image: url}))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setMeme( oldState => ({...oldState, [name]: value}))
    }
    
    return (
        <main>
            <div className="form">
                <div className="form--inputs">
                        <div className="top--text">
                    <label htmlFor="topText" className="block pl-4 pb-2">Top Text:</label>
                    <input 
                    type="text" 
                    placeholder="Shut up" 
                    id="topText"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                        </div>
                        <div className="bottom--text">
                    <label htmlFor="bottomText" className="block pl-4 pb-2">Bottom Text:</label>
                    <input 
                    type="text" 
                    placeholder="and take my money" 
                    id="bottomText"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                         </div>
                </div>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
            <img src= {meme.image} alt="meme image"  className="meme--image max-w-full mx-auto pt-4"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}