import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import {FormattedMessage} from 'react-intl';
import {useEffect, useState} from 'react';
import backend from '../../../backend';

const ActiveBus = () => {
    const [buses, setBuses] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        backend.buses.getBuses().then(data => {
            setBuses(data.buses);
        });
    }, []);

    const busEntries = Object.entries(buses);
    const totalPages = Math.ceil(busEntries.length / itemsPerPage);
    const currentItems = busEntries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if(totalPages != 0){
        return(
            <>
            <Table className="container justify-content-center my-4" variant='dark'>
                <thead>
                    <tr>
                        <th scope='col'><FormattedMessage id='persiguebuses.bus.id'/></th>
                        <th scope='col'><FormattedMessage id='persiguebuses.bus.line'/></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(([id, info]) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{info.line}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
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
            </>
        )
    } else{
        return(
            <Alert className='container justify-content-center my-4' variant='light'><FormattedMessage id='persiguebuses.bus.nobus' /></Alert>
        )
    }

    
};

export default ActiveBus;