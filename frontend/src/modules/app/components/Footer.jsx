import Lang from './Lang'

const Footer = () => {
    return(
        <footer>
            <div className="bg-danger d-flex justify-content-center align-items-center gap-3 h-100">
                <p className='m-0'>© 2025 Persiguebuses</p>
                <p className='m-0'> - </p>
                <Lang/>
            </div>
        </footer>
    );
}

export default Footer;