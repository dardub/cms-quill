import { sql } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const orgs = sqliteTable("orgs", {
  id: integer("id").primaryKey(),
  name: text("name"),
  slug: text("slug").unique(),
});

export const roles = sqliteTable("roles", {
    id: integer('id').primaryKey(),
    name: text('name').notNull().unique(),
    createUser: integer('create_user', { mode: "boolean" }),
    createSite: integer('create_site', { mode: "boolean" }),
    manageUser: integer('manage_user', { mode: "boolean" }),
    manageSite: integer('manage_site', { mode: "boolean" }),
    deleteUser: integer('delete_user', { mode: "boolean" }),
    deleteSite: integer('delete_site', { mode: "boolean" }),
});

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  orgId: integer("org_id")
    .references(() => orgs.id)
    .notNull(),
  email: text("email").notNull().unique(),
  password: text("password"),
  githubHandle: text("github_handle").unique(),
  roleId: integer("role_id")
    .references(() => roles.id)
    .notNull(),
});

export const sites = sqliteTable("sites", {
    id: integer("id").primaryKey(),
    orgId: integer("org_id").references(() => orgs.id).notNull(),
    githubRepo: text("github_repo"),
    slug: text("slug").unique().notNull(),
    domain: text("domain").unique(),
});

export const deployments = sqliteTable("deployments", {
    id: integer("id").primaryKey(),
    commit: text("commit").notNull(),
    siteId: integer("site_id").references(() => sites.id).notNull(),
});