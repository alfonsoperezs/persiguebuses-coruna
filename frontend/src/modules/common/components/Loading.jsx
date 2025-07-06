import {FormattedMessage} from 'react-intl';

const Loading = ({type}) => {
    const idMessage = `persiguebuses.loading.${type}`;

    return(
        <div className="d-flex flex-column align-items-center mt-5">
            <h2 className="mb-3 text-white"><FormattedMessage id={idMessage}/></h2>
            <div className="spinner-border text-danger d-flex justify-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;