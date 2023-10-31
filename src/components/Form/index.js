import { useContext, useState } from 'react';
import './form.css';
import { FormContext } from 'contexts/FormCuntext';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    /** Context API function */
    const { submit } = useContext(FormContext);

    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log("component data", {name, email});

        submit({name, email}); // Context API function

        setName("");
        setEmail("");
    }

    return (
        <form onSubmit={ handlerSubmit } method='POST'>
            <div>
                <section>
                    <h3>Formulário</h3>
                </section>            
                <input 
                    type="text"
                    name="name"
                    placeholder="Nome Completo"                
                    value={ name }
                    onChange={ e => setName(e.target.value) } 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail"
                    value={ email }
                    onChange={ e => setEmail(e.target.value) }
                />
                <input type="submit" value="Salvar" />
            </div>            
        </form>
    );
}

export default Form;