import { parse } from "valibot";
import { UniqueEntityID } from "../../../../core/domain/entities/unique-entity";
import type { Mapper } from "../../../../core/infra/mapper.base";
import { UserEntity } from "../../domain/entities/user.entity";
import { type UserModel, userSchema } from "../../domain/repo/user.model";
import { UserMetadata } from "../../domain/value-objects/user-metadata.value-object";
import { UserProvider } from "../../domain/value-objects/user-providers.value-object";

export class UserMapper implements Mapper<UserEntity, UserModel> {
  toPersistence(entity: UserEntity): UserModel {
    const clone = entity.getProps();
    const record: UserModel = {
      id: clone.id.toString(),
      email: clone.email,
      unverifiedEmail: clone.unverifiedEmail,
      isEmailVerified: clone.isEmailVerified,
      nickname: clone.nickname,
      mobile: clone.mobile,
      birthday: clone.birthday,
      name: clone.name,
      avatarUrl: clone.avatarUrl,
      role: clone.role,
      status: clone.status,
      locale: clone.locale,
      gender: clone.gender,
      openPlatform: clone.metadata?.raw()?.openPlatform,
      utmCampaign: clone.metadata?.raw()?.utmCampaign,
      utmMedium: clone.metadata?.raw()?.utmMedium,
      utmSource: clone.metadata?.raw()?.utmSource,
      googleId: clone.provider?.raw()?.googleId,
      githubId: clone.provider?.raw()?.githubId,
      facebookId: clone.provider?.raw()?.facebookId,
      appleId: clone.provider?.raw()?.appleId,
      createdAt: clone.createdAt,
      updatedAt: clone.updatedAt,
    };
    return parse(userSchema, record);
  }
  toDomain(record: UserModel): UserEntity {
    const provider = new UserProvider({
      githubId: record.githubId,
      googleId: record.githubId,
      facebookId: record.githubId,
      appleId: record.githubId,
    });
    const metadata = new UserMetadata({
      openPlatform: record.openPlatform,
      utmCampaign: record.utmCampaign,
      utmMedium: record.utmMedium,
      utmSource: record.utmSource,
    });
    const entity = new UserEntity({
      id: new UniqueEntityID(record.id),
      createdAt: record.createdAt,
      updatedAt: record.createdAt,
      props: {
        email: record.email,
        unverifiedEmail: record.unverifiedEmail,
        isEmailVerified: record.isEmailVerified,
        nickname: record.nickname,
        mobile: record.mobile,
        birthday: record.birthday,
        name: record.name,
        avatarUrl: record.avatarUrl,
        role: record.role,
        status: record.status,
        locale: record.locale,
        gender: record.gender,
        provider,
        metadata,
      },
    });
    return entity;
  }
  toResponse() {}
}
