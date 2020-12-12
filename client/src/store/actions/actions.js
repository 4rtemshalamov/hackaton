export const responseActions = (store, response) => {
    store.setState({response: response });
};

export const loadingActions = (store, status) => {
    store.setState({loading:  status});
};