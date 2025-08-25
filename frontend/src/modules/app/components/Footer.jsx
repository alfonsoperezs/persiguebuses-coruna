import { FormattedMessage } from 'react-intl';
import Lang from './Lang';

const Footer = () => {
    return(
        <footer>
            <div className="bg-danger d-flex justify-content-center align-items-center gap-3 h-100">
                <p className='m-0 text-black'>© 2025 Persiguebuses</p>
                <p className='m-0 text-black'> - </p>
                <Lang/>
                <p className='m-0 text-black'> - </p>
                <a href="/terms" className="text-decoration-none text-dark">
                    <FormattedMessage id='persiguebuses.footer.users'/>
                </a>
                <p className='m-0 text-black'> - </p>
                <a href="/privacy" className="text-decoration-none text-dark">
                    <FormattedMessage id='persiguebuses.footer.privacy'/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;