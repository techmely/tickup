import type { ApplicationEventHandler } from "../../../core/application/event-handler/application-event.handler";
import type { UserCreatedDomainEvent } from "../../../user/user/domain/events/user-created.domain-event";

export class AfterUserCreated implements ApplicationEventHandler<UserCreatedDomainEvent> {
  handle(domainEvent: UserCreatedDomainEvent): Promise<void> | Promise<unknown> {
    throw new Error("Method not implemented.");
  }
}
