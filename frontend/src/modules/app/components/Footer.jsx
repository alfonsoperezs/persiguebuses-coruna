import Lang from './Lang'

const Footer = () => {
    return(
        <footer>
            <div className="p-2 bg-danger d-flex justify-content-center gap-3">
                <p>© 2025 Persiguebuses</p>
                <p> - </p>
                <Lang/>
            </div>
        </footer>
    );
}

export default Footer;