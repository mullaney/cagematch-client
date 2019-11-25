import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Rankings from "@/views/Rankings.vue";

describe("Rankings.vue", () => {
  it("renders h1 header", () => {
    const wrapper = shallowMount(Rankings);
    const h1 = wrapper.find("h1");
    expect(h1.isVisible()).to.eq(true);
    expect(h1.text()).to.include("Rankings");
  });
});
