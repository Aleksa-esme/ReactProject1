export const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};
//thunk нужен для перехвата действия, которое не ровняется объекту
//в redax возникает ошибка когда в диспатч передается функция, которая возвращает функцию, для этого нужен thunk