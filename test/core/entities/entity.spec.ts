import { Entity } from '@/core/entities/entity';
import { expect, test, describe } from 'vitest';

describe("Entity core class", () => {
  test("Create a entity", () => {
    const entity = new Entity({});

    expect(entity.id).not.toBeNull();
  });
});