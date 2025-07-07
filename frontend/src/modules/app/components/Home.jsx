import { FormattedMessage } from 'react-intl';

const Home = () => {
    return(
        <div className="m-height d-flex flex-column align-items-center justify-content-center">
            <h2 className="mb-3 text-white text-center"><FormattedMessage id="persiguebuses.home.text"/></h2>
            <a className="btn btn-outline-danger mb-3" href="/bus" role="button"><FormattedMessage id="persiguebuses.home.button"/></a>
            <img src="/home-image.jpg" alt="Tranvias Coruña Bus" width="45%" height="35%"/>
        </div>
        
    );
};

export default Home;