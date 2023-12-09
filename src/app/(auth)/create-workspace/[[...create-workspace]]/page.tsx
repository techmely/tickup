import { OrganizationList } from "@clerk/nextjs";

export default function CreateWorkspacePage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/w/:id/home"
      afterCreateOrganizationUrl="/w/:id/home"
    />
  );
}
