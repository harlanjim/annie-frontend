import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profiles: [],
        profile: null,
        token: localStorage.getItem("token") || ''
    },
    mutations: {
        /*
        newMessage(state, message) {
            state.messages.push(message);
        },
        */
        updateProfile(state, profile) {
            state.profile = profile;
        },
        updateProfiles(state, profiles) {
            state.profiles = profiles;
        },
        auth(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = '';
            localStorage.clear('token');
        }
    },
    actions: {
        
        async getProfiles({commit}) {
            let profiles = (await axios.get("http://localhost:9000/profiles")).data;
            commit("updateProfiles", profiles);
        },
        async getProfile({commit}, id) {
            let profile = axios.get(`http://localhost:9000/profile/${id}`);
            commit("updateProfile", profile);
        },
       /** 
        async newMessage({commit}, messageBody){
            let msg = (await axios.post("http://localhost:3000/messages", {
                message: messageBody,
              })).data;
            commit("newMessage", msg.message);
        },
        */
        async register({ commit }, registerData) {
            let token = (await axios.post("http://localhost:9000/registration", registerData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit("auth", token);
        },
        async login({ commit }, loginData) {
            let token = (await axios.post("http://localhost:9000/authenticate", loginData)).data.jwt;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit("auth", token);
        }

    }
})