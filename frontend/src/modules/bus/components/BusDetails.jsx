import {FormattedMessage} from 'react-intl';
import { useParams } from 'react-router-dom';
import {useState} from 'react';
import Details from './Details';
import Map from './Map';
import Record from './Record';
import {BackButton, Loading} from '../../common';

const BusDetails = () => {
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);

    const {id} = useParams();


    const loading = loading1 || loading2 || loading3;

    return (
        <div className='d-flex justify-content-center align-items-center m-height'>
            <div className='w-100'>
                <h2 className='text-white d-flex justify-content-center mb-3'>
                    <FormattedMessage id="persiguebuses.bus.detail.header" values={{ id }} />
                </h2>

                {loading && (
                    <div className="d-flex justify-content-center">
                        <Loading type='loading' />
                    </div>
                )}

                <div className={`container pt-3 ${loading ? 'd-none' : ''}`}>
                    <div className='row flex-column flex-md-row'>
                        <div className='col-md-6 d-flex flex-column'>
                            <div className='mb-3 d-flex justify-content-center'>
                                <Details setLoading={setLoading1} />
                            </div>
                            <div className='mb-3'>
                                <Record setLoading={setLoading2} />
                            </div>
                        </div>
                        <div className='col d-flex flex-column align-items-center justify-content-center'>
                            <Map setLoading={setLoading3} />
                            <div className='d-flex justify-content-center mt-3'>
                                <p className='text-white'>
                                    <FormattedMessage id='persiguebuses.common.source'/>: <a className='text-decoration-none text-danger' href="https://itranvias.com/">Itranvias</a>
                                </p>
                            </div>                            
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <BackButton />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default BusDetails;