import {FormattedMessage} from 'react-intl';
import {useEffect, useState} from 'react';
import backend from '../../../backend';
import { useParams } from 'react-router-dom';
import {Error, Loading} from '../../common'

const Details = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [busDetails, setBusDetails] = useState({});

    useEffect(() => {
        backend.buses.getBusDetails(id).then(data => {
            setBusDetails(data);
            setLoading(false);
        });
    }, []);

    if (busDetails.error){
        return(
            <Error type='details'/>
        )
    }    

    if (loading){
        return(
            <div className='my-5'>
                <Loading type='loading'/>
            </div>
        )
    }

    return(
        <dl>
            <dt className='text-white'><FormattedMessage id="persiguebuses.bus.detail.plate"/></dt>
            <dl className='text-white'>{busDetails.number_plate}</dl>
            <dt className='text-white'><FormattedMessage id="persiguebuses.bus.detail.model"/></dt>
            <dl className='text-white'>{busDetails.model}</dl>
            <dt className='text-white'><FormattedMessage id="persiguebuses.bus.detail.type"/></dt>
            <dl className='text-white'>{busDetails.bus_type}</dl>
            <dt className='text-white'><FormattedMessage id="persiguebuses.bus.detail.fuel"/></dt>
            <dl className='text-white'>{busDetails.fuel_type}</dl>
            <dt className='text-white'><FormattedMessage id="persiguebuses.bus.detail.plateDate"/></dt>
            <dl className='text-white'>{busDetails.registration_date}</dl>
            <dt className='text-white'><FormattedMessage id="persiguebuses.bus.detail.doors"/></dt>
            <dl className='text-white'>{busDetails.number_of_doors}</dl>
        </dl>
    )
}

export default Details;