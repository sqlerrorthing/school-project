import clsx from 'clsx'

const Skill = ({ name, icon, description }) => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <img src={`/assets/images/${icon}`} alt="" className="w-16 h-16" />
                <span className="font-bold text-3xl">{name}</span>
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
    particle_size = 30,
}) => {
    return (
        <div className="flex gap-5 flex-wrap flex-col md:gap-0 md:grid md:grid-cols-2 mb-32">
            <div
                className={clsx(
                    'flex flex-col justify-center text-center rounded',
                    right ? 'md:order-2 md:text-right' : 'md:text-left',
                )}
            >
                <div className="w-full md:max-w-xl flex flex-col flex-wrap mx-auto rounded-2xl py-6 px-4 backdrop-blur-xl relative hover:md:-translate-x-4 hover:md:-translate-y-4 transition-transform md:shadow-2xl">
                    {particle && (
                        <span
                            className={clsx(
                                `none md:block absolute pointer-events-none -z-1 w-${particle_size} h-${particle_size} bg-accent/30 rounded-full blur-2xl animate-pulse`,
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
                    className="w-full max-w-20 md:max-w-32 h-auto"
                />
            </div>
        </div>
    )
}

const ContactButton = ({ icon, name, url }) => {
    return (
        <button
            className="group flex w-full md:w-100 px-6 py-4 items-center rounded-xl backdrop-blur-xl shadow-2xl cursor-pointer hover:shadow-accent/30 transition-shadow duration-500"
            onClick={() => window.open(url, '_blank')}
        >
            <img className="w-8 h-auto mr-6" src={`/assets/images/${icon}`} alt="" />
            <span className="text-xl font-normal">{name}</span>
            <svg
                className="w-4 h-4 fill-black ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                width="500px"
                height="500px"
            >
                <path d="M 443.3 56.684 L 443.3 354.286 C 443.334 369.555 426.863 379.144 413.604 371.566 C 408.507 368.632 404.983 363.605 403.944 357.846 L 403.636 354.286 L 403.588 129.055 C 403.588 127.578 402.004 126.621 400.69 127.353 C 400.572 127.424 400.421 127.542 400.314 127.66 L 90.565 437.482 C 83.798 444.279 73.133 445.251 65.246 439.798 L 62.536 437.482 C 55.736 430.717 54.767 420.05 60.22 412.163 L 62.536 409.419 L 372.204 99.67 C 373.279 98.629 372.819 96.843 371.387 96.43 C 371.232 96.382 371.044 96.346 370.842 96.346 L 145.695 96.346 C 136.104 96.346 127.91 89.545 126.169 80.11 L 125.863 76.48 C 125.863 66.734 132.863 58.658 142.098 56.954 L 145.729 56.684 L 443.3 56.684 Z" />
            </svg>
        </button>
    )
}

export const Resume = () => {
    return (
        <div className="container mx-auto relative my-16">
            <Block title="О себе" icon="java.svg" particle={true} particle_direction="right-bottom">
                <span>
                    Мне 16 лет, и я активно погружаюсь в мир бэкенд-разработки. Люблю создавать
                    логику для приложений, а в свободное время предпочитаю уютные вечера с чашкой
                    чая и интересным проектом.
                </span>
            </Block>

            <Block title="Образование" icon="kafka.svg" right={true}>
                <div className="flex flex-col gap-4">
                    <span>МБОУ СОШ г. Ангарска</span>
                    <span>Учусь в 9 классе.</span>
                    <span>
                        Углублённо изучаю информатику и математику — это помогает в освоении
                        программирования
                    </span>
                    <span>Планирую уйти после 9 в техникум по IT специальности.</span>
                </div>
            </Block>

            <Block
                title="Навыки"
                icon="rust.svg"
                particle={true}
                particle_direction="right-top"
                particle_size={20}
            >
                <div className="flex flex-wrap flex-col gap-16">
                    <Skill
                        name="Kotlin"
                        icon="kotlin.svg"
                        description="Стараюсь писать чистый и эффективный код для Spring-приложений."
                    />
                    <Skill
                        name="Java"
                        icon="java.svg"
                        description="Мой первый язык программирования, с которого началось погружение в разработку."
                    />
                    <Skill
                        name="Spring"
                        icon="springframework.svg"
                        description="Осваиваю создание REST API и работу с базами данных."
                    />
                </div>
            </Block>

            <div className="text-3xl font-bold nunito md:text-6xl mx-auto flex flex-col items-center">
                <span>Связаться со мной</span>

                <div className="flex gap-8 flex-col mt-8">
                    <ContactButton
                        name="Discord"
                        url="https://discord.com/users/1149990070682660944"
                        icon={'discord.svg'}
                    />
                    <ContactButton
                        name="Telegram"
                        url="https://t.me/@sqlerrorph"
                        icon={'telegram.svg'}
                    />
                    <ContactButton
                        name="Instagram"
                        url="https://t.me/@sqlerrorph"
                        icon={'instagram.svg'}
                    />
                    <ContactButton
                        name="LinkedIn"
                        url="https://linked.in/@sqlerrorph"
                        icon={'linkedin.svg'}
                    />
                </div>
            </div>
        </div>
    )
}
