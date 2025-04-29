import {Gender} from './Gender';
import {ApplicationRole} from './ApplicationRole';
import {UserSettings} from './UserSettings';
import {DemographicUserInformation} from './DemographicUserInformation';
import {UserStatus} from './UserStatus';

export class User {
  id: string | undefined = undefined;
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  lastLogin: Date = new Date();

  gender: Gender = Gender.MALE;
  roles: ApplicationRole[] = [];
  settings: UserSettings = new UserSettings();
  demographicUserInformation: DemographicUserInformation = new DemographicUserInformation();
  status: UserStatus = UserStatus.ACTIVE;
}
