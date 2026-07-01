import { Slug } from '@/domain/entities/values-objects/slug';
import { expect, test, describe } from 'vitest';

describe("Slug value object", () => {
  test("Crate a Slug with a contructor", () => {
    const slug = new Slug("a-slug")

    expect(slug.value).toEqual("a-slug")
  });

  test("Create a slug with factory method", () => {
    const slug = Slug.createFromText("A Slug");

    expect(slug.value).toEqual("a-slug")
  })
});