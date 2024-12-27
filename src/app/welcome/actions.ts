"use server"
import { db } from "@/app/db";
import { orgs } from "@/db/schema"
import { redirect } from "next/navigation";

export async function createOrg(previousState: any, formData: FormData) {
    let result;
    try {
        [result] = await db.insert(orgs).values({ name: formData.get('orgName')?.toString() }).returning();
    } catch (error: any) {
        console.log("Error: ", error);
        return { message: error.message };
    }

    console.log("Result: ", result);
    redirect(`/welcome/${result.id}/create-admin`);
}