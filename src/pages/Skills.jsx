const Skill = ({ icon, children: name }) => {
    return (
        <div className="shadow-md rounded-xl p-4 flex items-center flex-col gap-4 backdrop-blur-xl h-fit">
            <img src={`/assets/images/${icon}`} className="w-24 h-24" alt={name} />
            <span className="font-bold break-words max-w-min text-center">{name}</span>
        </div>
    )
}

const SkillGroup = ({ name, description, children: skills }) => {
    return (
        <div className="max-w-150 mx-auto mt-10 flex flex-col items-center">
            <span className="text-3xl font-bold nunito p-2 backdrop-blur">{name}</span>
            <div className="w-full max-w-xl text-center backdrop-blur">{description}</div>
            <div className="mt-4 flex gap-4 flex-wrap justify-center">{skills}</div>
        </div>
    )
}

export const Skills = () => {
    return (
        <div className="container mx-auto relative my-16">
            <div className="mx-auto flex flex-col items-center backdrop-blur">
                <span className="text-6xl font-bold nunito text-center">Навыки</span>
                <div className="w-full max-w-2xl mt-4 text-center">
                    Здесь собраны ключевые технологии и инструменты, с которыми я работаю в
                    повседневной разработке. Мой технологический стек и навыки, накопленные в ходе
                    личной практики.
                </div>
            </div>

            <div>
                <SkillGroup
                    name="Языки программирования"
                    description="Языки, с которыми я знаком и умею работать. Не все из них я знаю идеально, но имею достаточные навыки, чтобы написать рабочий код и решать задачи."
                >
                    <Skill icon="java.svg">Java</Skill>
                    <Skill icon="python.svg">Python</Skill>
                    <Skill icon="javascript.svg">JavaScript</Skill>
                    <Skill icon="typescript.svg">TypeScript</Skill>
                    <Skill icon="kotlin.svg">Kotlin</Skill>
                    <Skill icon="rust.svg">Rust</Skill>
                </SkillGroup>

                <SkillGroup
                    name="Фреймворки и библиотеки"
                    description="Фреймворки и библиотеки, которые я использую в работе или изучаю для улучшения качества и скорости разработки."
                >
                    <Skill icon="springframework.svg">Spring Framework</Skill>
                    <Skill icon="springframework.svg">Spring Boot</Skill>
                    <Skill icon="springframework.svg">Spring Data</Skill>
                    <Skill icon="springframework.svg">Spring Web</Skill>
                </SkillGroup>

                <SkillGroup
                    name="Базы данных"
                    description="Базы данных, с которыми я работал, а также те, в которых я продолжаю углублять свои знания."
                >
                    <Skill icon="postgresql.svg">PostgreSQL</Skill>
                    <Skill icon="sqlite.svg">Sqlite</Skill>
                </SkillGroup>

                <SkillGroup
                    name="Инструменты и технологии"
                    description="Современные инструменты и технологии, которые я использую в повседневной работе или изучаю для улучшения процессов разработки и поддержки."
                >
                    <Skill icon="git.svg">Git</Skill>
                    <Skill icon="github.svg">GitHub</Skill>
                    <Skill icon="maven.svg">Maven</Skill>
                    <Skill icon="gradle.svg">Gradle</Skill>
                    <Skill icon="swagger.svg">Swagger</Skill>
                </SkillGroup>

                <SkillGroup
                    name="CI/CD"
                    description="Опыт работы с инструментами CI/CD и процессы, которые я изучаю для оптимизации разработки и деплоя приложений."
                >
                    <Skill icon="github.svg">GitHub Actions</Skill>
                </SkillGroup>
            </div>
        </div>
    )
}
