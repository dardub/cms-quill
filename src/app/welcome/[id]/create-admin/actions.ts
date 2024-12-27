"use server";
import { db } from "@/app/db";
import { users } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createAdmin(prevState: any, formData: FormData) {
    let result;
    try {
        result = await db
            .insert(users)
            .values({ orgId: 1, email: formData.get("email")?.toString() ?? "", roleId: 1 })
            .returning();
    } catch (error: any) {
        console.log("Error: ", error);
        return { message: error.message };
    }

    console.log("Result: ", result);
    redirect(`/welcome/${result.id}/create-admin`);
}
