import { db } from "./db";
import { orgs, roles, users } from "@/db/schema";

export const createOrgs = async () => {
  return db.insert(orgs).values([
    { name: "Google", slug: "google" },
    { name: "Sony", slug: "sony" },
    { name: "Nike", slug: "nike" },
  ]);
};

export const createUsers = async () => {
  return db.insert(users).values([
    { orgId: 1, email: "test1@email.com", roleId: 1 },
    { orgId: 2, email: "test2@email.com", roleId: 1 },
    { orgId: 3, email: "test3@email.com", roleId: 1 },
  ]);
};

export const createRoles = async () => {
  return db.insert(roles).values([
    {
      name: "Admin",
      createUser: true,
      createSite: true,
      manageSite: true,
      manageUser: true,
      deleteSite: true,
      deleteUser: true,
    },
    {
      name: "Viewer",
      createUser: false,
      createSite: false,
      manageSite: false,
      manageUser: false,
      deleteSite: false,
      deleteUser: false,
    },
    {
      name: "Developer",
      createUser: false,
      createSite: false,
      manageUser: false,
      manageSite: true,
      deleteSite: false,
      deleteUser: false,
    },
  ]);
};

export const seed = async () => {
  await createOrgs();
  await createRoles();
  await createUsers();
  console.log("Tables seeded.");
};

seed();
