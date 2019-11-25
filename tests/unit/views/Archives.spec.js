import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Archives from "@/views/Archives.vue";

describe("Archives.vue", () => {
  it("renders h1 header", () => {
    const wrapper = shallowMount(Archives);
    const h1 = wrapper.find("h1");
    expect(h1.isVisible()).to.eq(true);
    expect(h1.text()).to.include("Archives");
  });
});
