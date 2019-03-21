import { UserMetadata } from './user-metadata.model';

export class UserProfile {

  email: string;
  name: string;
  picture: string;
  nickname: string;

  createdDate: Date;
  lastPasswordResetDate: Date;
  emailVerified: boolean;
  updatedDate: Date;

  clientId: string;
  globalClienteId: string;
  userId: string;

  appMetadata: any;
  authorization: any;
  groups: any;
  identities: any;
  permissions: any;
  roles: any;
  userMetadata: UserMetadata;

  constructor(userProfile?: any) {
    this.name = userProfile.name;
    this.email = userProfile.email;
    this.picture = userProfile.picture;
    this.nickname = userProfile.nickname;
    this.userId = userProfile.sub || userProfile.userId;

    this.createdDate = userProfile.created_at;
    this.lastPasswordResetDate = userProfile.last_password_reset;
    this.emailVerified = userProfile.email_verified;
    this.updatedDate = userProfile.updated_at;

    this.clientId = userProfile.clientID;
    this.globalClienteId = userProfile.global_client_id;

    this.roles = userProfile.roles;
    this.groups = userProfile.groups;
    this.identities = userProfile.identities;
    this.permissions = userProfile.permissions;
    this.appMetadata = userProfile.app_metadata;
    this.authorization = userProfile.authorization;

    this.userMetadata = userProfile.user_metadata;
  }
}
