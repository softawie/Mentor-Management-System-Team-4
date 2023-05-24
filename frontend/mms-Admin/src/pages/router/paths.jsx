const Paths = {
  // Common
  home: "/",
  403: "/403",
  systemError: "/systemError",
  pageNotFound: "*",

  // Public
  login: "/login",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",

  // Protected
  profile: "/profile",
  settings: "/settings",
};

export default Paths;

export const publicRoutes = [
  Paths.login,
  Paths.resetPassword,
  Paths.forgotPassword,
];

export const protectedRoutes = [Paths.profile, Paths.settings];

export const commonRoutes = [Paths.home, Paths[403]];
