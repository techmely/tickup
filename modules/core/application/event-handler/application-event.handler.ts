import type { DomainEvent } from "../../domain/events/domain-event.base";

export interface ApplicationEventHandler<IDomainEvent extends DomainEvent, Response = unknown> {
  handle(domainEvent: IDomainEvent): Promise<Response> | Promise<void>;
}
