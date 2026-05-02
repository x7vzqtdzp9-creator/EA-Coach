export const ENV = {
  cookieSecret: process.env.JWT_SECRET ?? "change_me_in_production",
  databaseUrl: process.env.DATABASE_URL ?? "",
  isProduction: process.env.NODE_ENV === "production",
  adminSetupKey: process.env.ADMIN_SETUP_KEY ?? "",
};
