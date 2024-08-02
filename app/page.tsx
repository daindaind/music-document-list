import { Documents } from "@/data/Documents";
import DocumentsList from "./components/DocumentsList";

export default function Home() {
  return (
    <div>
      <DocumentsList data={Documents} />
    </div>
  );
}
