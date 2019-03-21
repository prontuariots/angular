export class UserMetadata {

  buildingCompanyId: string;

  name: string;
  register:string;
  picture: string;
  phoneNumber: string;
  groupId: string;
  groupName: string;

  constructor(userMetadata?: any) {

    if(!!userMetadata)
    this.initialize(userMetadata);

  }

  initialize(userMetadata: any) {
    this.buildingCompanyId = userMetadata.buildingCompany;

    this.name = userMetadata.name;
    this.register = userMetadata.register;
    this.picture = userMetadata.picture;
    this.phoneNumber = userMetadata.phoneNumber;
    this.groupId = userMetadata.groupId;
    this.groupName = userMetadata.groupName;
  }
}
