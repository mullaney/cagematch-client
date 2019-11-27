import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

describe("App.vue", () => {
  it("renders all navigation links", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.text()).to.include("Home");
    expect(wrapper.text()).to.include("Rankings");
    expect(wrapper.text()).to.include("Scores");
    expect(wrapper.text()).to.include("Rules");
    expect(wrapper.text()).to.include("Records");
    expect(wrapper.text()).to.include("Archives");
    expect(wrapper.text()).to.include("Tickets");
  });
});
