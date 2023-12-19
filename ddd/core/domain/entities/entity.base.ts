import { invariant, isEmpty } from "@techmely/utils";
import type { MarkOptional } from "ts-essentials";
import {
  ArgumentInvalidException,
  ArgumentNotProvidedException,
  ArgumentOutOfRangeException,
} from "../../exceptions/exceptions";
import { convertPropsToObject } from "./helpers/object";
import { UniqueEntityID } from "./unique-entity";

export interface BaseEntityProps {
  id: UniqueEntityID;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEntityProps<T>
  extends MarkOptional<BaseEntityProps, "createdAt" | "updatedAt"> {
  props: T;
}

export abstract class Entity<Props> {
  #id: UniqueEntityID;
  readonly #createdAt: Date;
  readonly #props: Props;
  #updatedAt: Date;

  constructor({ id, props, createdAt, updatedAt }: CreateEntityProps<Props>) {
    this.#id = id;
    this.#validateProps(props);
    const now = new Date();
    this.#createdAt = createdAt || now;
    this.#updatedAt = updatedAt || now;
    this.#props = props;
    this.validate();
  }

  static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  get id(): UniqueEntityID {
    return this.#id;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date {
    return this.#updatedAt;
  }

  getProps(): Props & BaseEntityProps {
    const clone = {
      id: this.id,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
      ...this.#props,
    };
    return Object.freeze(clone);
  }

  /**
   * Convert an Entity and all sub-entities/Value Objects it
   * contains to a plain object with primitive types. Can be
   * useful when logging an entity during testing/debugging
   */
  toObject() {
    const clone = convertPropsToObject(this.getProps());

    const result = {
      id: this.id,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
      ...clone,
    };
    return Object.freeze(result);
  }
  /**
   * Each entity must have some validate/business rules
   * This method is called every time before save this entity to the database
   */
  abstract validate(): void;

  #validateProps(props: Props) {
    const MAX_PROPS = 32;
    invariant(
      !isEmpty(props),
      new ArgumentNotProvidedException("Entity props should not be empty"),
    );
    invariant(
      typeof props === "object",
      new ArgumentInvalidException("Entity props should be an object"),
    );
    invariant(
      Object.keys(props as any).length > MAX_PROPS,
      new ArgumentOutOfRangeException(
        `The entity props count must smaller than ${MAX_PROPS} properties`,
      ),
    );
  }
}
