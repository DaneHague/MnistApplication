 import { take, call, put, select } from 'redux-saga/effects';
 import { takeLatest } from 'redux-saga';

 import {
  SEND_MNIST_PARAMS_TO_API
} from './constants';


export function* fetchUser() {
  // Send some data to api
  var x = fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(response => response.json());
  
  // Return Data using an action that needs to be implemented, needs to wait for mnist application to finish
  console.log(x);
}


// Individual exports for testing
export default function* mnistPage() {
  yield* takeLatest(SEND_MNIST_PARAMS_TO_API, fetchUser)
}