import {UserSettingsLanguage} from './UserSettingsLanguage';

export class UserSettings {
  id: string | undefined;
  language: UserSettingsLanguage = UserSettingsLanguage.EN;
}
