import './link.css';

const Link = ({ href, name }) => {
    return(
        <a href={ href } target="_blank" rel="noreferrer">{ name }</a>
    );
}

export default Link;