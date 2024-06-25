import continueWithSocialAuth from "./utils/continue-with-social-auth";

export const continueWithGoogle = () =>
  continueWithSocialAuth("google-oauth2", "google");
export const continueWithFacebook = () =>
  continueWithSocialAuth("facebook", "facebook");

export const API_URL = process.env.NEXT_PUBLIC_APP_API_URL || "http://localhost:8000";
