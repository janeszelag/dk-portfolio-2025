import { redirect } from "next/navigation"

// This is a catch-all route that redirects all unmatched routes to the home page
export default function CatchAll() {
  redirect("/")
}