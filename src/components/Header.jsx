export default function Header(){
    return(
        <header className="header flex flex-row justify-between items-center p-2">
            <div className="header--left flex justify-start items-center">
                <img src="/meme.svg" alt="logo" className="header--logo w-8 mr-2"/>
                <h3 className="header--title text-2xl font-bold">Meme Generator</h3>
            </div>
            <div className="header--right">
                <h3 className="text-sm font-extralight">React Meme Generator</h3>
            </div>
        </header>
    )
}