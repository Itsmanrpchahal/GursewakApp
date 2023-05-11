import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHome, mode} from '@root/store';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Object.assign({}, getHome, mode), dispatch);
};
