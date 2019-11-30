import Vuex from "vuex";
import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  getters: {
    cagematch() {
      return {
        id: 0,
        title: "Cage Match",
        description: "description",
        loading: false
      };
    }
  }
});

describe("Home.vue", () => {
  it("renders h1 header", () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });
    const h1 = wrapper.find("h1");
    expect(h1.isVisible()).to.eq(true);
    expect(h1.text()).to.include("Cage Match");
  });
});
