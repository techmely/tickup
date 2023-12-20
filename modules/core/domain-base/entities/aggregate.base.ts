import type { Emitter } from "mitt";
import type { LoggerPort } from "modules/core/infra-base/logger/logger.port";
import { DomainEvent } from "../events/domain-event.base";
import type { EmitDomainEvents } from "../events/domain-event.types";
import { Entity } from "./entity.base";

export abstract class AggregateRoot<Props> extends Entity<Props> {
  #domainEvents: DomainEvent[] = [];

  get domainEvents() {
    return this.#domainEvents;
  }

  set domainEvents(domainEvents: DomainEvent[]) {
    this.#domainEvents = domainEvents;
  }

  protected addEvent(domainEvent: DomainEvent | DomainEvent[]): void {
    if (Array.isArray(domainEvent)) {
      this.domainEvents = [...this.domainEvents, ...domainEvent];
    } else {
      this.domainEvents.push(domainEvent);
    }
  }

  clearEvents(): void {
    this.domainEvents = [];
  }

  /**
   * TODO: define logger port here
   */
  async publishEvents(logger: LoggerPort, emitter: Emitter<EmitDomainEvents>) {
    const promiseEvents = this.domainEvents.map((event) => {
      logger.debug(
        `[RequestID] "${event.constructor.name}" event published for aggregate ${this.constructor.name} : ${this.id}`,
      );
      return emitter.emitAsync(event.constructor.name, event);
    });
    for await (const event of promiseEvents) {
      event;
    }
    this.clearEvents();
  }
}
