import {Route, Routes} from 'react-router-dom';
import { ActiveBus, BusDetails } from '../../bus';
import Home from './Home';
import Terms from './Terms';
import Privacy from './Privacy';

const Body = () => {
    return(
        <main className='mt-3 mb-3'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bus' element={<ActiveBus/>}/>
                <Route path='/details/:id' element={<BusDetails/>}/>
                <Route path='/terms' element={<Terms/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
            </Routes>
        </main>
    )
}

export default Body;