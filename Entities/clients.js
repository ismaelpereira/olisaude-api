import { Entity } from "../core/domain/Entity";

export class Client extends Entity {
  constructor(props, id) {
    super(props, id);
  }

  static create(props, id) {
    const client = new Challenge(props, id);
    return client;
  }
}
