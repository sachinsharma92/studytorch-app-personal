import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import {USER_LOG_OUT} from '../actions/userActions';
import * as UserReducer from './userReducer';

const STORAGE_KEY_ROOT = 'StudyTorchApp';
const STORAGE_PERSIST_PREFIX = 'persist';

const indexPersistConfig = {
  key: STORAGE_KEY_ROOT,
  storage: AsyncStorage,
  whitelist: ['userState'],
};

export interface IAppState {
    userState : UserReducer.IUserState;
}

const AppReducer= combineReducers({
  userState: UserReducer.reduce,
});

const IndexReducer = (state: any, action: any) => {
  if (action.type === USER_LOG_OUT) {
    const clearAsyncStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(
          keys.filter((key: string) =>
            key.startsWith(STORAGE_PERSIST_PREFIX),
          ),
        );
        return AppReducer(undefined, action);
      } catch (error: any) {
        return AppReducer(state, action);
      }
    };
    clearAsyncStorage();
  } else {
    return AppReducer(state, action);
  }
};

export default persistReducer(indexPersistConfig, IndexReducer);
