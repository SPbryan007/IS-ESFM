export default {
    getItems: async () => {
        return await axios.get("/api/articulo");
    }
    // buyProducts(products, cb, errorCb) {
    //     setTimeout(() => {
    //         // simulate random checkout failure.
    //         Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    //     }, 100);
    // }
};
