import './header.css';
import Banner from '../../assets/imgs/nature.jpg';
import { useContext } from 'react';
import { FormContext } from 'contexts/FormCuntext';

const Header = () => {
    
    /** Context API */
    const { name, email } = useContext(FormContext);
 
    return (
        <header>
            <section className="banner">
                <img src={ Banner } alt="Banner" />
            </section>
            <section className="titulo">
                <h2>{name ? name : "Preencha"}</h2> { /** Name attribute */ }
                <h4>{email ? email : "Formulário"}</h4> { /** Email Attribute */ }
            </section>            
        </header>
    );
}

export default Header;