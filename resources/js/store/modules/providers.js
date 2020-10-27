export default {
    getItems: async url => {
        return await axios.get(url);
    },
    register: async (url, data) => {
        return await axios.post(url, data);
    },
    delete: async url => {
        return await axios.delete(url);
    },
    update: async (url, data) => {
        return await axios.put(url, data);
    },
    getById: async (url, id) => {
        return await axios.get(`${url}${id}`);
    }
    // buyProducts(products, cb, errorCb) {
    //     setTimeout(() => {
    //         // simulate random checkout failure.
    //         Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    //     }, 100);
    // }
};
