import { getDetalleById } from "./actions";

export default {
    getDetalleIngreso: async url => {
        return await axios.get(url);
    },
    getDetalleById: async (url, id) => {
        return await axios.get(`${url}/${id}`);
    }
};
