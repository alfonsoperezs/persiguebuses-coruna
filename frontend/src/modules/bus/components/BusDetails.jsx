import {FormattedMessage} from 'react-intl';
import {useEffect, useState} from 'react';
import backend from '../../../backend';
import { useParams } from 'react-router-dom';
import { Map } from '../../common';

const BusDetails = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [busDetails, setBusDetails] = useState({});

    useEffect(() => {
        backend.buses.getBusDetails(id).then(data => {
            setBusDetails(data);
            setLoading(false);

        });
    }, []);

    return(
        <div>
            <h2 className='mb-3 text-white d-flex justify-content-center my-4'><FormattedMessage id="persiguebuses.bus.detail.header" values={{id}}/></h2>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <dl className='w-50'>
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
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <Map/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BusDetails;
/*

        <div className='justify-content-center'>
            
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 align-items-center'>
                <div className='col'>
                    <dl className='row dl-horizontal w-50 px-5 mx-5'>
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

                </div>
                <div className='col'>
                    <Map/>
                </div>
            </div>
            
        </div>


*/