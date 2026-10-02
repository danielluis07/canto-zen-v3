// THROWAWAY: three homepage compositions on /?variant=A|B|C.
import { HomepagePrototype } from "@/app/homepage-prototype";

export default async function Home({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const variant = query.variant === "B" || query.variant === "C" ? query.variant : "A";
  return <HomepagePrototype variant={variant} destination={typeof query.destination === "string" ? query.destination : undefined} selection={typeof query.selection === "string" ? query.selection : undefined} />;
}
