import cagematchStore from "@/store/modules/cagematchStore";
import { expect } from "chai";

describe("cagematchStore", () => {
  describe("state", () => {
    const { cagematch } = cagematchStore.state;

    it("contains a cagematch object", () => {
      expect(cagematch).to.be.an.instanceof(Object);
      expect(typeof cagematch.id).to.eq("number");
      expect(typeof cagematch.title).to.eq("string");
      expect(typeof cagematch.description).to.eq("string");
      expect(cagematch.loading).to.eq(false);
    });
  });

  describe("getters", () => {
    describe("cagematch()", () => {
      it("is a method", () => {
        expect(cagematchStore.getters.cagematch).to.be.an.instanceof(Function);
      });

      it("returns the cagematch object", () => {
        const state = {
          cagematch: {
            id: 99,
            title: "The Big One",
            description: "Some description"
          }
        };

        const cagematch = cagematchStore.getters.cagematch(state);
        expect(cagematch).to.eq(state.cagematch);
      });
    });
  });

  describe("mutations", () => {
    describe("setCagematch", () => {
      it("is a method", () => {
        expect(cagematchStore.mutations.setCagematch).to.be.an.instanceof(
          Function
        );
      });

      it("replaces the cagematch properties in state", () => {
        const state = {
          cagematch: {
            id: 0,
            title: "",
            description: ""
          },
          loading: false
        };

        const fetchedCagematch = {
          id: 1,
          title: "Cagematch Fetched",
          description: "The best of the best"
        };
        cagematchStore.mutations.setCagematch(state, fetchedCagematch);
        expect(state.cagematch.id).to.eq(1);
        expect(state.cagematch.title).to.eq("Cagematch Fetched");
        expect(state.cagematch.description).to.eq("The best of the best");
        expect(state.loading).to.eq(false);
      });
    });
  });
});
