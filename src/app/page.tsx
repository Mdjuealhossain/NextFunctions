import { Button } from "@mui/material";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  console.log("object", cookieStore.getAll("next-auth.session-token"));
  return cookieStore.getAll("next-auth.session-token").map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ));
}
