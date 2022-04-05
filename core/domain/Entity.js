import crypto from "crypto";

export class Entity {
  id;
  props;

  constructor(props, id) {
    this.props = props;
    this._id = id;
  }
}
