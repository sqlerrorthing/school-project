import clsx from "clsx";
import {Link, useMatch} from "react-router-dom";

const NavbarLink = ({name, url}) => {
    const isActive = useMatch({
        path: url,
    });

    return (
        <Link to={url} className={clsx(
            isActive && "bg-accent text-white",
            !isActive && "hover:text-white hover:bg-accent/75",
            "rounded-xl px-2 py-1 transition-colors"
        )}>
            {name}
        </Link>
    )
}

export const Navbar = () => {
    return (
        <main className="container flex justify-center mx-auto">
            <div className="flex gap-2 my-2 py-1 px-2 rounded-xl shadow-xl">
                <NavbarLink name="Главная" url="/" />
                <NavbarLink name="Резюме" url="/resume" />
                <NavbarLink name="Автобиография" url="/autobiography" />
                <NavbarLink name="Дипломы" url="/diplomas" />
            </div>
        </main>
    );
};
