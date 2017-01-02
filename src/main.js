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

const Counter = function(props){
  return (
    <div>
      {props.value}
    </div>
  );
}

const render = function(){
  ReactDOM.render(
    <Counter 
    value={store.getState()} 
    />,
    document.getElementById('display')
  );
}

store.subscribe(() => {
  render();
})

render();
