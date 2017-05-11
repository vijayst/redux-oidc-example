
const example = () => {
  return new Promise((resolve) => {
    resolve();
  });
}

export default function thunk() {
  return (dispatch) => {
    example()
    .then(() => {
      dispatch({
        type: 'PROMISE_SUCCESS',
        payload: 'Promise worked!'
      });
    })
    .then(() => {
      dispatch({
        type: 'CHAINED_PROMISE_SUCESS',
        payload: 'Chained promise success!'
      });
    });
  }
}
