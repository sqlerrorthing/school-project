import './App.css'

function Link({name, url}) {
   return (
       <a href={url} target="_blank" className={"link"}>
           {name}
       </a>
   );
}

function Links() {
    return (
        <ul className={"links"}>
            <Link name={"Гитхаб"} url={"https://github.com/sqlerrorthing"}/>
            <Link name={"Телеграм"} url={"https://t.me/sqlerrorph"}/>
            <Link name={"Инстаграм"} url={"https://instagram.com/sqlerrorthing"}/>
        </ul>
    )
}

function Portfolio() {
    return (
        <div className={"portfolio"}>
            <p>проекты в портфолио пока что пустует...</p>
            <p>возможно, это не надолго</p>
        </div>
    )
}

function App() {
    return (
        <>
            <main className={"main"}>
                <div className={"doge"}>
                    <img src="images/doge.png" alt=""/>
                </div>
                <div className="main-container">
                    <div className="title">
                        <h3>Привет, я Рома 👋 16 лет. Моё мини-портфолио</h3>
                        <p>Здесь будут, возможно, мои проекты, но пока что, возможно, оно будет пустовать</p>
                    </div>

                    <Links/>
                    <Portfolio/>
                </div>
            </main>
        </>
    )
}

export default App
