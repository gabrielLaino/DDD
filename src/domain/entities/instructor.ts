import { randomUUID } from 'node:crypto';

interface InstructorProps {
  name: string;
}

export class Instructor {
  public name: string;
  public id: string;

  constructor(props: InstructorProps, id?: string) {
    this.name = props.name;
    this.id = id ?? randomUUID()
  }
}