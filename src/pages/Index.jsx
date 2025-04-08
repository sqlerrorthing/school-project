import { ExternalLinkIcon } from '@/components/ExternalLinkIcon'
import { useNavigate } from 'react-router-dom'

const Technology = ({ name, description, image, link }) => {
    return (
        <div
            className="group hover:-translate-y-1 hover:translate-x-1 flex cursor-pointer shadow-xl transition-transform transition-shadow hover:shadow-accent/20 duration-300 rounded-xl p-2 gap-2 w-full backdrop-blur"
            onClick={() => window.open(link, '_blank')}
        >
            <img src={`/assets/images/${image}`} className="w-12 h-12" alt="" />
            <div className="flex text-left flex-wrap flex-col">
                <div className="flex items-center h-12 gap-2">
                    <span className="font-bold nunito text-xl">{name}</span>
                    <div className="opacity-0 group-hover:opacity-50 transition-opacity flex items-center gap-2">
                        <span>посетить</span>
                        <ExternalLinkIcon className="w-3 h-3 fill-black" />
                    </div>
                </div>
                <span>{description}</span>
            </div>
        </div>
    )
}

const MiniButton = ({ text, link }) => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(link)}
            className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-accent"
        >
            {text}
            <ExternalLinkIcon className="w-4 h-4 fill-black group-hover:fill-accent transition-colors translate-y-[2px] opacity-50 group-hover:opacity-100 transition-transform group-hover:scale-125" />
        </button>
    )
}

export const Index = () => {
    return (
        <div className="container mx-auto relative my-16">
            <div className="mx-auto flex flex-col items-center backdrop-blur">
                <span className="absolute w-55 h-55 bg-accent/10 -z-1 rounded-full animate-pulse blur-2xl bottom-0 right-0"></span>
                <span className="absolute w-50 h-50 bg-accent/30 -z-1 rounded-full animate-pulse blur-2xl top0-0 left-0"></span>

                <span className="text-6xl font-bold nunito text-center">Привет, я Рома👋</span>
                <div className="w-full max-w-2xl mt-4 text-center">
                    Бэкенд-разработчик. Пишу на Java и Kotlin, работаю с Spring Boot — создаю API,
                    настраиваю логику серверов, учусь оптимизировать даже скучные задачи. Мой код не
                    претендует на гениальность, зато стабильно работает и решает проблемы.
                </div>

                <div className="my-4 flex gap-8">
                    <MiniButton text="Резюме" link="/resume" />
                    <MiniButton text="Проекты" link="/projects" />
                    <MiniButton text="Контакты" link="/contacts" />
                </div>
            </div>
            <div className="mx-auto flex flex-col items-center mt-32 text-center">
                <span className="text-2xl font-bold nunito backdrop-blur">
                    Технологии которыми я интересуюсь ⚒️
                </span>
                <div className="mt-4 flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 flex-col justify-center">
                    <Technology
                        link="https://spring.io"
                        name="Spring Framework"
                        description="— это модульный Java-фреймворк для удобного создания enterprise-приложений с DI, AOP, MVC и интеграцией с другими технологиями."
                        image="springframework.svg"
                    />
                    <Technology
                        link="https://docker.com"
                        name="Docker"
                        description="— это платформа для развертывания и управления приложениями в контейнерах, которые изолируют ПО со всеми зависимостями, обеспечивая переносимость и быстрый запуск."
                        image="docker.svg"
                    />
                    <Technology
                        link="https://kotlinlang.org"
                        name="Kotlin"
                        description="— это современный, лаконичный и безопасный язык программирования от JetBrains, работающий на JVM и полностью совместимый с Java."
                        image="kotlin.svg"
                    />
                    <Technology
                        link="https://rust-lang.org"
                        name="Rust"
                        description="— это язык системного программирования с высокой производительностью, безопасностью памяти и параллелизмом без гонок данных."
                        image="rust.svg"
                    />
                    <Technology
                        link="https://git-scm.com"
                        name="Git"
                        description="— это распределённая система контроля версий для отслеживания изменений в коде. Быстрая, гибкая и популярная в разработке."
                        image="git.svg"
                    />
                    <Technology
                        link="https://kafka.apache.org"
                        name="Kafka"
                        description="— это распределённый потоковый брокер сообщений. Хранит данные в топиках, масштабируется, обрабатывает миллионы событий в реальном времени."
                        image="kafka.svg"
                    />
                </div>
            </div>
        </div>
    )
}
