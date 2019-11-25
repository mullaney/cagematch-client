import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Scores from "@/views/Scores.vue";

describe("Scores.vue", () => {
  it("renders h1 header", () => {
    const wrapper = shallowMount(Scores);
    const h1 = wrapper.find("h1");
    expect(h1.isVisible()).to.eq(true);
    expect(h1.text()).to.include("Scores");
  });
});
