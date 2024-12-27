import CreateAdminForm from "./form"

export default function CreateAdminPage({ params }: { params: { id: number }}) {

    return <CreateAdminForm orgId={params.id} />
}