import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Records from "@/views/Records.vue";

describe("Records.vue", () => {
  it("renders h1 header", () => {
    const wrapper = shallowMount(Records);
    const h1 = wrapper.find("h1");
    expect(h1.isVisible()).to.eq(true);
    expect(h1.text()).to.include("Records");
  });
});
