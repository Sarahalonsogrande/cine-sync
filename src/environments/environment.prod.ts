import { secrets } from "./secrets";

export const environment = {
  production: true,
  omdbApiKey: secrets.omdbApiKey,
  firebase: secrets.firebase
};
