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
        <div className="flex gap-5 flex-wrap flex-col sm:gap-0 sm:grid sm:grid-cols-2 mb-32">
            <div
                className={clsx(
                    'flex flex-col justify-center text-center rounded',
                    right ? 'sm:order-2 sm:text-right' : 'sm:text-left',
                )}
            >
                <div className="w-full md:max-w-xl flex flex-col flex-wrap mx-auto sm:shadow-2xl rounded-2xl py-6 px-4 backdrop-blur-xl relative">
                    {particle && (
                        <span
                            className={clsx(
                                `none md:block absolute -z-1 w-${particle_size} h-${particle_size} bg-accent/30 rounded-full blur-2xl animate-pulse`,
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
                className={clsx('flex justify-center items-center min-h-16', right && 'sm:order-1')}
            >
                <img
                    src={`/assets/images/${icon}`}
                    alt=""
                    className="w-full max-w-20 sm:max-w-32 h-auto"
                />
            </div>
        </div>
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
        </div>
    )
}
