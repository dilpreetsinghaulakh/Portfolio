import { redirect } from "next/navigation";

export default function AboutPage() {
  redirect("/about/me");
  return null;
}
