import type { ProductFamily } from "@/types";

export const families: ProductFamily[] = [
  {
    slug: "sofa-heron",
    name: "Haven Sofa",
    measurements: { width: 0, depth: 0, height: 0 },
  },
  {
    slug: "sofa-orla",
    name: "Cove Sofa",
    measurements: { width: 190, depth: 90, height: 72 },
  },
  {
    slug: "sofa-taipa",
    name: "Hearth Sofa",
    measurements: { width: 245, depth: 100, height: 80 },
  },
  {
    slug: "sofa-maruja",
    name: "Dusk Sofa",
    measurements: { width: 205, depth: 92, height: 74 },
  },
  {
    slug: "poltrona-lina",
    name: "Willow Armchair",
    measurements: { width: 78, depth: 82, height: 74 },
  },
  {
    slug: "poltrona-sagui",
    name: "Saddle Armchair",
    measurements: { width: 88, depth: 86, height: 80 },
  },
  {
    slug: "mesa-de-centro-seixo",
    name: "Field Coffee Table",
    measurements: { width: 95, depth: 58, height: 34 },
  },
  {
    slug: "mesa-de-centro-luar",
    name: "Halo Coffee Table",
    measurements: { width: 125, depth: 70, height: 40 },
  },
  {
    slug: "mesa-de-centro-vau",
    name: "Bridge Coffee Table",
    measurements: { width: 110, depth: 62, height: 36 },
  },
  {
    slug: "mesa-de-jantar-vargem",
    name: "Grove Dining Table",
    measurements: { width: 200, depth: 92, height: 76 },
  },
  {
    slug: "mesa-de-jantar-ilhota",
    name: "Gather Dining Table",
    measurements: { width: 230, depth: 98, height: 78 },
  },
  {
    slug: "estante-cais",
    name: "Frame Bookcase",
    measurements: { width: 180, depth: 42, height: 200 },
  },
  {
    slug: "rack-varjao",
    name: "Gallery Media Unit",
    measurements: { width: 140, depth: 38, height: 168 },
  },
  {
    slug: "estante-tramo",
    name: "Outline Shelf",
    measurements: { width: 100, depth: 34, height: 148 },
  },
  {
    slug: "aparador-sereno",
    name: "Still Sideboard",
    measurements: { width: 150, depth: 43, height: 82 },
  },
  {
    slug: "aparador-pedra",
    name: "Slate Sideboard",
    measurements: { width: 175, depth: 47, height: 86 },
  },
  {
    slug: "aparador-junco",
    name: "Woven Sideboard",
    measurements: { width: 130, depth: 40, height: 78 },
  },

  // Bedroom families follow the original catalog order. Some line names also
  // appear in other rooms, but each product category has its own family slug.
  // For example, `comoda-vargem` and `mesa-de-jantar-vargem` remain separate.
  {
    slug: "cama-nuvem",
    name: "Rest Bed",
    measurements: { width: 172, depth: 208, height: 100 },
  },
  {
    slug: "cama-orvalho",
    name: "Platform Bed",
    measurements: { width: 168, depth: 205, height: 45 },
  },
  {
    slug: "cama-tatami",
    name: "Ground Bed",
    measurements: { width: 148, depth: 202, height: 38 },
  },
  {
    slug: "cama-abrigo",
    name: "Shelter Bed",
    measurements: { width: 200, depth: 215, height: 110 },
  },
  {
    slug: "cabeceira-vela",
    name: "Softline Headboard",
    measurements: { width: 160, depth: 10, height: 100 },
  },
  {
    slug: "cabeceira-ripado",
    name: "Ridge Headboard",
    measurements: { width: 180, depth: 12, height: 110 },
  },
  {
    slug: "criado-mudo-seixo",
    name: "Field Nightstand",
    measurements: { width: 50, depth: 40, height: 55 },
  },
  {
    slug: "criado-mudo-luar",
    name: "Halo Nightstand",
    measurements: { width: 56, depth: 44, height: 60 },
  },
  {
    slug: "criado-mudo-junco",
    name: "Woven Nightstand",
    measurements: { width: 46, depth: 38, height: 52 },
  },
  {
    slug: "comoda-vargem",
    name: "Grove Dresser",
    measurements: { width: 110, depth: 47, height: 82 },
  },
  {
    slug: "comoda-tramo",
    name: "Outline Dresser",
    measurements: { width: 128, depth: 50, height: 88 },
  },
  {
    slug: "comoda-bruma",
    name: "Morrow Dresser",
    measurements: { width: 92, depth: 45, height: 78 },
  },
  {
    slug: "guarda-roupa-cais",
    name: "Frame Wardrobe",
    measurements: { width: 240, depth: 64, height: 236 },
  },
  {
    slug: "guarda-roupa-ripado",
    name: "Ridge Wardrobe",
    measurements: { width: 180, depth: 58, height: 220 },
  },
  {
    slug: "guarda-roupa-bruma",
    name: "Morrow Wardrobe",
    measurements: { width: 200, depth: 60, height: 228 },
  },

  {
    slug: "mesa-taipa",
    name: "Hearth Table",
    measurements: { width: 150, depth: 82, height: 76 },
  },
  {
    slug: "mesa-orla",
    name: "Cove Table",
    measurements: { width: 130, depth: 78, height: 74 },
  },
  {
    slug: "mesa-pedra",
    name: "Slate Table",
    measurements: { width: 180, depth: 90, height: 78 },
  },

  {
    slug: "cadeira-junco",
    name: "Woven Dining Chair",
    measurements: { width: 52, depth: 56, height: 88 },
  },
  {
    slug: "cadeira-vime",
    name: "Openweave Dining Chair",
    measurements: { width: 48, depth: 52, height: 84 },
  },
  {
    slug: "cadeira-tramo",
    name: "Outline Dining Chair",
    measurements: { width: 44, depth: 50, height: 80 },
  },

  {
    slug: "banqueta-seixo",
    name: "Field Counter Stool",
    measurements: { width: 40, depth: 40, height: 68 },
  },
  {
    slug: "banqueta-vau",
    name: "Bridge Counter Stool",
    measurements: { width: 42, depth: 42, height: 72 },
  },
  {
    slug: "banqueta-tramo",
    name: "Outline Counter Stool",
    measurements: { width: 38, depth: 38, height: 64 },
  },

  {
    slug: "armario-cais",
    name: "Frame Cabinet",
    measurements: { width: 150, depth: 52, height: 215 },
  },
  {
    slug: "armario-ripado",
    name: "Ridge Cabinet",
    measurements: { width: 120, depth: 46, height: 200 },
  },
  {
    slug: "armario-bruma",
    name: "Morrow Cabinet",
    measurements: { width: 90, depth: 42, height: 185 },
  },

  {
    slug: "carrinho-roldana",
    name: "Rolling Bar Cart",
    measurements: { width: 56, depth: 44, height: 68 },
  },
  {
    slug: "carrinho-junco",
    name: "Woven Bar Cart",
    measurements: { width: 44, depth: 40, height: 60 },
  },
  {
    slug: "mesa-de-apoio-luar",
    name: "Halo Side Table",
    measurements: { width: 66, depth: 50, height: 74 },
  },

  {
    slug: "escrivaninha-tramo",
    name: "Outline Desk",
    measurements: { width: 110, depth: 55, height: 74 },
  },
  {
    slug: "escrivaninha-vau",
    name: "Bridge Desk",
    measurements: { width: 130, depth: 60, height: 75 },
  },
  {
    slug: "escrivaninha-cais",
    name: "Frame Desk",
    measurements: { width: 160, depth: 70, height: 78 },
  },

  {
    slug: "cadeira-de-trabalho-junco",
    name: "Woven Desk Chair",
    measurements: { width: 44, depth: 48, height: 78 },
  },
  {
    slug: "cadeira-de-trabalho-ripado",
    name: "Ridge Desk Chair",
    measurements: { width: 48, depth: 52, height: 84 },
  },
  {
    slug: "cadeira-de-trabalho-orla",
    name: "Cove Desk Chair",
    measurements: { width: 54, depth: 58, height: 90 },
  },

  {
    slug: "estante-bruma",
    name: "Morrow Bookcase",
    measurements: { width: 90, depth: 32, height: 160 },
  },
  {
    slug: "estante-vargem",
    name: "Grove Bookcase",
    measurements: { width: 110, depth: 38, height: 180 },
  },
  {
    slug: "estante-mirante",
    name: "Vista Bookcase",
    measurements: { width: 140, depth: 42, height: 200 },
  },

  {
    slug: "luminaria-de-mesa-junco",
    name: "Woven Table Lamp",
    measurements: { width: 20, depth: 20, height: 40 },
  },
  {
    slug: "luminaria-de-mesa-seixo",
    name: "Field Table Lamp",
    measurements: { width: 22, depth: 22, height: 42 },
  },
  {
    slug: "luminaria-de-mesa-farol",
    name: "Beacon Table Lamp",
    measurements: { width: 26, depth: 26, height: 50 },
  },
];
