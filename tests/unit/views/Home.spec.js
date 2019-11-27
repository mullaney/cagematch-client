import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders h1 header", () => {
    const wrapper = shallowMount(Home);
    const h1 = wrapper.find("h1");
    expect(h1.isVisible()).to.eq(true);
    expect(h1.text()).to.include("Cage Match");
  });
});
