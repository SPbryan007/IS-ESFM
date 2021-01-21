import { router } from "../../routes";
const state = {
    error: false,
    loading: false,
    disabled: false,
    user: null,
    data: { username: "", password: "" }
};
const getters = {
    getDataLogin: state => {
        return state.data;
    },
    getUserLogged: state => {
        return state.user;
    }
};
const mutations = {
    init(state) {
        state.data.username = "";
        state.data.password = "";
        state.disabled = false;
    },
    disabled(state) {
        state.disabled = !state.disabled;
    },
    logout(state) {
        state.user = null;
    }
};
const actions = {
    login: ({ commit, state, getters }, message) => {
        state.error = false;
        if (state.data.username && state.data.password) {
            commit("disabled");
            state.loading = true;
            axios
                .post("/auth/login", state.data)
                .then(response => {
                    state.user = response.data;
                    state.loading = false;
                    router.push({name:'dashboard'});
                    message.success("Ha iniciado la sesion correctamente");
                })
                .catch(err => {
                    message.error( "Datos incorrectos, Por favor introduzca sus datos nuevamente");
                    commit("disabled");
                    state.loading = false;
                    state.error = true;
                    console.log(err);
                });
        }
    },
    logout: ({ commit, state, getters }) => {
        axios
            .post("/auth/logout")
            .then((resp)=> {
                commit("logout");
                router.push("/login");
            })
            .catch((err )=> {
                console.log(err);
            });
    },
    getUser: ({state}) => {
        axios
            .get("/auth/getUserLogged")
            .then(response => {
                    state.user = response.data
            })
            .catch(err => {
                let ok = confirm('Su sesión ha expirado');
                router.push({name:'login'});
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
