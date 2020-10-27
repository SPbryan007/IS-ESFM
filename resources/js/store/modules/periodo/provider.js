export default {
    validateDate: async (url, data) => {
        return await axios.post(url, { inicio: data });
    },
    iniciarPeriodo: async (url, data) => {
        return await axios.post(url, data);
    }
};
