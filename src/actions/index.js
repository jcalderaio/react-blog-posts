import axios from 'axios';
import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from './types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=johncalderaio1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  
  /* 
  ****** Redux promise ******* - Redux Promise sees the incoming action. It looks specifically at 
  the payload property. If the payload is a promise, Redux-Promise stops the action entirely. Then, 
  once the request finishes, it dispatches a new action of the same type, but with the payload of 
  the resolved request. So, Redux-Promise stops the action, waits for the promise to resolve, and 
  sends the resolved request to the reducer as the payload. In other words, Redux-Promise unwraps 
  the promise for us.
  */

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
