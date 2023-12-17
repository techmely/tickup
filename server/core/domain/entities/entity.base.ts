import type { EntityId } from "@techmely/types";
import { isEmpty } from "@techmely/utils";
import type { MarkOptional } from "ts-essentials";

export interface BaseEntityProps {
  id: EntityId;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEntityProps<T>
  extends MarkOptional<BaseEntityProps, "createdAt" | "updatedAt"> {
  props: T;
}

export abstract class Entity<Props> {
  protected abstract _id: EntityId;
  readonly #createdAt: Date;
  #updatedAt: Date;

  constructor({ id, props, createdAt, updatedAt }: CreateEntityProps<Props>) {
    this.#setId(id);
  }

  #setId(id: EntityId) {
    this._id = id;
  }

  #validateProps(props: Props) {
    const MAX_PROPS = 24;
    if (isEmpty(props)) {
    }
  }
}
