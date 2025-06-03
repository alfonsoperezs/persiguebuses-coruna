import { FormattedMessage } from 'react-intl';

const Home = () => {
    return(
        <div className="d-flex flex-column align-items-center mt-5">
            <h2 className="mb-3 text-white"><FormattedMessage id="persiguebuses.home.text"/></h2>
            <a className="btn btn-outline-danger mb-3" href="/bus" role="button"><FormattedMessage id="persiguebuses.home.button"/></a>
            <img src="/home-image.jpg" alt="Tranvias Coruña Bus" width="35%" height="25%"/>

        </div>
    );
};

export default Home;