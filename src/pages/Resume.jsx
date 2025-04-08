import { ExternalLinkIcon } from '@/components/ExternalLinkIcon'
import clsx from 'clsx'

const Skill = ({ name, icon, description, link }) => {
    return (
        <div className="flex flex-col">
            <div
                className="group cursor-pointer flex gap-2 items-center"
                onClick={() => window.open(link, '_blank')}
            >
                <img src={`/assets/images/${icon}`} alt="" className="w-16 h-16" />
                <span className="font-bold text-3xl">{name}</span>

                <svg
                    className="w-4 h-4 fill-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    width="500px"
                    height="500px"
                >
                    <path d="M 443.3 56.684 L 443.3 354.286 C 443.334 369.555 426.863 379.144 413.604 371.566 C 408.507 368.632 404.983 363.605 403.944 357.846 L 403.636 354.286 L 403.588 129.055 C 403.588 127.578 402.004 126.621 400.69 127.353 C 400.572 127.424 400.421 127.542 400.314 127.66 L 90.565 437.482 C 83.798 444.279 73.133 445.251 65.246 439.798 L 62.536 437.482 C 55.736 430.717 54.767 420.05 60.22 412.163 L 62.536 409.419 L 372.204 99.67 C 373.279 98.629 372.819 96.843 371.387 96.43 C 371.232 96.382 371.044 96.346 370.842 96.346 L 145.695 96.346 C 136.104 96.346 127.91 89.545 126.169 80.11 L 125.863 76.48 C 125.863 66.734 132.863 58.658 142.098 56.954 L 145.729 56.684 L 443.3 56.684 Z" />
                </svg>
            </div>

            <span className="mt-2 text-left">{description}</span>
        </div>
    )
}

const Block = ({
    title,
    children,
    icon,
    right = false,
    particle = false,
    particle_direction = 'right-bottom',
}) => {
    return (
        <div className="flex gap-5 flex-wrap flex-col md:gap-0 md:grid md:grid-cols-2 mb-32">
            <div
                className={clsx(
                    'flex flex-col justify-center text-center rounded',
                    right ? 'md:order-2 md:text-right' : 'md:text-left',
                )}
            >
                <div className="w-full md:max-w-xl flex flex-col flex-wrap mx-auto rounded-2xl py-6 px-4 backdrop-blur-xl relative hover:md:-translate-x-2 hover:md:-translate-y-2 transition-transform md:shadow-2xl">
                    {particle && (
                        <span
                            className={clsx(
                                `none md:block absolute pointer-events-none -z-1 w-30 h-30 bg-accent/30 rounded-full blur-2xl animate-pulse`,
                                particle_direction === 'right-bottom' &&
                                    'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
                                particle_direction === 'left-top' &&
                                    'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
                                particle_direction === 'right-top' &&
                                    'top-0 right-0 translate-x-1/2 -translate-y-1/2',
                            )}
                        ></span>
                    )}

                    <span className="text-3xl font-bold nunito md:text-6xl mx-auto mb-5">
                        {title}
                    </span>

                    <div className="text-md md:text-xl">{children}</div>
                </div>
            </div>
            <div
                className={clsx('flex justify-center items-center min-h-16', right && 'md:order-1')}
            >
                <img
                    src={`/assets/images/${icon}`}
                    alt=""
                    className="w-full max-w-30 md:max-w-64 h-auto hover:scale-105 transition-transform"
                />
            </div>
        </div>
    )
}

export const Resume = () => {
    return (
        <div className="container mx-auto relative my-16">
            <Block
                title="О себе"
                icon="image-1.png"
                particle={true}
                particle_direction="right-bottom"
            >
                <span>
                    Мне 16 лет, и я активно погружаюсь в мир бэкенд-разработки. Люблю создавать
                    логику для приложений, а в свободное время предпочитаю уютные вечера с чашкой
                    чая и интересным проектом.
                </span>
            </Block>

            <Block title="Образование" icon="school.png" right={true}>
                <div className="flex flex-col gap-4">
                    <span>МБОУ СОШ г. Ангарска</span>
                    <span>Учусь в 9 классе.</span>
                    <span>
                        Углублённо изучаю информатику и математику — это помогает в освоении
                        программирования
                    </span>
                </div>
            </Block>

            <Block title="Навыки" icon="rust.svg" particle={true} particle_direction="right-top">
                <div className="flex flex-wrap flex-col gap-16">
                    <Skill
                        link="https://kotlinlang.com"
                        name="Kotlin"
                        icon="kotlin.svg"
                        description="Стараюсь писать чистый и эффективный код для Spring-приложений."
                    />
                    <Skill
                        link="https://java.com"
                        name="Java"
                        icon="java.svg"
                        description="Мой первый язык программирования, с которого началось погружение в разработку."
                    />
                    <Skill
                        link="https://spring.io"
                        name="Spring"
                        icon="springframework.svg"
                        description="Осваиваю создание REST API и работу с базами данных."
                    />
                </div>
            </Block>
        </div>
    )
}
