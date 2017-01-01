function iButton(){
  store.dispatch({type: 'INCREMENT'});
}

function dButton(){
  store.dispatch({type: 'DECREMENT'});
}

const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(counter);

const render = function(){
  document.getElementById('display').innerHTML = store.getState();
}

store.subscribe(() => {
  render();
})



store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
