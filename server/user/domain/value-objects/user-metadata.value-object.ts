import { ValueObject } from "server/core/domain/entities/value-object.base";

export interface UserMetadataVO {
  openPlatform: string;
  utmCampaign?: string;
  utmMedium?: string;
  utmSource?: string;
}

export class UserMetadata extends ValueObject<UserMetadataVO> {
  protected validate(props: UserMetadataVO): void {}
}
