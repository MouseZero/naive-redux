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

const Counter = function({value, onIncrement, onDecrement}){
  return (
    <div>
      {value}
      <br />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

const render = function(){
  ReactDOM.render(
    <Counter 
    value={store.getState()} 
    onIncrement={ () =>
      store.dispatch({type: "INCREMENT"})
    }
    onDecrement={ () =>
      store.dispatch({type: "DECREMENT"})
    }
    />,
    document.getElementById('display')
  );
}

store.subscribe(() => {
  render();
})

render();
