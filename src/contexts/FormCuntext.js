import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    
    /** Context API function */
    const handlerSubmit = ({name, email}) => {        
        setName(name);
        setEmail(email);
        console.log("data provider", {name, email});
    }    
   
    return(
        <FormContext.Provider value={ {name, email, submit: handlerSubmit} }>
            { children }
        </FormContext.Provider>
    );
}