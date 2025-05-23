import {
    JavaBadge,
    JavaFXBadge,
    KotlinBadge,
    RustBadge,
    CSSBadge,
    AmazonAWSBadge,
    TypeScriptBadge,
    HTMLBadge,
    SvelteBadge,
    SCSSBadge,
} from '@/components/Badges'
import { ExternalLinkIcon } from '@/components/ExternalLinkIcon'

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
        <div className="flex gap-5 mt-5 items-stretch align-center justify-center flex-wrap">
            {children}
        </div>
    )
}

const Project = ({ preview, title, description, link, children: badges = null }) => {
    return (
        <button
            className="group w-100 shadow-2xl overflow-hidden rounded-xl shrink-0 cursor-pointer flex flex-col items-start backdrop-blur-xl h-fit"
            onClick={() => window.open(link, '_blank')}
        >
            <div className="h-50 w-full overflow-hidden flex items-center justify-center">
                <img
                    className="group-hover:scale-125 w-full h-full object-cover transition-transform duration-300"
                    src={`/assets/images/projects/${preview}`}
                    alt="Preview"
                />
            </div>

            <div className="flex flex-col gap-y-2 text-left p-2 bg-neutral-200/40">
                <div className="flex items-center gap-1">
                    <span className="text-3xl font-bold nunito">{title}</span>
                    <ExternalLinkIcon className="opacity-0 w-3 h-3 fill-black group-hover:opacity-100 transition-opacity" />
                </div>
                <span>{description}</span>
                {badges && <div className="flex gap-2 flex-wrap">{badges}</div>}
            </div>
        </button>
    )
}

export const Projects = () => {
    return (
        <div className="container mx-auto relative my-16">
            <Block
                title="Мои проекты"
                description="В этом разделе представлены мои личные проекты, разработанные в рамках обучения, хобби или самостоятельного изучения технологий. Каждый из них отражает мои навыки в программировании, работе с Kotlin, Java и другими языками программирования."
            >
                <ProjectsContainer>
                    <Project
                        preview="riseloader.png"
                        title="RiseLoader"
                        description="Десктопное приложение для клиента riseclient.com."
                        link="https://github.com/sqlerrorthing/RiseLoader"
                    >
                        <JavaBadge />
                        <JavaFXBadge />
                        <CSSBadge />
                    </Project>

                    <Project
                        preview="oxyclouddataset.png"
                        title="OxyCloudDataset"
                        description="Обширный список с более чем 700 тысяч ссылок на файлы в oxy.st (oxy.cloud)."
                        link="https://github.com/sqlerrorthing/OxyCloudDataset/"
                    >
                        <JavaBadge />
                    </Project>

                    <Project
                        preview="itemrestrictplus.png"
                        title="ItemRestrictPlus"
                        description="Плагин на игру Minecraft который позволяет запрещать использование тех или иных предметов в тех или иных условиях."
                        link="https://github.com/sqlerrorthing/ItemRestrictPlus/"
                    >
                        <JavaBadge />
                    </Project>
                </ProjectsContainer>
            </Block>
            <div className="mt-10">
                <Block
                    title="Сторонние проекты"
                    description="Здесь собраны командные или внешние проекты, в которых я участвовал в качестве разработчика или помощника. Это может быть работа над чужим проектом, где я вносил вклад в код или функциональность."
                >
                    <ProjectsContainer>
                        <Project
                            preview="liquidbounce.png"
                            title="LiquidBounce"
                            description="Это кастомный клиент для Minecraft, предоставляющий расширенные возможности и функции для игроков."
                            link="https://github.com/CCBlueX/LiquidBounce"
                        >
                            <KotlinBadge />
                            <JavaBadge />
                            <RustBadge />
                            <SvelteBadge />
                            <HTMLBadge />
                            <TypeScriptBadge />
                            <SCSSBadge />
                            <AmazonAWSBadge />
                        </Project>

                        <Project
                            preview="catppuccinlb.png"
                            title="Catppuccin LB"
                            description="Самая популярная тема от сообщества для LiquidBounce."
                            link="https://github.com/liquidsquid1/catppuccin-lb"
                        >
                            <SvelteBadge />
                            <HTMLBadge />
                            <TypeScriptBadge />
                            <SCSSBadge />
                        </Project>

                        <Project
                            preview="lazurite.png"
                            title="Lazurite"
                            description="Это интерпретируемый язык программирования с динамической типизацией. Этот язык использует преимущества Java и упрощает его."
                            link="https://github.com/ArtyomKingmang/Lazurite/"
                        >
                            <KotlinBadge />
                            <JavaBadge />
                        </Project>
                    </ProjectsContainer>
                </Block>
            </div>
        </div>
    )
}
