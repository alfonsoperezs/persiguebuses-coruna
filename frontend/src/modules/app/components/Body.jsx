import {Route, Routes} from 'react-router-dom';
import { ActiveBus } from '../../bus';
import Home from './Home';

const Body = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bus' element={<ActiveBus/>}/>
            </Routes>
        </div>
    )
}

export default Body;