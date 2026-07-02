import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Slug } from "./values-objects/slug";
import { Entity } from "@/core/entities/entity";

interface QuestionProps {
  title: string, 
  content: string,
  authorId: UniqueEntityId,
  bestAnswerId?: UniqueEntityId,
  sub: Slug,
  createdAt: Date,
  updatedAt?: Date,
}

export class Question extends Entity<QuestionProps> {}