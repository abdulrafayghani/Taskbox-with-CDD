import React from 'react';
import { Provider } from 'react-redux';
import { TaskScreen } from '../components/TaskScreens/TaskScreen';
import { store } from '../store';

export default {
  title: 'Task Screen',
  component: TaskScreen,
  decorators: [(story: any)=> <Provider store={store}>{story()}</Provider>], 

};

export const DefaultScreen = () => {
  return <TaskScreen  />;
};
