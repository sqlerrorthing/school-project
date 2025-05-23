const ContactMethod = ({ icon, name, username, link = null }) => {
    return (
        <div className="rounded backdrop-blur-xl w-full h-50 shadow-xl flex gap-4 flex-col justify-center items-center">
            <img className="w-12 h-12" src={`/assets/images/${icon}`} alt="" />
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-xl font-bold">{name}</span>
                {link ? (
                    <a href={link} className="text-accent cursor-pointer" target="_blank">
                        {username}
                    </a>
                ) : (
                    <span>{username}</span>
                )}
            </div>
        </div>
    )
}

export const Contact = () => {
    return (
        <div className="container mx-auto relative my-16">
            <div className="mx-auto flex flex-col items-center backdrop-blur">
                <span className="text-6xl font-bold nunito text-center">Связаться со мной</span>
                <div className="w-full max-w-2xl mt-4 text-center">
                    Если вы хотите связаться со мной, вы можете найти мои контактные
                    данные/социальные сети ниже.
                </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-full mt-5">
                <ContactMethod icon="discord.svg" name="Discord" username="@sqlerrorthing" />
                <ContactMethod
                    icon="telegram.svg"
                    name="Telegram"
                    username="@sqlerrorph"
                    link="https://t.me/sqlerrorph"
                />
                <ContactMethod icon="instagram.svg" name="Instagram" username="@sqlerrorthing" />
                <ContactMethod
                    icon="linkedin.svg"
                    name="LinkedIn"
                    username="sql errorthing"
                    link="https://linkedin.com/in/dan-tarr"
                />
                <ContactMethod
                    icon="github.svg"
                    name="GitHub"
                    username="@sqlerrorthing"
                    link="https://github.com/sqlerrorthing"
                />
                <ContactMethod icon="email.svg" name="Email" username="sqlerrorthing@gmail.com" />
            </div>
        </div>
    )
}
