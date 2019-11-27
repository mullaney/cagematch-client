export default {
  namspaced: true,
  state: {
    cagematch: {
      id: 0,
      title: "",
      description: ""
    },
    loading: false
  },
  getters: {
    cagematch: state => state.cagematch,
    loading: state => state.loading
  },
  mutations: {
    setCagematch: (state, fetchedCagematch) => {
      console.log("fetchedCagematch: ", fetchedCagematch);
      state.cagematch.id = fetchedCagematch.id;
      state.cagematch.title = fetchedCagematch.title;
      state.cagematch.description = fetchedCagematch.description;
    }
  },
  actions: {}
};
