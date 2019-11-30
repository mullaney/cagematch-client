import Vuex from "vuex";
import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

const store = new Vuex.Store({
  actions: {
    fetchCagematch() {}
  }
});

describe("App.vue", () => {
  it("renders all navigation links", () => {
    const wrapper = shallowMount(App, {
      store,
      localVue
    });
    expect(wrapper.text()).to.include("Home");
    expect(wrapper.text()).to.include("Rankings");
    expect(wrapper.text()).to.include("Scores");
    expect(wrapper.text()).to.include("Rules");
    expect(wrapper.text()).to.include("Records");
    expect(wrapper.text()).to.include("Archives");
    expect(wrapper.text()).to.include("Tickets");
  });
});
