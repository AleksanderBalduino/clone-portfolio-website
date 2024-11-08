/* Imports - Components */
import { NavbarLink } from "../Links/NavbarLink.tsx";

export function Navbar() {
    return (
        <nav className="flex items-center">
            <ul className="grid grid-cols-3 gap-x-8">
                <NavbarLink path="/clone-portfolio-website/" title="home" />
                <NavbarLink path="/clone-portfolio-website/projetos" title="projetos" />
                <NavbarLink path="/clone-portfolio-website/contato" title="contato" />
            </ul>
        </nav>
    );
}