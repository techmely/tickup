import { AggregateRoot } from "server/core/domain/entities/aggregate.base";
import { UniqueEntityID } from "server/core/domain/entities/unique-entity";
import { UserCreatedDomainEvent } from "../events/user-created.domain-event";
import { CreateUserProps, UserProps, UserRoles, UserStatus } from "./user.types";

export class UserEntity extends AggregateRoot<UserProps> {
  static create(createProps: CreateUserProps) {
    const id = new UniqueEntityID();
    const props: UserProps = { ...createProps, role: UserRoles.MEMBER, status: UserStatus.ACTIVE };
    const user = new UserEntity({ id, props });
    user.addEvent(
      new UserCreatedDomainEvent({
        aggregateId: id,
        ...props,
        ...props.metadata?.raw(),
        ...props.provider?.raw(),
      }),
    );
    return user;
  }

  validate(): void {
    throw new Error("Method not implemented.");
  }
}
