import {FormattedMessage} from 'react-intl';
import { useParams } from 'react-router-dom';
import Details from './Details';
import Map from './Map';
import {BackButton} from '../../common'

const BusDetails = () => {
    const {id} = useParams();

    return(
        <div className='d-flex justify-content-center align-items-center m-height'>
            <div className='w-100'>
                <h2 className='text-white d-flex justify-content-center mb-3'><FormattedMessage id="persiguebuses.bus.detail.header" values={{id}}/></h2>
                <div className='container pt-3'>
                    <div className='row flex-column flex-md-row'>
                        <div className='col d-flex justify-content-center align-items-center mb-3 mb-md-0'>
                            <Details/>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <Map/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <BackButton/>
                </div>
            </div>
        </div>
    )

}

export default BusDetails;