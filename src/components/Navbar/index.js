import Link from "components/Link";
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Context API</h1>
            </section>
            <section>
                <Link href="https://www.linkedin.com/in/katarine-albuquerque/" name="Linkedin" />
                <Link href="https://github.com/katarineBAlbuquerque" name="Github" />
            </section>
        </nav>
    );
}

export default Navbar;