const Skill = ({ icon, children: name }) => {
    return (
        <div className="shadow-md rounded-xl p-4 flex items-center flex-col gap-4 backdrop-blur h-fit">
            <img src={`/assets/images/${icon}`} className="w-24" />
            <span className="font-bold break-words max-w-min text-center">{name}</span>
        </div>
    )
}

const SkillGroup = ({ name, children: skills }) => {
    return (
        <div className="max-w-150 mx-auto mt-8 flex flex-col items-center">
            <span className="text-3xl font-bold nunito p-2 backdrop-blur">{name}</span>
            <div className="flex gap-4 flex-wrap justify-center">{skills}</div>
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

            <SkillGroup name="Языки программирования">
                <Skill icon="java.svg">Java</Skill>
                <Skill icon="kotlin.svg">Kotlin</Skill>
                <Skill icon="rust.svg">Rust</Skill>
            </SkillGroup>

            <SkillGroup name="Фреймворки и библиотеки">
                <Skill icon="springframework.svg">Spring Framework</Skill>
                <Skill icon="springframework.svg">Spring Boot</Skill>
                <Skill icon="springframework.svg">Spring Data</Skill>
                <Skill icon="springframework.svg">Spring Web</Skill>
            </SkillGroup>

            <SkillGroup name="Базы данных">
                <Skill icon="postgresql.svg">PostgreSQL</Skill>
            </SkillGroup>

            <SkillGroup name="Инструменты и технологии">
                <Skill icon="git.svg">Git</Skill>
                <Skill icon="github.svg">GitHub</Skill>
                <Skill icon="maven.svg">Maven</Skill>
                <Skill icon="gradle.svg">Gradle</Skill>
                <Skill icon="swagger.svg">Swagger</Skill>
            </SkillGroup>

            <SkillGroup name="CI/CD">
                <Skill icon="github.svg">GitHub Actions</Skill>
            </SkillGroup>
        </div>
    )
}
