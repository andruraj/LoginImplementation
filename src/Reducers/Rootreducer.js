import {combineReducers} from 'redux'
import Errorreducer from './Errorreducer'
import Empreducer from './Empreducer'

const Rootreducer=combineReducers({
    errors:Errorreducer,
    emp:Empreducer
})

export default Rootreducer;