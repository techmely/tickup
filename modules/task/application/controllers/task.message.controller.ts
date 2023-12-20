import type { ApplicationEventHandler } from "modules/core/application/event-handler/application-event.handler";
import type { UserCreatedDomainEvent } from "modules/user/user/domain/events/user-created.domain-event";

export class AfterUserCreated implements ApplicationEventHandler<UserCreatedDomainEvent> {
  handle(domainEvent: UserCreatedDomainEvent): Promise<void> | Promise<unknown> {
    throw new Error("Method not implemented.");
  }
}
