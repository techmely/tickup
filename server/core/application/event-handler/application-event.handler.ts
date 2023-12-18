import type { DomainEvent } from "server/core/domain/events/domain-event.base";

export interface ApplicationEventHandler<IDomainEvent extends DomainEvent, Response> {
  handle(domainEvent: IDomainEvent): Promise<Response> | Promise<void>;
}
