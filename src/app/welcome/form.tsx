"use client";

import { useFormState } from "react-dom";
import { createOrg } from "./actions";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

// type FormState = {
//     formData: FormData;
//     message:
// }

const initialState = {
    message: "",
};

export default function CreateOrgForm() {
    const [state, formAction] = useFormState(createOrg, initialState);

    return (
        <form action={formAction}>
            <Card className="mx-auto max-w-sm mt-16">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Start by creating an organization.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="orgName">Organization Name</Label>
                            <Input
                                id="orgName"
                                name="orgName"
                                placeholder="Quill"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Continue &nbsp; →
                        </Button>
                    </div>
                </CardContent>
                {state.message?.length > 0 && (
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        {/* <AlertTitle>{state.type}</AlertTitle> */}
                        <AlertDescription>
                            {state.message}
                        </AlertDescription>
                    </Alert>
                )}
            </Card>
        </form>
    );
}
