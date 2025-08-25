import { secrets } from "./secrets";

export const environment = {
  production: false,
  omdbApiKey: secrets.omdbApiKey,
  firebase: secrets.firebase
};
