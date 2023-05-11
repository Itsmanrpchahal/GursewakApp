import {Dispatch} from 'redux';
import {ActionType} from '@root/store/home/actions-types';
import {Action} from '@root/store/home/actions';
import {apiUri} from '@root/service/apiEndPoints';
import service from '@root/service/axios';

/**
 * @param fn
 */
export const getHome = (data: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HOME_INIT,
    });
    try {
      console.log('count ' + JSON.stringify(data));
      const response = await service.get(apiUri.auth.listApi);
      dispatch({
        type: ActionType.HOME_GET_SUCCESS,
        payload: response.data,
      });
      return response;
    } catch (e: any) {
      dispatch({
        type: ActionType.HOME_GET_FAILED,
        payload: 'Something went wrong! Please try again later',
      });
    }
  };
};
