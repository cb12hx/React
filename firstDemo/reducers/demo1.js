import { DEMO_REQUEST } from '../constants/actionsTypes';
//reducer的作用是执行具体的state操作，返回新的state
export default function login(state = {}, action) {
		
  switch (action.type) {
      case DEMO_REQUEST:
          console.log('state:',state)
          return Object.assign({}, state, { text: action.data, isFetching: false });
      default:
          return {
          	text:'init'
          };
  }

}
