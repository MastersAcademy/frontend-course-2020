/* eslint-disable import/extensions */
import initListener from './scripts/sendFormListener.js';
import { initMassages } from './scripts/massageContainer.js';
import store from './scripts/state/reducer.js';

initListener();
initMassages(store.getState());
