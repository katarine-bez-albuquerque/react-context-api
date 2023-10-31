import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Form from 'components/Form';
import { FormProvider } from 'contexts/FormCuntext';

const Home = () => {    
    return(
        <>
            <Navbar />
            { /** Context API */ }
            <FormProvider>
                <Header />
                <Form />
            </FormProvider>
            { /** Fim Context API */ }
            <Footer />
        </>
    );
}

export default Home;