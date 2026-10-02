// THROWAWAY decision artifact. All onward destinations are in-memory/read-only stubs.
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PrototypeSwitcher } from "@/components/prototype-switcher";
import { products } from "@/lib/products";
import type { Product } from "@/types";

type Variant = "A" | "B" | "C";
const haven = products.find((p) => p.slug === "sofa-heron-linho-cru")!;
const armchair = products.find((p) => p.slug === "poltrona-lina-boucle-carvalho")!;
const coffeeTable = products.find((p) => p.slug === "mesa-de-centro-seixo-freijo")!;
const dining = products.find((p) => p.type === "mesas-de-jantar")!;
const desk = products.find((p) => p.type === "escrivaninhas")!;
const featured = [haven, armchair, coffeeTable, dining];
const furnitureTypes = [
  { name: "Sofas", slug: "sofas", product: haven },
  { name: "Armchairs", slug: "poltronas", product: armchair },
  { name: "Dining tables", slug: "mesas-de-jantar", product: dining },
  { name: "Desks", slug: "escrivaninhas", product: desk },
];
function target(variant: Variant, destination: string, selection?: string) {
  return `/?variant=${variant}&destination=${destination}${selection ? `&selection=${encodeURIComponent(selection)}` : ""}`;
}
function Photo({ product, className = "", eager = false, detail = false }: { product: Product; className?: string; eager?: boolean; detail?: boolean }) {
  return <Image className={className} src={product.images[0].src} alt={detail ? "" : product.images[0].alt} width={1254} height={1254} sizes="(max-width: 600px) 90vw, (max-width: 900px) 65vw, 50vw" loading={eager ? "eager" : "lazy"} />;
}
function ShopAction({ variant }: { variant: Variant }) {
  return <Link className={buttonVariants({ size: "lg" })} href={target(variant, "shop")}>Shop furniture</Link>;
}
function Intro({ variant }: { variant: Variant }) {
  return <div className="opening-copy"><h1>A little room<br />for everyday calm.</h1><p>Soft linen, warm wood, and furniture that makes a room feel like your own.</p><ShopAction variant={variant} /></div>;
}
export function VariantA() {
  return <section className="opening opening-a" aria-label="Editorial opening">
    <Intro variant="A" />
    <figure className="opening-main"><Photo product={haven} eager /><figcaption>Haven Sofa in oat linen</figcaption></figure>
    <figure className="opening-detail"><Photo product={armchair} detail /><figcaption>Oak and ivory boucle</figcaption></figure>
  </section>;
}
export function VariantB() {
  return <section className="opening opening-b" aria-label="Editorial opening">
    <Intro variant="B" />
    <figure className="opening-main"><Photo product={haven} eager /><figcaption>Haven Sofa in oat linen</figcaption></figure>
    <figure className="opening-detail"><Photo product={armchair} detail /><figcaption>Oak and ivory boucle</figcaption></figure>
  </section>;
}
export function VariantC() {
  return <section className="opening opening-c" aria-label="Editorial opening">
    <Intro variant="C" />
    <figure className="opening-main"><Photo product={haven} eager /><figcaption>Haven Sofa in oat linen</figcaption></figure>
    <figure className="opening-detail"><Photo product={armchair} detail /><figcaption>Oak and ivory boucle</figcaption></figure>
  </section>;
}
function FurnitureTypes({ variant }: { variant: Variant }) {
  return <section className={`section type-section type-section-${variant.toLowerCase()}`} id="furniture-types">
    <div className="section-heading"><h2>Find your next piece.</h2><Link href={target(variant, "shop")}>Shop all furniture</Link></div>
    {variant === "B" && <Photo product={dining} className="type-list-photo" />}
    <div className="type-links">{furnitureTypes.map((type) => <Link key={type.slug} href={target(variant, "shop", type.slug)}>
      {variant !== "B" && <Photo product={type.product} />}
      <span>{type.name}</span><span aria-hidden="true">↗</span>
    </Link>)}</div>
  </section>;
}
function ProductTile({ product, variant }: { product: Product; variant: Variant }) {
  return <Link className="product-tile" href={target(variant, "product", product.slug)}>
    <Photo product={product} /><h3>{product.name}</h3><p>{product.finish}</p>
    <small>{product.availability === "made-to-order" ? `Made to order · ${product.productionWeeks} weeks` : product.availability === "out-of-stock" ? "Currently unavailable" : "Ready to ship"}</small>
  </Link>;
}
function DestinationStub({ variant, destination, selection }: { variant: Variant; destination: string; selection?: string }) {
  const product = products.find((p) => p.slug === selection);
  const type = furnitureTypes.find((t) => t.slug === selection);
  const title = destination === "shop" ? type ? `Shop: ${type.name}` : "Shop furniture" : destination === "product" ? product?.name ?? "Product details" : destination === "room" ? selection ?? "Living room" : destination === "rooms" ? "Browse rooms" : destination === "cart" ? "Cart" : destination === "search" ? "Search furniture" : "About Canto Zen";
  const roomSlug = ({ "Living room": "sala", Bedroom: "quarto", Kitchen: "cozinha", Office: "escritorio" } as Record<string, string>)[selection ?? "Living room"] ?? "sala";
  const sample = destination === "shop" ? products.filter((p) => !selection || p.type === selection).slice(0, 4) : destination === "room" ? products.filter((p) => p.environments.includes(roomSlug)).slice(0, 4) : [];
  return <aside className="destination-stub" aria-label="Prototype destination">
    <p>Destination preview · <Link href={`/?variant=${variant}`}>Return to Home</Link></p><h2>{title}</h2>
    <p>This is a navigation stub for comparing homepage shopping paths.</p>
    {product && <div className="stub-product"><Photo product={product} /><div><h3>{product.finish}</h3><p>{product.description}</p><p>Product identity, prices, and cart behavior will be decided separately.</p></div></div>}
    {sample.length > 0 && <div className="product-grid">{sample.map((p) => <ProductTile key={p.slug} product={p} variant={variant} />)}</div>}
    {destination === "rooms" && <div className="stub-rooms">{["Living room", "Bedroom", "Kitchen", "Office"].map((room) => <Link key={room} href={target(variant, "room", room)}>{room}</Link>)}</div>}
    {destination === "search" && <p>Header search will show results in Shop. Search behavior is outside this composition comparison.</p>}
    {destination === "cart" && <p>Your cart is empty in this prototype. No items are saved.</p>}
    {destination === "about" && <p>Our approach begins with a room: how it feels, how it is used, and the furniture that belongs there.</p>}
  </aside>;
}
export function HomepagePrototype({ variant, destination, selection }: { variant: Variant; destination?: string; selection?: string }) {
  return <div className={`homepage-prototype variant-${variant.toLowerCase()}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <Link className="wordmark" href={`/?variant=${variant}`}>Canto Zen</Link>
      <nav aria-label="Primary navigation"><Link href={target(variant, "shop")}>Shop</Link><Link href={target(variant, "rooms")}>Rooms</Link><Link href={target(variant, "about")}>About</Link></nav>
      <div className="header-tools"><Link href={target(variant, "search")} aria-label="Search furniture"><Search size={20} /></Link><Link href={target(variant, "cart")} aria-label="Cart, 0 items"><ShoppingBag size={20} /><span>0</span></Link></div>
    </header>
    <main id="main">
      {destination && <DestinationStub variant={variant} destination={destination} selection={selection} />}
      {variant === "A" ? <VariantA /> : variant === "B" ? <VariantB /> : <VariantC />}
      <FurnitureTypes variant={variant} />
      <section className="section featured-section"><div className="section-heading"><h2>A few pieces to begin with.</h2><Link href={target(variant, "shop")}>Explore the furniture</Link></div><div className="product-grid">{featured.map((p) => <ProductTile key={p.slug} product={p} variant={variant} />)}</div></section>
      <section className="section room-story"><figure><Photo product={haven} /><figcaption>Haven Sofa in oat linen</figcaption></figure><div><h2>The living room,<br />at your own pace.</h2><p>A generous sofa, a place to set down a book, and daylight through the window. Start with the piece you will use every day.</p><Link className="story-product" href={target(variant, "product", haven.slug)}>Explore the pictured Haven Sofa</Link><Link href={target(variant, "room", "Living room")}>Discover the living room</Link></div></section>
      <section className="section materials" id="materials"><figure className="material-detail"><Photo product={armchair} detail /></figure><div><h2>Warmth you can see.</h2><p>The grain of oak. The texture of boucle. Furniture begins with the materials you live with.</p><Link href={target(variant, "about")}>Our approach to furniture</Link></div></section>
    </main>
    <footer className="site-footer"><div><Link className="wordmark" href={`/?variant=${variant}`}>Canto Zen</Link><p>Furniture for everyday calm.</p></div><nav aria-label="Footer navigation"><Link href={target(variant, "shop")}>Shop furniture</Link><Link href={target(variant, "rooms")}>Browse rooms</Link><Link href={target(variant, "about")}>About</Link><Link href={target(variant, "cart")}>Cart</Link></nav><p className="demo-disclosure">Fictional furniture storefront. A portfolio project by Daniel Luis. No purchases or orders.</p></footer>
    <PrototypeSwitcher current={variant} />
  </div>;
}
