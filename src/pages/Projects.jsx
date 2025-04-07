const Block = ({ title, description, children }) => {
    return (
        <div>
            <div className="mx-auto flex flex-col items-center backdrop-blur">
                <span className="text-6xl font-bold nunito text-center">{title}</span>
                <div className="w-full max-w-2xl mt-4 text-center">{description}</div>
            </div>
            {children}
        </div>
    )
}

const ProjectsContainer = ({ children }) => {
    return (
        <div className="flex gap-5 mt-5 items-center align-center justify-center flex-wrap">
            {children}
        </div>
    )
}

const Project = ({ preview, title, description, link }) => {
    return (
        <button
            className="group w-100 shadow-2xl overflow-hidden rounded-xl shrink-0 cursor-pointer"
            onClick={() => window.open(link, '_blank')}
        >
            <div className="h-50 w-full overflow-hidden">
                <img
                    className="group-hover:scale-125 w-full h-full object-cover transition-transform duration-300"
                    src={`/assets/images/projects/${preview}`}
                    alt="Preview"
                />
            </div>
            <div className="flex flex-col text-left p-2">
                <span className="text-2xl font-bold nunito">{title}</span>
                <span>{description}</span>
            </div>
        </button>
    )
}

export const Projects = () => {
    return (
        <div className="container mx-auto relative my-16">
            <Block
                title="Мои проекты"
                description="В этом разделе представлены мои личные проекты, разработанные в рамках обучения, хобби или самостоятельного изучения технологий. Каждый из них отражает мои навыки в верстке, программировании, работе с React и другими инструментами frontend-разработки."
            >
                <ProjectsContainer>
                    <Project
                        preview="riseloader.png"
                        title="RiseLoader"
                        description="Десктопное приложения для клиента riseclient.com. Написан на Java с использованием JavaFX"
                        link="https://github.com/sqlerrorthing/RiseLoader"
                    />
                </ProjectsContainer>
            </Block>
            <div className="mt-10">
                <Block
                    title="Сторонние проекты"
                    description="Здесь собраны командные или внешние проекты, в которых я участвовал в качестве разработчика или помощника. Это может быть работа над чужим проектом, где я вносил вклад в код, дизайн или функциональность."
                >
                    <ProjectsContainer>
                        <Project
                            preview="liquidbounce.png"
                            title="LiquidBounce"
                            description="Софт на популярную игру Minecraft. Написан на Kotlin."
                            link="https://github.com/CCBlueX/LiquidBounce"
                        />
                    </ProjectsContainer>
                </Block>
            </div>
        </div>
    )
}
