const Technology = ({ name, description, image }) => {
	return (
		<div className="flex shadow-xl transition-shadow hover:shadow-accent/50 rounded-xl p-2 gap-2 w-full backdrop-blur">
			<img src={`/assets/images/${image}`} className="w-12 h-12" alt="" />
			<div className="flex text-left flex-wrap flex-col">
				<span className="font-bold nunito text-xl h-12 flex items-center">{name}</span>
				<span>{description}</span>
			</div>
		</div>
	)
}

export const Index = () => {
	return (
		<div className="container mx-auto relative mt-16">
			<div className="mx-auto flex flex-col items-center backdrop-blur">
				<span className="text-6xl font-bold nunito text-center">Привет, я Рома👋</span>
				<div className="w-full max-w-2xl mt-4 text-center">
					Бэкенд-разработчик. Пишу на Java и Kotlin, работаю с Spring
					Boot — создаю API, настраиваю логику серверов, учусь оптимизировать
					даже скучные задачи. Мой код не претендует на гениальность, зато
					стабильно работает и решает проблемы.
				</div>
			</div>
			<div className="mx-auto flex flex-col items-center mt-32 text-center">
				<span className="text-2xl font-bold nunito backdrop-blur">
					Технологии которыми я интересуюсь ⚒️
				</span>
				<div className="mt-4 flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 flex-col justify-center">
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
					<Technology
						name="Rust"
						description="- это язык системного программирования с высокой производительностью, безопасностью памяти и параллелизмом без гонок данных.."
						image="rust.svg"
					/>
				</div>
			</div>
		</div>
	)
}
