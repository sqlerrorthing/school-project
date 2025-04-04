const Technology = ({ name, description, image }) => {
	return (
		<div className="flex shadow-xl rounded-xl p-2 gap-2 w-100">
			<img src={`/assets/images/${image}`} className="w-12 h-12" alt="" />
			<div className="flex flex-wrap flex-col">
				<span className="font-bold text-xl h-12 flex items-center">{name}</span>
				<span>{description}</span>
			</div>
		</div>
	)
}

export const Index = () => {
	return (
		<div className="container mx-auto relative mt-16">
			<div className="mx-auto flex flex-col items-center">
				<span className="text-6xl font-bold nunito">Привет, я Рома👋</span>
				<div className="w-2xl mt-4 text-center">
					16 лет, бэкенд-разработчик. Пишу на Java и Kotlin, работаю с Spring
					Boot — создаю API, настраиваю логику серверов, учусь оптимизировать
					даже скучные задачи. Мой код не претендует на гениальность, зато
					стабильно работает и решает проблемы.
				</div>
			</div>
			<div className="mx-auto flex flex-col items-center mt-32">
				<span className="text-2xl font-bold nunito">
					Технологии которые я изучаю ⚒️
				</span>
				<div className="mt-4 flex gap-4 flex-nowrap flex-row">
					<Technology
						name="Spring Framework"
						description="- это модульный Java-фреймворк для удобного создания enterprise-приложений с DI, AOP, MVC и интеграцией с другими технологиями."
						image="springboot.svg"
					/>
					<Technology
						name="Docker"
						description="- это платформа для развертывания и управления приложениями в контейнерах, которые изолируют ПО со всеми зависимостями, обеспечивая переносимость и быстрый запуск."
						image="docker.svg"
					/>
					<Technology
						name="Kotlin"
						description="- это современный, лаконичный и безопасный язык программирования от JetBrains, работающий на JVM и полностью совместимый с Java."
						image="kotlin.svg"
					/>
				</div>
			</div>
		</div>
	)
}
