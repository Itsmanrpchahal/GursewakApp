import {combineReducers} from 'redux';
import mode from '@root/store/mode/reducer';
import homeData from '@root/store/home/reducer';
const reducers = combineReducers({
  mode,
  homeData,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
