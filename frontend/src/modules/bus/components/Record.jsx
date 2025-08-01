import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Error, Loading } from '../../common';
import backend from "../../../backend";
import Table from 'react-bootstrap/Table';
import { FormattedMessage } from 'react-intl';

const Record = () => {
  const [record, setRecord] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    backend.buses.getBusRecord(id).then(data => {
      setRecord(data.record);
      setLoading(false);
    }).catch(() => {
      setRecord([]);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading type='loading' />;
  if (!record || record.length === 0) return <Error type='record' />;
  if (record.error) return <Error type='position' />;

  const visibles = showAll ? record : record.slice(0, 3);

  return (
    <>
      <Table variant='dark'>
        <thead>
          <tr>
            <th style={{ width: '50%' }} className='text-center'>
              <FormattedMessage id='persiguebuses.bus.line' />
            </th>
            <th style={{ width: '50%' }} className='text-center'>
              <FormattedMessage id='persiguebuses.bus.detail.record.last' />
            </th>
          </tr>
        </thead>
        <tbody>
          {visibles.map((item) => (
            <tr key={item.line_name}>
              <td className='text-center'>{item.line_name}</td>
              <td className='text-center'>{item.last_time_worked}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {record.length > 3 && !showAll && (
        <div className='text-center mt-2'>
          <button onClick={() => setShowAll(true)} className='btn btn-secondary btn-sm'>
            <FormattedMessage id='persiguebuses.common.showMore'/>
          </button>
        </div>
      )}
    </>
  );
};

export default Record;
