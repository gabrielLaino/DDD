import { randomUUID } from "node:crypto";
import { Slug } from "./values-objects/slug";

interface QuestionProps {
  title: string, 
  content: string,
  authorId: string,
  sub: Slug,
}

export class Question {
  public title: string;
  public sub: Slug;
  public content: string;
  public id: string;
  public authorId: string

  constructor(
    props: QuestionProps,
    id?: string,
  ) {
    this.title = props.title;
    this.sub = props.sub;
    this.content = props.content;
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
} 