import { Slug } from "./values-objects/slug";
import { Entity } from "@/core/entities/entity";

interface QuestionProps {
  title: string, 
  content: string,
  authorId: string,
  sub: Slug,
}

export class Question extends Entity<QuestionProps> {
  constructor(
    props: QuestionProps,
    id?: string,
  ) {
    super(props, id);
  }
} 