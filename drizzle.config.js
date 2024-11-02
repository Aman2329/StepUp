/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://StepUp_owner:Iz83BmpNFvLl@ep-spring-morning-a5ipqj2l.us-east-2.aws.neon.tech/StepUp?sslmode=require',
    }
};