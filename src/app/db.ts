import { drizzle } from "drizzle-orm/libsql";
import { turso } from "@/app/turso";
import * as schema from "@/db/schema";

export const db = drizzle(turso, { schema });