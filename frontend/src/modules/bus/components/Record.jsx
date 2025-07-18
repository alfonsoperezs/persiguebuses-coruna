import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Error, Loading} from '../../common';
import backend from "../../../backend";
import Table from 'react-bootstrap/Table';
import {FormattedMessage} from 'react-intl';

const Record = () => {
    const [record, setRecord] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        backend.buses.getBusRecord(id).then(data =>{
            setRecord(data.record);
            setLoading(false);
        }).catch(() => {
            // En caso de fallo de red o error inesperado
            setRecord([]);
            setLoading(false);    
        });
    }, []);

    if (loading){
        return(
            <Loading type='loading'/>
        )
    }

    if (!record || record.length === 0) {
        return <Error type='record' />;
    }
    
    if (record.error){
        return(
            <Error type='position'/>
        )
    } else {
        return(
            <Table variant='dark'>
                <thead>
                    <tr>
                        <th style={{ width: '50%' }} scope='col' className='text-center'><FormattedMessage id='persiguebuses.bus.line'/></th>
                        <th style={{ width: '50%' }} scope='col' className='text-center'><FormattedMessage id='persiguebuses.bus.detail.record.last'/></th>
                    </tr>
                </thead>
                <tbody>
                    {record.map((item) => (
                        <tr key={item.line_name}>
                            <td className='text-center'>{item.line_name}</td>
                            <td className='text-center'>{item.last_time_worked}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default Record;