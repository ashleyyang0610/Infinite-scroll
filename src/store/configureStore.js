const store = (process.env.NODE_ENV === 'test') ? require('./storeTest').default : require('./storeProd').default;

export default store;
