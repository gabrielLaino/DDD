import { UniqueEntityId } from "@/core/entities/unique-entity-id"

describe("Unique Entity Id Core Class", () => {
  test("Create a id withaut a id param, shobe be create a id", () => {
    const id = new UniqueEntityId();

    expect(id.value).not.toBeNull();
  });

  test("Create a id with a id param, shobe be return the same id", () => {
    const id = new UniqueEntityId("1");

    expect(id.value).toEqual("1");
  });
})