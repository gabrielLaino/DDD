import { randomUUID } from "node:crypto";

interface StudentProps {
  name: string;
}

export class Student {
  public name: string;
  public id: string;

  constructor(props: StudentProps, id?: string) {
    this.name = props.name;
    this.id = id ?? randomUUID()
  }
}