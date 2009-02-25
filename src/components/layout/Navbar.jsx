import clsx from 'clsx'
import { Link, useMatch } from 'react-router-dom'

const NavbarLink = ({ name, url }) => {
    const isActive = useMatch({
        path: url,
    })

    return (
        <Link
            to={url}
            className={clsx(
                'rounded-xl px-2 py-1 transition-colors',
                isActive ? 'bg-accent text-white' : 'hover:text-white hover:bg-accent/75',
            )}
        >
            {name}
        </Link>
    )
}

export const Navbar = () => (
    <main className="container flex justify-center mx-auto backdrop-blur">
        <div className="flex gap-2 my-2 py-1 px-2 rounded-xl shadow-xl">
            <NavbarLink name="Главная" url="/" />
            <NavbarLink name="Навыки" url="/skills" />
            <NavbarLink name="Проекты" url="/projects" />
            <NavbarLink name="Связаться" url="/contact" />
        </div>
    </main>
)
