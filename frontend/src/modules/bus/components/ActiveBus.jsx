import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import {FormattedMessage, FormattedDate, FormattedTime } from 'react-intl';
import {useEffect, useState} from 'react';
import backend from '../../../backend';
import { useNavigate } from 'react-router-dom';
import { Loading, RefreshButton } from '../../common';

const ActiveBus = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [buses, setBuses] = useState({});
    const [totalBuses, setTotalBuses] = useState(0);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [reload, setReload] = useState(0);
    const [lastReload, setLastReload] = useState(null);
    const itemsPerPage = 10;

    useEffect(() => {
        const cached = sessionStorage.getItem('buses');
        const cachedTimestamp = sessionStorage.getItem('buses_last_reload');

        if (cached && cachedTimestamp) {
            const data = JSON.parse(cached);
            setBuses(data.buses);
            setTotalBuses(data.total_buses);
            setLastReload(new Date(cachedTimestamp));  // recuperar la fecha
            setLoading(false);
        } else {
            backend.buses.getBuses().then(data => {
                const now = new Date();
                sessionStorage.setItem('buses', JSON.stringify(data));
                sessionStorage.setItem('buses_last_reload', now.toISOString());  // guardar fecha
                setBuses(data.buses);
                setTotalBuses(data.total_buses);
                setError(data.error);
                setLoading(false);
                setLastReload(now);  // actualizar el estado
            });
        }
    }, [reload]);

    const refresh = () => {
        sessionStorage.removeItem('buses');
        setLoading(true);
        setReload(prev => prev + 1);
    }

    const busEntries = Object.entries(buses);
    const totalPages = Math.ceil(busEntries.length / itemsPerPage);
    const currentItems = busEntries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    if(loading){
        return(
            <div className='m-height d-flex align-items-center justify-content-center'>
                <Loading type='bus'/>
            </div>
        )
        
    } else{
        if(totalPages != 0 && error == null){
            return(
                <div className='d-flex align-items-center justify-content-center flex-column m-height gap-3 mx-2'>
                    <h2 className="text-white text-center"><FormattedMessage id="persiguebuses.bus.total" values={{totalBuses}}/></h2>
                    <RefreshButton refreshAction={refresh}/>
                    <p className='p-0 m-0 text-white'>
                        <FormattedMessage id="persiguebuses.common.lastRefresh"/>: <FormattedDate value={lastReload} /> <FormattedTime value={lastReload} />
                    </p>
                    <Table className="container" variant='dark'>
                        <thead>
                            <tr>
                                <th style={{ width: '50%' }} scope='col' className='text-center'><FormattedMessage id='persiguebuses.bus.id'/></th>
                                <th style={{ width: '50%' }} scope='col' className='text-center'><FormattedMessage id='persiguebuses.bus.line'/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(([id, info]) => (
                                <tr key={id} onClick={() => navigate(`/details/${id}?line=${info.line}`)} className='bus-sum'>
                                    <td className='text-center'>{id}</td>
                                    <td className='text-center'>{info.line}</td>
                                </tr>
                            ))}
                            {Array.from({ length: itemsPerPage - currentItems.length }).map((_, idx) => (
                                <tr key={`empty-${idx}`}>
                                    <td colSpan={2}>&nbsp;</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className='container'>
                        <p className='text-white'>
                            <FormattedMessage id='persiguebuses.common.source'/>: <a className='text-decoration-none text-danger' href="https://itranvias.com/">Itranvias</a>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-secondary mx-2"
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <FormattedMessage id="persiguebuses.pagination.previous"/>
                        </button>
                        <span className="align-self-center text-white">
                            <FormattedMessage id="persiguebuses.pagination.page" /> {currentPage} / {totalPages}
                        </span>
                        <button
                            className="btn btn-secondary mx-2"
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            <FormattedMessage id="persiguebuses.pagination.next" />
                        </button>
                    </div>

                    
                </div>
            )
        } else{
            return(
                <div className='d-flex align-items-center justify-content-center flex-column m-height gap-3 mx-2'>
                    <Alert className='container justify-content-center my-4' variant='light'><FormattedMessage id='persiguebuses.bus.nobus' /></Alert>
                    <RefreshButton refreshAction={refresh}/>
                </div>
            )
        }

    }

    

    
};

export default ActiveBus;