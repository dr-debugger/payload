import { buildConfig } from "payload/config";
import path from "path";
import dotenv from "dotenv";
import Users from "./collections/Users";

dotenv.config({
  path: path.resolve(__dirname, "./.env"),
});

const PORT = process.env.PORT || 4000;

export default buildConfig({
  serverURL: `${process.env.SERVER_URL}:${PORT}`,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    // Examples
  ],
});
