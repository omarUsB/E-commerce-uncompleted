// src/app/api/auth/user/route.ts
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}
