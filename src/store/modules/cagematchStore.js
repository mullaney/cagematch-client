import axios from "axios";
import { apiBaseUrl } from "../helpers/apiConnect";

export default {
  state: {
    cagematch: {
      id: 0,
      title: "",
      description: "",
      loading: false
    }
  },
  getters: {
    cagematch: state => state.cagematch
  },
  mutations: {
    setCagematch: (state, fetchedCagematch) => {
      state.cagematch.id = fetchedCagematch.id;
      state.cagematch.title = fetchedCagematch.title;
      state.cagematch.description = fetchedCagematch.description;
    },
    setLoading: (state, loading) => (state.cagematch.loading = loading)
  },
  actions: {
    async fetchCagematch({ commit }) {
      commit("setLoading", true);
      const response = await axios.get(`${apiBaseUrl()}/api/v1/cagematches/1`);

      commit("setCagematch", response.data.cagematch);
      commit("setLoading", false);
    }
  }
};
