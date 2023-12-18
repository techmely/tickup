import type { OmitProperties } from "ts-essentials";
import { UserMetadata } from "../value-objects/user-metadata.value-object";
import { UserProvider } from "../value-objects/user-providers.value-object";

export interface UserProps {
  email: string;
  unverifiedEmail: boolean;
  isEmailVerified: boolean;
  nickname: string;
  mobile: string;
  birthday: string;
  name: string;
  locale?: string;
  avatarUrl: string;
  gender?: string;
  metadata?: UserMetadata;
  provider?: UserProvider;
  role: UserRoles;
  status: UserStatus;
}

// Properties that are needed for a user creation
export interface CreateUserProps {
  email: string;
  unverifiedEmail: boolean;
  isEmailVerified: boolean;
  nickname: string;
  mobile: string;
  birthday: string;
  name: string;
  locale?: string;
  avatarUrl: string;
}

export interface IUserCreatedDE extends UserProps {}
export interface IUserUpdatedDE
  extends OmitProperties<Partial<UserProps>, "provider" | "roles" | "status" | "metadata"> {}

export enum UserRoles {
  SUPER_ADMIN = "SUPER_ADMIN",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  GUEST = "GUEST",
}

export enum UserStatus {
  VERIFIED = "VERIFIED",
  BLACKLIST = "BLACKLIST",
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
}
