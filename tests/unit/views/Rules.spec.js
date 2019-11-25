import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Rules from "@/views/Rules.vue";

describe("Rules.vue", () => {
  it("renders h1 header", () => {
    const wrapper = shallowMount(Rules);
    const h1 = wrapper.find("h1");
    expect(h1.isVisible()).to.eq(true);
    expect(h1.text()).to.include("Rules");
  });
});
