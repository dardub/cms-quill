import Link from "next/link";

import { createOrg } from "./actions";
import CreateOrgForm from "./form";


export default function Home() {
  return <CreateOrgForm />;
}
