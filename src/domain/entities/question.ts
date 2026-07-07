import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Slug } from "./values-objects/slug";
import { Entity } from "@/core/entities/entity";
import { Optional } from "@/@types/opitional";

interface QuestionProps {
  title: string, 
  content: string,
  authorId: UniqueEntityId,
  bestAnswerId?: UniqueEntityId,
  sub: Slug,
  createdAt: Date,
  updatedAt?: Date,
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, "createdAt">, 
    id?: UniqueEntityId,
  ) {
    const question = new Question({
      ...props,
      createdAt: new Date()
    }, id);

    return question;
  }
}