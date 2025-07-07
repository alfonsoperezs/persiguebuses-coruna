import {FormattedMessage} from 'react-intl';
import { useParams } from 'react-router-dom';
import Details from './Details';
import Map from './Map';
import {BackButton} from '../../common'

const BusDetails = () => {
    const {id} = useParams();

    return(
        <div>
            <h2 className='mb-3 text-white d-flex justify-content-center my-4'><FormattedMessage id="persiguebuses.bus.detail.header" values={{id}}/></h2>
            <div className='container pt-5'>
                <div className='row d-none d-md-flex'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <Details/>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <Map/>
                    </div>
                </div>

                <div className='d-md-none'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Details/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Map/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <BackButton/>
            </div>
        </div>
    )

}

export default BusDetails;