import { createStore } from 'redux';
import demoApp from '../reducers'
export default function configureStore() {
    return createStore(demoApp)
}
