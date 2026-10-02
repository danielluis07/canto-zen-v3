import type { Product, ProductTypes } from "@/types";

export const productTypes: ProductTypes[] = [
  { slug: "sofas", label: "Sofas", singularLabel: "Sofa" },
  { slug: "poltronas", label: "Armchairs", singularLabel: "Armchair" },
  {
    slug: "mesas-de-centro",
    label: "Coffee tables",
    singularLabel: "Coffee table",
  },
  {
    slug: "mesas-de-jantar",
    label: "Dining tables",
    singularLabel: "Dining table",
  },
  {
    slug: "racks-e-estantes",
    label: "Media units and shelves",
    singularLabel: "Media unit",
  },
  { slug: "aparadores", label: "Sideboards", singularLabel: "Sideboard" },
  { slug: "camas", label: "Beds", singularLabel: "Bed" },
  { slug: "cabeceiras", label: "Headboards", singularLabel: "Headboard" },
  {
    slug: "criados-mudos",
    label: "Nightstands",
    singularLabel: "Nightstand",
  },
  { slug: "comodas", label: "Dressers", singularLabel: "Dresser" },
  {
    slug: "guarda-roupas",
    label: "Wardrobes",
    singularLabel: "Wardrobe",
  },
  { slug: "mesas", label: "Tables", singularLabel: "Table" },
  { slug: "cadeiras", label: "Dining chairs", singularLabel: "Dining chair" },
  { slug: "banquetas", label: "Counter stools", singularLabel: "Counter stool" },
  { slug: "armarios", label: "Cabinets", singularLabel: "Cabinet" },
  {
    slug: "carrinhos-e-apoios",
    label: "Carts and side tables",
    singularLabel: "Cart",
  },
  {
    slug: "escrivaninhas",
    label: "Desks",
    singularLabel: "Desk",
  },
  {
    slug: "cadeiras-de-trabalho",
    label: "Desk chairs",
    singularLabel: "Desk chair",
  },
  { slug: "estantes", label: "Bookcases", singularLabel: "Bookcase" },
  {
    slug: "luminarias-de-mesa",
    label: "Table lamps",
    singularLabel: "Table lamp",
  },
];

export const products: Product[] = [
  // §3.1 row 1 — the hero: cotas ['largura'], multi-volume embalagem, freteGratis
  {
    slug: "sofa-heron-linho-cru",
    name: "Haven Sofa",
    family: "sofa-heron",
    finish: "Oat Linen",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["reboco"],
    order: 1,
    tablePrice: 980000,
    extraMeasurements: [
      { label: "Seat height", value: 42, unit: "cm" },
      { label: "Seating capacity", value: 3, unit: "un" },
      { label: "Cushion count", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    freeShipping: "southeast",
    images: [
      {
        src: "/images/products/sofa-heron-linho-cru.webp",
        alt: "Haven Sofa in oat linen",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "A generous three-seat sofa with pale upholstery, loose back cushions, and a slim wood base. Its quiet shape works against a bare wall or in the middle of a living room.",
  },

  // §3.1 row 2 — the hero's second finish: same família, same geometry
  {
    slug: "sofa-heron-boucle-areia",
    name: "Haven Sofa",
    family: "sofa-heron",
    finish: "Ivory Boucle",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 2,
    tablePrice: 1140000,
    extraMeasurements: [
      { label: "Seat height", value: 42, unit: "cm" },
      { label: "Seating capacity", value: 3, unit: "un" },
      { label: "Cushion count", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/sofa-heron-boucle-areia.webp",
        alt: "Haven Sofa in ivory boucle",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "The Haven sofa in a soft, textured ivory finish. Three broad seat cushions and a low wood frame give it a relaxed look that suits an open living room.",
  },

  // §3.1 row 3 — precoDe, one of the three pieces §3.8 marks down
  {
    slug: "sofa-orla-linho-areia",
    name: "Cove Sofa",
    family: "sofa-orla",
    finish: "Ivory Fabric",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 3,
    tablePrice: 760000,
    discountPrice: 890000,
    extraMeasurements: [
      { label: "Seat height", value: 41, unit: "cm" },
      { label: "Seating capacity", value: 3, unit: "un" },
      { label: "Cushion count", value: 4, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/sofa-orla-linho-areia.webp",
        alt: "Cove Sofa in ivory fabric",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A low, wide sofa with a clean front and deep, pale cushions. Its simple shape leaves room for a coffee table without making the seating area feel crowded.",
  },

  // §3.1 row 4 — esgotado: no CTA, and the fields that stay populated anyway
  {
    slug: "sofa-taipa-couro-argila",
    name: "Hearth Sofa",
    family: "sofa-taipa",
    finish: "Cognac Leather",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 4,
    tablePrice: 1420000,
    extraMeasurements: [
      { label: "Seat height", value: 44, unit: "cm" },
      { label: "Seating capacity", value: 4, unit: "un" },
      { label: "Cushion count", value: 6, unit: "un" },
    ],
    availability: "out-of-stock",
    freeShipping: "national",
    images: [
      {
        src: "/images/products/sofa-taipa-couro-argila.webp",
        alt: "Hearth Sofa in cognac leather",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A long sofa in warm cognac leather, with broad arms and a low profile. The leather brings color to a neutral room while leaving the rest of the furniture understated.",
  },

  // §3.1 row 5
  {
    slug: "sofa-maruja-linho-carvao",
    name: "Dusk Sofa",
    family: "sofa-maruja",
    finish: "Charcoal Fabric",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 5,
    tablePrice: 840000,
    extraMeasurements: [
      { label: "Seat height", value: 43, unit: "cm" },
      { label: "Seating capacity", value: 3, unit: "un" },
      { label: "Cushion count", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/sofa-maruja-linho-carvao.webp",
        alt: "Dusk Sofa in charcoal fabric",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A charcoal sofa with deep seats and a broad, straight back. Its dark upholstery gives the seating area a clear outline against pale walls and flooring.",
  },

  // §3.1 row 6 — produto.md's own example: all three papel roles, two ambientes,
  // and the carve-out família whose two acabamentos must be visibly different
  {
    slug: "poltrona-lina-linho-cru",
    name: "Willow Armchair",
    family: "poltrona-lina",
    finish: "Oat Fabric",
    type: "poltronas",
    mainEnvironment: "sala",
    environments: ["sala", "quarto"],
    collections: ["reboco"],
    order: 6,
    tablePrice: 389000,
    extraMeasurements: [
      { label: "Seat height", value: 42, unit: "cm" },
      { label: "Weight capacity", value: 120, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/poltrona-lina-linho-cru.webp",
        alt: "Willow Armchair in oat fabric",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "A compact armchair with a curved back, low arms, and exposed wood legs. The light upholstery makes it an easy reading chair beside a window or small table.",
  },

  // §3.1 row 7 — the second finish: identical medidas, different everything
  // else. Its placeholder is deliberately unlike row 6's — `imagens.md` §10.3.
  {
    slug: "poltrona-lina-boucle-carvalho",
    name: "Willow Armchair",
    family: "poltrona-lina",
    finish: "Ivory Boucle",
    type: "poltronas",
    mainEnvironment: "sala",
    environments: ["sala", "quarto"],
    collections: [],
    order: 7,
    tablePrice: 420000,
    extraMeasurements: [
      { label: "Seat height", value: 42, unit: "cm" },
      { label: "Weight capacity", value: 120, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/poltrona-lina-boucle-carvalho.webp",
        alt: "Willow Armchair in ivory boucle",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "The Willow armchair has a rounded back and broad arms in textured ivory fabric. Its wood legs keep the full upholstered shape from looking heavy.",
  },

  // §3.1 row 8
  {
    slug: "poltrona-sagui-couro-nogueira",
    name: "Saddle Armchair",
    family: "poltrona-sagui",
    finish: "Cognac Leather",
    type: "poltronas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 8,
    tablePrice: 560000,
    extraMeasurements: [
      { label: "Seat height", value: 44, unit: "cm" },
      { label: "Weight capacity", value: 130, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/poltrona-sagui-couro-nogueira.webp",
        alt: "Saddle Armchair in cognac leather",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A deep leather armchair with wide arms and a relaxed back cushion. The warm brown finish suits a living room corner where there is space to settle in.",
  },

  // §3.1 row 9 — the envio-imediato half of carrinho.md's divergent-prazo pair
  {
    slug: "mesa-de-centro-seixo-freijo",
    name: "Field Coffee Table",
    family: "mesa-de-centro-seixo",
    finish: "Natural Wood",
    type: "mesas-de-centro",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 9,
    tablePrice: 240000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/mesa-de-centro-seixo-freijo.webp",
        alt: "Field Coffee Table in natural wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A rectangular wood coffee table with a broad top and simple legs. It gives a three-seat sofa plenty of surface for books, drinks, and everyday use.",
  },

  // §3.1 row 10 — coleção Reboco
  {
    slug: "mesa-de-centro-luar-marmore-off-white",
    name: "Halo Coffee Table",
    family: "mesa-de-centro-luar",
    finish: "Pale Stone",
    type: "mesas-de-centro",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["reboco"],
    order: 10,
    tablePrice: 490000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: "/images/products/mesa-de-centro-luar-marmore-off-white.webp",
        alt: "Halo Coffee Table in pale stone",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A low coffee table with a pale stone top and substantial wood base. The rounded corners soften its wide, solid shape.",
  },

  // §3.1 row 11
  {
    slug: "mesa-de-centro-vau-jatoba",
    name: "Bridge Coffee Table",
    family: "mesa-de-centro-vau",
    finish: "Dark Wood",
    type: "mesas-de-centro",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 11,
    tablePrice: 310000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/mesa-de-centro-vau-jatoba.webp",
        alt: "Bridge Coffee Table in dark wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A long coffee table in dark wood with a lower shelf beneath the top. It sits comfortably in front of a large sofa and keeps books close at hand.",
  },

  // §3.1 row 12 — the mesa-de-jantar pair's first acabamento
  {
    slug: "mesa-de-jantar-vargem-carvalho",
    name: "Grove Dining Table",
    family: "mesa-de-jantar-vargem",
    finish: "Light Oak",
    type: "mesas-de-jantar",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 12,
    tablePrice: 890000,
    extraMeasurements: [
      { label: "Seating capacity", value: 8, unit: "un" },
      { label: "Top thickness", value: 4, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/mesa-de-jantar-vargem-carvalho.webp",
        alt: "Grove Dining Table in light oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A light wood dining table with a broad rectangular top and sturdy, open base. Its clear lines leave room for chairs along both sides and at each end.",
  },

  // §3.1 row 13 — the second finish: same família, same geometry
  {
    slug: "mesa-de-jantar-vargem-nogueira",
    name: "Grove Dining Table",
    family: "mesa-de-jantar-vargem",
    finish: "Dark Walnut",
    type: "mesas-de-jantar",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 13,
    tablePrice: 960000,
    extraMeasurements: [
      { label: "Seating capacity", value: 8, unit: "un" },
      { label: "Top thickness", value: 4, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: "/images/products/mesa-de-jantar-vargem-nogueira.webp",
        alt: "Grove Dining Table in dark walnut",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "The Grove dining table in a darker wood finish, with the same generous rectangular proportions. It gives a light dining room a warm, grounded center.",
  },

  // §3.1 row 14 — coleção Serra, freteGratis sudeste
  {
    slug: "mesa-de-jantar-ilhota-jatoba",
    name: "Gather Dining Table",
    family: "mesa-de-jantar-ilhota",
    finish: "Warm Wood",
    type: "mesas-de-jantar",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["serra"],
    order: 14,
    tablePrice: 1280000,
    extraMeasurements: [
      { label: "Seating capacity", value: 10, unit: "un" },
      { label: "Top thickness", value: 5, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    freeShipping: "southeast",
    images: [
      {
        src: "/images/products/mesa-de-jantar-ilhota-jatoba.webp",
        alt: "Gather Dining Table in warm wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A substantial dining table with a thick wood top and broad trestle base. It has the presence to anchor a large dining room and the surface for a full table setting.",
  },

  // §3.1 row 15
  {
    slug: "estante-cais-freijo",
    name: "Frame Bookcase",
    family: "estante-cais",
    finish: "Natural Wood",
    type: "racks-e-estantes",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 15,
    tablePrice: 640000,
    extraMeasurements: [
      { label: "Shelves", value: 5, unit: "un" },
      { label: "Weight capacity per shelf", value: 30, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/estante-cais-freijo.webp",
        alt: "Frame Bookcase in natural wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A wide wood bookcase with open shelves and a few enclosed sections below. Books and objects stay visible, while smaller things have a place out of sight.",
  },

  // §3.1 row 16 — precoDe
  {
    slug: "rack-varjao-carvalho",
    name: "Gallery Media Unit",
    family: "rack-varjao",
    finish: "Natural Wood",
    type: "racks-e-estantes",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 16,
    tablePrice: 520000,
    discountPrice: 590000,
    extraMeasurements: [
      { label: "Shelves", value: 4, unit: "un" },
      { label: "Weight capacity per shelf", value: 25, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/rack-varjao-carvalho.webp",
        alt: "Gallery Media Unit in natural wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A tall wood media unit with open shelving around a central space for a television. Lower compartments keep equipment and other living room items together.",
  },

  // §3.1 row 17 — the room's only aço piece
  {
    slug: "estante-tramo-aco-carvao",
    name: "Outline Shelf",
    family: "estante-tramo",
    finish: "Charcoal Steel",
    type: "racks-e-estantes",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 17,
    tablePrice: 410000,
    extraMeasurements: [
      { label: "Shelves", value: 4, unit: "un" },
      { label: "Weight capacity per shelf", value: 40, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/estante-tramo-aco-carvao.webp",
        alt: "Outline Shelf in charcoal steel",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A slim, open shelf in dark metal. Its narrow frame holds books and objects without covering much of the wall behind it.",
  },

  // §3.1 row 18 — coleção Serra
  {
    slug: "aparador-sereno-carvalho",
    name: "Still Sideboard",
    family: "aparador-sereno",
    finish: "Natural Oak",
    type: "aparadores",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["serra"],
    order: 18,
    tablePrice: 460000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/aparador-sereno-carvalho.webp",
        alt: "Still Sideboard in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A low wood sideboard with broad, plain doors and a long top for lamps or objects. The flat front keeps the piece calm against a textured wall.",
  },

  // §3.1 row 19 — coleção Reboco
  {
    slug: "aparador-pedra-marmore-cru",
    name: "Slate Sideboard",
    family: "aparador-pedra",
    finish: "Stone and Wood",
    type: "aparadores",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["reboco"],
    order: 19,
    tablePrice: 720000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/aparador-pedra-marmore-cru.webp",
        alt: "Slate Sideboard in stone and wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A long wood sideboard topped with dark, veined stone. The stone adds a clear horizontal line while the closed doors keep dining room storage discreet.",
  },

  // §3.1 row 20
  {
    slug: "aparador-junco-palhinha-freijo",
    name: "Woven Sideboard",
    family: "aparador-junco",
    finish: "Woven Cane and Wood",
    type: "aparadores",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 20,
    tablePrice: 340000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/aparador-junco-palhinha-freijo.webp",
        alt: "Woven Sideboard in woven cane and wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A wood sideboard with woven cane panels across the front. The airy doors and slim legs give the storage piece a lighter presence in the room.",
  },

  // §3.2 row 21 — the room's full-coverage piece: all three papel roles, and
  // the only cota §7.3's budget spends in Quarto
  {
    slug: "cama-nuvem-linho-cru",
    name: "Rest Bed",
    family: "cama-nuvem",
    finish: "Oat Linen",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 21,
    tablePrice: 820000,
    extraMeasurements: [
      { label: "Platform height", value: 30, unit: "cm" },
      { label: "Recommended mattress width", value: 158, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/cama-nuvem-linho-cru.webp",
        alt: "Rest Bed in oat linen",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "An upholstered bed with a broad, softly padded headboard and a low frame. The pale fabric pairs easily with wood nightstands and layered bedding.",
  },

  // §3.2 row 22 — the second finish: same família, same geometry
  {
    slug: "cama-nuvem-boucle-areia",
    name: "Rest Bed",
    family: "cama-nuvem",
    finish: "Ivory Boucle",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 22,
    tablePrice: 910000,
    extraMeasurements: [
      { label: "Platform height", value: 30, unit: "cm" },
      { label: "Recommended mattress width", value: 158, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/cama-nuvem-boucle-areia.webp",
        alt: "Rest Bed in ivory boucle",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "The Rest bed in textured ivory upholstery. Its padded headboard and low base bring softness to a simple bedroom without filling the wall.",
  },

  // §3.2 row 23
  {
    slug: "cama-orvalho-carvalho",
    name: "Platform Bed",
    family: "cama-orvalho",
    finish: "Natural Oak",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 23,
    tablePrice: 740000,
    extraMeasurements: [
      { label: "Platform height", value: 26, unit: "cm" },
      { label: "Recommended mattress width", value: 158, unit: "cm" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cama-orvalho-carvalho.webp",
        alt: "Platform Bed in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A low wood platform bed with a clean, straight headboard. The broad base sits close to the floor and keeps the room feeling open.",
  },

  // §3.2 row 24
  {
    slug: "cama-tatami-freijo",
    name: "Ground Bed",
    family: "cama-tatami",
    finish: "Natural Wood",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 24,
    tablePrice: 680000,
    extraMeasurements: [
      { label: "Platform height", value: 20, unit: "cm" },
      { label: "Recommended mattress width", value: 138, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/cama-tatami-freijo.webp",
        alt: "Ground Bed in natural wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A very low wood bed with a slim headboard and a wide platform around the mattress. Its grounded shape leaves more of the wall visible.",
  },

  // §3.2 row 25 — freteGratis sudeste, §3.8
  {
    slug: "cama-abrigo-couro-argila",
    name: "Shelter Bed",
    family: "cama-abrigo",
    finish: "Cognac Leather",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 25,
    tablePrice: 1350000,
    extraMeasurements: [
      { label: "Platform height", value: 34, unit: "cm" },
      { label: "Recommended mattress width", value: 193, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    freeShipping: "southeast",
    images: [
      {
        src: "/images/products/cama-abrigo-couro-argila.webp",
        alt: "Shelter Bed in cognac leather",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "An upholstered bed with a tall, warm brown headboard and a low matching frame. Its curved edges soften the generous silhouette.",
  },

  // §3.2 row 26 — coleção reboco
  {
    slug: "cabeceira-vela-linho-areia",
    name: "Softline Headboard",
    family: "cabeceira-vela",
    finish: "Sand Fabric",
    type: "cabeceiras",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: ["reboco"],
    order: 26,
    tablePrice: 320000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cabeceira-vela-linho-areia.webp",
        alt: "Softline Headboard in sand fabric",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A wide upholstered headboard in a warm neutral fabric. Its gentle curve gives a plain bedroom wall a softer outline.",
  },

  // §3.2 row 27 — the second finish: identical medidas, own slug and preço
  {
    slug: "cabeceira-vela-boucle-cru",
    name: "Softline Headboard",
    family: "cabeceira-vela",
    finish: "Ivory Boucle",
    type: "cabeceiras",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 27,
    tablePrice: 360000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/cabeceira-vela-boucle-cru.webp",
        alt: "Softline Headboard in ivory boucle",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "The Softline headboard in a pale, textured finish. Its broad padded surface sits comfortably behind pillows and light bedding.",
  },

  // §3.2 row 28
  {
    slug: "cabeceira-ripado-carvalho",
    name: "Ridge Headboard",
    family: "cabeceira-ripado",
    finish: "Natural Oak",
    type: "cabeceiras",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 28,
    tablePrice: 440000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/cabeceira-ripado-carvalho.webp",
        alt: "Ridge Headboard in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A wide headboard made of closely spaced vertical wood slats. It adds texture across the wall while keeping the bed itself simple.",
  },

  // §3.2 row 29
  {
    slug: "criado-mudo-seixo-freijo",
    name: "Field Nightstand",
    family: "criado-mudo-seixo",
    finish: "Natural Wood",
    type: "criados-mudos",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 29,
    tablePrice: 185000,
    extraMeasurements: [
      { label: "Drawer count", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/criado-mudo-seixo-freijo.webp",
        alt: "Field Nightstand in natural wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A compact wood nightstand with one drawer and an open space below. The top has room for a lamp, a book, and the things kept beside the bed.",
  },

  // §3.2 row 30
  {
    slug: "criado-mudo-luar-nogueira",
    name: "Halo Nightstand",
    family: "criado-mudo-luar",
    finish: "Dark Walnut",
    type: "criados-mudos",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 30,
    tablePrice: 230000,
    extraMeasurements: [
      { label: "Drawer count", value: 2, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 3,
    images: [
      {
        src: "/images/products/criado-mudo-luar-nogueira.webp",
        alt: "Halo Nightstand in dark walnut",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A dark wood nightstand with two drawers and a clean, boxy shape. It brings useful bedside storage without adding visual clutter.",
  },

  // §3.2 row 31 — cross-listed into sala, §3.6: it reads as a side table
  {
    slug: "criado-mudo-junco-palhinha",
    name: "Woven Nightstand",
    family: "criado-mudo-junco",
    finish: "Woven Cane and Wood",
    type: "criados-mudos",
    mainEnvironment: "quarto",
    environments: ["quarto", "sala"],
    collections: [],
    order: 31,
    tablePrice: 168000,
    extraMeasurements: [
      { label: "Drawer count", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/criado-mudo-junco-palhinha.webp",
        alt: "Woven Nightstand in woven cane and wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A small wood nightstand with woven cane drawer fronts. The light texture adds detail next to an upholstered bed.",
  },

  // §3.2 row 32
  {
    slug: "comoda-vargem-carvalho",
    name: "Grove Dresser",
    family: "comoda-vargem",
    finish: "Natural Oak",
    type: "comodas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 32,
    tablePrice: 580000,
    extraMeasurements: [
      { label: "Drawer count", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/comoda-vargem-carvalho.webp",
        alt: "Grove Dresser in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A compact wood dresser with wide drawers and a plain front. Its top leaves room for a lamp, a mirror, or a few everyday objects.",
  },

  // §3.2 row 33 — coleção serra
  {
    slug: "comoda-tramo-nogueira",
    name: "Outline Dresser",
    family: "comoda-tramo",
    finish: "Dark Walnut",
    type: "comodas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: ["serra"],
    order: 33,
    tablePrice: 690000,
    extraMeasurements: [
      { label: "Drawer count", value: 6, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/comoda-tramo-nogueira.webp",
        alt: "Outline Dresser in dark walnut",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A low, wide dresser in dark wood with several roomy drawers. It fits beneath a mirror and gives a bedroom a strong horizontal line.",
  },

  // §3.2 row 34 — the room's esgotado piece, §3.8
  {
    slug: "comoda-bruma-freijo",
    name: "Morrow Dresser",
    family: "comoda-bruma",
    finish: "Natural Wood",
    type: "comodas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 34,
    tablePrice: 470000,
    extraMeasurements: [
      { label: "Drawer count", value: 4, unit: "un" },
    ],
    availability: "out-of-stock",
    images: [
      {
        src: "/images/products/comoda-bruma-freijo.webp",
        alt: "Morrow Dresser in natural wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A tall wood dresser with four drawers and a compact footprint. It provides storage where a wide chest would take too much floor space.",
  },

  // §3.2 row 35 — freteGratis nacional, §3.8, and the catalogue's largest box
  {
    slug: "guarda-roupa-cais-carvalho",
    name: "Frame Wardrobe",
    family: "guarda-roupa-cais",
    finish: "Natural Oak",
    type: "guarda-roupas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 35,
    tablePrice: 1560000,
    extraMeasurements: [
      { label: "Door count", value: 5, unit: "un" },
      { label: "Interior shelves", value: 10, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 10,
    freeShipping: "national",
    images: [
      {
        src: "/images/products/guarda-roupa-cais-carvalho.webp",
        alt: "Frame Wardrobe in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A broad wardrobe in light wood with full-height doors. Its simple panels keep the storage wall orderly and let the wood grain do the work.",
  },

  // §3.2 row 36
  {
    slug: "guarda-roupa-ripado-freijo",
    name: "Ridge Wardrobe",
    family: "guarda-roupa-ripado",
    finish: "Slatted Wood",
    type: "guarda-roupas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 36,
    tablePrice: 1190000,
    extraMeasurements: [
      { label: "Door count", value: 4, unit: "un" },
      { label: "Interior shelves", value: 6, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/guarda-roupa-ripado-freijo.webp",
        alt: "Ridge Wardrobe in slatted wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A wood wardrobe with vertical slatted doors. The narrow lines add texture to a large surface without bringing another color into the bedroom.",
  },

  // §3.2 row 37
  {
    slug: "guarda-roupa-bruma-nogueira",
    name: "Morrow Wardrobe",
    family: "guarda-roupa-bruma",
    finish: "Dark Walnut",
    type: "guarda-roupas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 37,
    tablePrice: 1320000,
    extraMeasurements: [
      { label: "Door count", value: 4, unit: "un" },
      { label: "Interior shelves", value: 8, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/guarda-roupa-bruma-nogueira.webp",
        alt: "Morrow Wardrobe in dark walnut",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A dark wood wardrobe with broad, plain doors. Its flush front makes the large piece feel settled against the wall.",
  },

  // §3.3 row 38
  {
    slug: "mesa-taipa-jatoba",
    name: "Hearth Table",
    family: "mesa-taipa",
    finish: "Warm Wood",
    type: "mesas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 38,
    tablePrice: 620000,
    extraMeasurements: [
      { label: "Seating capacity", value: 6, unit: "un" },
      { label: "Top thickness", value: 4, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/mesa-taipa-jatoba.webp",
        alt: "Hearth Table in warm wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A warm wood table with a broad top and solid legs. It makes a comfortable place for meals in a kitchen or informal dining room.",
  },

  // §3.3 row 39
  {
    slug: "mesa-orla-carvalho",
    name: "Cove Table",
    family: "mesa-orla",
    finish: "Natural Oak",
    type: "mesas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 39,
    tablePrice: 540000,
    extraMeasurements: [
      { label: "Seating capacity", value: 4, unit: "un" },
      { label: "Top thickness", value: 3, unit: "cm" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/mesa-orla-carvalho.webp",
        alt: "Cove Table in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A light wood table with a simple rectangular top and slender legs. It suits a smaller dining space while leaving room to pull chairs in and out.",
  },

  // §3.3 row 40
  {
    slug: "mesa-pedra-marmore-carvao",
    name: "Slate Table",
    family: "mesa-pedra",
    finish: "Dark Stone and Wood",
    type: "mesas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 40,
    tablePrice: 980000,
    extraMeasurements: [
      { label: "Seating capacity", value: 6, unit: "un" },
      { label: "Top thickness", value: 2, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/mesa-pedra-marmore-carvao.webp",
        alt: "Slate Table in dark stone and wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A dining table with a dark stone top and a substantial wood base. The veined surface gives the piece a strong presence in an otherwise quiet room.",
  },

  // §3.3 row 41 — cross-listed, all three roles, opens the Cozinha article
  {
    slug: "cadeira-junco-palhinha-freijo",
    name: "Woven Dining Chair",
    family: "cadeira-junco",
    finish: "Woven Cane and Wood",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha", "sala"],
    collections: [],
    order: 41,
    tablePrice: 148000,
    extraMeasurements: [
      { label: "Seat height", value: 46, unit: "cm" },
      { label: "Weight capacity", value: 110, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cadeira-junco-palhinha-freijo.webp",
        alt: "Woven Dining Chair in woven cane and wood",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "A wood dining chair with a woven cane seat and gently curved back. It brings texture to the table while keeping the profile light.",
  },

  // §3.3 row 42 — the second finish: same família and same geometry, but
  // not the same wood, because §8.1 makes an upholstered piece carvalho and its
  // palhinha sibling freijó. The coleção `serra` names this one of the two.
  {
    slug: "cadeira-junco-couro-argila",
    name: "Woven Dining Chair",
    family: "cadeira-junco",
    finish: "Cognac Leather and Wood",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: ["serra"],
    order: 42,
    tablePrice: 192000,
    extraMeasurements: [
      { label: "Seat height", value: 46, unit: "cm" },
      { label: "Weight capacity", value: 110, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/cadeira-junco-couro-argila.webp",
        alt: "Woven Dining Chair in cognac leather and wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "The Woven chair with a smooth brown seat and a wood frame. Its open back keeps the shape light beside a solid dining table.",
  },

  // §3.3 row 43 — the third and last precoDe piece §3.8 names
  {
    slug: "cadeira-vime-rattan-cru",
    name: "Openweave Dining Chair",
    family: "cadeira-vime",
    finish: "Natural Rattan",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 43,
    tablePrice: 124000,
    discountPrice: 148000,
    extraMeasurements: [
      { label: "Seat height", value: 44, unit: "cm" },
      { label: "Weight capacity", value: 100, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cadeira-vime-rattan-cru.webp",
        alt: "Openweave Dining Chair in natural rattan",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A light dining chair with a woven back and seat. The open weave looks at home around a wood table or near a bright window.",
  },

  // §3.3 row 44
  {
    slug: "cadeira-tramo-aco-carvao",
    name: "Outline Dining Chair",
    family: "cadeira-tramo",
    finish: "Charcoal Steel and Wood",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 44,
    tablePrice: 98000,
    extraMeasurements: [
      { label: "Seat height", value: 42, unit: "cm" },
      { label: "Weight capacity", value: 130, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cadeira-tramo-aco-carvao.webp",
        alt: "Outline Dining Chair in charcoal steel and wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A spare dining chair with a dark metal frame and slim wood seat. Its open sides keep a row of chairs from feeling crowded.",
  },

  // §3.3 row 45 — cross-listed to sala, §3.6
  {
    slug: "banqueta-seixo-carvalho",
    name: "Field Counter Stool",
    family: "banqueta-seixo",
    finish: "Natural Oak",
    type: "banquetas",
    mainEnvironment: "cozinha",
    environments: ["cozinha", "sala"],
    collections: [],
    order: 45,
    tablePrice: 118000,
    extraMeasurements: [
      { label: "Seat height", value: 66, unit: "cm" },
      { label: "Weight capacity", value: 120, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/banqueta-seixo-carvalho.webp",
        alt: "Field Counter Stool in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A wood counter stool with a shaped seat, low back, and footrest. It tucks beneath an island while still offering a comfortable perch.",
  },

  // §3.3 row 46
  {
    slug: "banqueta-vau-freijo",
    name: "Bridge Counter Stool",
    family: "banqueta-vau",
    finish: "Natural Wood",
    type: "banquetas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 46,
    tablePrice: 135000,
    extraMeasurements: [
      { label: "Seat height", value: 70, unit: "cm" },
      { label: "Weight capacity", value: 120, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/banqueta-vau-freijo.webp",
        alt: "Bridge Counter Stool in natural wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A tall wood stool with a broad, shaped seat and simple footrest. Its open legs make it easy to place along a kitchen counter.",
  },

  // §3.3 row 47
  {
    slug: "banqueta-tramo-aco-carvao",
    name: "Outline Counter Stool",
    family: "banqueta-tramo",
    finish: "Charcoal Steel and Wood",
    type: "banquetas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 47,
    tablePrice: 89000,
    extraMeasurements: [
      { label: "Seat height", value: 62, unit: "cm" },
      { label: "Weight capacity", value: 130, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/banqueta-tramo-aco-carvao.webp",
        alt: "Outline Counter Stool in charcoal steel and wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A counter stool with a dark metal frame and warm wood seat. The narrow legs keep the floor visible around an island.",
  },

  // §3.3 row 48
  {
    slug: "armario-cais-carvalho",
    name: "Frame Cabinet",
    family: "armario-cais",
    finish: "Natural Oak",
    type: "armarios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 48,
    tablePrice: 860000,
    extraMeasurements: [
      { label: "Door count", value: 3, unit: "un" },
      { label: "Interior shelves", value: 8, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: "/images/products/armario-cais-carvalho.webp",
        alt: "Frame Cabinet in natural oak",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A tall wood cabinet that combines open shelves with lower drawers. It keeps everyday dishes in reach and gives smaller items a place below.",
  },

  // §3.3 row 49
  {
    slug: "armario-ripado-freijo",
    name: "Ridge Cabinet",
    family: "armario-ripado",
    finish: "Slatted Wood",
    type: "armarios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 49,
    tablePrice: 710000,
    extraMeasurements: [
      { label: "Door count", value: 2, unit: "un" },
      { label: "Interior shelves", value: 6, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/armario-ripado-freijo.webp",
        alt: "Ridge Cabinet in slatted wood",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A tall cabinet with slatted wood doors. The vertical openings add texture and let the front feel lighter than a solid panel.",
  },

  // §3.3 row 50 — the one acabamento in the catalogue that names a finish
  // rather than a material; §8.1's structural clause supplies the wood
  {
    slug: "armario-bruma-off-white",
    name: "Morrow Cabinet",
    family: "armario-bruma",
    finish: "Warm White",
    type: "armarios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 50,
    tablePrice: 630000,
    extraMeasurements: [
      { label: "Door count", value: 2, unit: "un" },
      { label: "Interior shelves", value: 5, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/armario-bruma-off-white.webp",
        alt: "Morrow Cabinet in warm white",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A tall cabinet in warm white with plain doors and a slim profile. It adds closed storage to a kitchen without competing with the surrounding wood.",
  },

  // §3.3 row 51
  {
    slug: "carrinho-roldana-aco-carvao",
    name: "Rolling Bar Cart",
    family: "carrinho-roldana",
    finish: "Charcoal Steel",
    type: "carrinhos-e-apoios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 51,
    tablePrice: 210000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/carrinho-roldana-aco-carvao.webp",
        alt: "Charcoal steel two-tier cart with wheels in a kitchen",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A charcoal steel serving cart with two open tiers, a slim handle, and four small wheels. It moves dishes and drinks between the kitchen and dining table without taking up much floor space.",
  },

  // §3.3 row 52
  {
    slug: "carrinho-junco-rattan-cru",
    name: "Woven Bar Cart",
    family: "carrinho-junco",
    finish: "Natural Rattan",
    type: "carrinhos-e-apoios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 52,
    tablePrice: 174000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/carrinho-junco-rattan-cru.webp",
        alt: "Natural rattan two-tier rolling cart in a kitchen",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A light rolling cart with woven rattan shelves and a curved wood handle. It keeps glasses and serving pieces close by while letting the warm wood of the kitchen show through.",
  },

  // §3.3 row 53 — also listed in the living room
  {
    slug: "mesa-de-apoio-luar-marmore-cru",
    name: "Halo Side Table",
    family: "mesa-de-apoio-luar",
    finish: "Pale Stone and Oak",
    type: "carrinhos-e-apoios",
    mainEnvironment: "cozinha",
    environments: ["cozinha", "sala"],
    collections: [],
    order: 53,
    tablePrice: 268000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/mesa-de-apoio-luar-marmore-cru.webp",
        alt: "Round pale stone side table with an oak pedestal beside an armchair",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A small round side table with a pale stone top and a solid oak pedestal. Set beside an armchair, it has room for a cup, a book, or a small vase.",
  },

  // §3.4 row 54 — the office's lead piece and width illustration
  {
    slug: "escrivaninha-cais-carvalho",
    name: "Frame Desk",
    family: "escrivaninha-cais",
    finish: "Natural Oak",
    type: "escrivaninhas",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 54,
    tablePrice: 590000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/escrivaninha-cais-carvalho.webp",
        alt: "Natural oak desk with three drawers in a home office",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "A broad oak desk with three drawers on one side and open legroom on the other. The long, clear top leaves space to work without crowding the room.",
  },

  // §3.4 row 55
  {
    slug: "escrivaninha-vau-freijo",
    name: "Bridge Desk",
    family: "escrivaninha-vau",
    finish: "Natural Wood",
    type: "escrivaninhas",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 55,
    tablePrice: 480000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/escrivaninha-vau-freijo.webp",
        alt: "Light wood trestle desk beside a window",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A slim wood desk resting on two open trestle supports. Its light frame and simple top make a useful work surface in a small, bright room.",
  },

  // §3.4 row 56
  {
    slug: "escrivaninha-tramo-aco-carvao",
    name: "Outline Desk",
    family: "escrivaninha-tramo",
    finish: "Charcoal Steel and Oak",
    type: "escrivaninhas",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 56,
    tablePrice: 390000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/escrivaninha-tramo-aco-carvao.webp",
        alt: "Oak desk with a slim charcoal steel frame",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A narrow oak worktop on a fine charcoal steel frame. The open base leaves the floor visible, so the desk feels easy to place along a wall or window.",
  },

  // §3.4 row 57
  {
    slug: "cadeira-de-trabalho-orla-couro-argila",
    name: "Cove Desk Chair",
    family: "cadeira-de-trabalho-orla",
    finish: "Cognac Leather",
    type: "cadeiras-de-trabalho",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 57,
    tablePrice: 420000,
    extraMeasurements: [
      { label: "Seat height", value: 48, unit: "cm" },
      { label: "Weight capacity", value: 120, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/cadeira-de-trabalho-orla-couro-argila.webp",
        alt: "Cognac leather swivel desk chair with casters",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A padded leather desk chair with a tall back, low arms, and a swivel base on casters. Its warm brown upholstery brings a softer note to a wood workspace.",
  },

  // §3.4 row 58
  {
    slug: "cadeira-de-trabalho-junco-palhinha-freijo",
    name: "Woven Desk Chair",
    family: "cadeira-de-trabalho-junco",
    finish: "Woven Cane and Wood",
    type: "cadeiras-de-trabalho",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 58,
    tablePrice: 260000,
    extraMeasurements: [
      { label: "Seat height", value: 44, unit: "cm" },
      { label: "Weight capacity", value: 100, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cadeira-de-trabalho-junco-palhinha-freijo.webp",
        alt: "Light wood desk chair with a woven cane seat and back",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A light wood chair with a woven cane seat and back. Its simple four-leg shape sits easily at a desk and can move to the dining table when needed.",
  },

  // §3.4 row 59
  {
    slug: "cadeira-de-trabalho-ripado-carvalho",
    name: "Ridge Desk Chair",
    family: "cadeira-de-trabalho-ripado",
    finish: "Natural Oak",
    type: "cadeiras-de-trabalho",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 59,
    tablePrice: 310000,
    extraMeasurements: [
      { label: "Seat height", value: 46, unit: "cm" },
      { label: "Weight capacity", value: 110, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/cadeira-de-trabalho-ripado-carvalho.webp",
        alt: "Natural oak desk chair with a slatted back",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "An oak chair with a solid seat and a back made from narrow vertical slats. The open back keeps the chair light beside a wood desk.",
  },

  // §3.4 row 60
  {
    slug: "estante-bruma-freijo",
    name: "Morrow Bookcase",
    family: "estante-bruma",
    finish: "Natural Wood",
    type: "estantes",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 60,
    tablePrice: 510000,
    extraMeasurements: [
      { label: "Shelves", value: 4, unit: "un" },
      { label: "Weight capacity per shelf", value: 25, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/estante-bruma-freijo.webp",
        alt: "Narrow natural wood bookcase with four shelves",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A narrow wood bookcase with four open shelves. It uses a small stretch of wall for books and ceramics without closing in the room.",
  },

  // §3.4 row 61
  {
    slug: "estante-vargem-carvalho",
    name: "Grove Bookcase",
    family: "estante-vargem",
    finish: "Natural Oak",
    type: "estantes",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 61,
    tablePrice: 570000,
    extraMeasurements: [
      { label: "Shelves", value: 5, unit: "un" },
      { label: "Weight capacity per shelf", value: 30, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/estante-vargem-carvalho.webp",
        alt: "Tall oak bookcase with a central divider in a home office",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A tall oak bookcase with open shelves divided by a central upright. It holds books and objects within easy reach of a desk.",
  },

  // §3.4 row 62 — also listed in the living room and Serra collection
  {
    slug: "estante-mirante-nogueira",
    name: "Vista Bookcase",
    family: "estante-mirante",
    finish: "Dark Walnut",
    type: "estantes",
    mainEnvironment: "escritorio",
    environments: ["escritorio", "sala"],
    collections: ["serra"],
    order: 62,
    tablePrice: 660000,
    extraMeasurements: [
      { label: "Shelves", value: 6, unit: "un" },
      { label: "Weight capacity per shelf", value: 35, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: "/images/products/estante-mirante-nogueira.webp",
        alt: "Wide dark walnut bookcase with open shelves in a living room",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A wide walnut bookcase with several open bays for books and objects. Its dark wood gives a living room or study a clear, warm backdrop.",
  },

  // §3.4 row 63 — the office's out-of-stock piece
  {
    slug: "luminaria-de-mesa-farol-latao",
    name: "Beacon Table Lamp",
    family: "luminaria-de-mesa-farol",
    finish: "Brushed Brass and Oak",
    type: "luminarias-de-mesa",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 63,
    tablePrice: 142000,
    extraMeasurements: [
      { label: "Shade width", value: 24, unit: "cm" },
      { label: "Bulb sockets", value: 1, unit: "un" },
    ],
    availability: "out-of-stock",
    images: [
      {
        src: "/images/products/luminaria-de-mesa-farol-latao.webp",
        alt: "Brushed brass desk lamp with an oak base",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A compact desk lamp with a brushed brass shade and a small oak base. The angled shade directs light onto the work surface beside it.",
  },

  // §3.4 row 64 — part of the Reboco collection
  {
    slug: "luminaria-de-mesa-seixo-ceramica-cru",
    name: "Field Table Lamp",
    family: "luminaria-de-mesa-seixo",
    finish: "Natural Ceramic",
    type: "luminarias-de-mesa",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: ["reboco"],
    order: 64,
    tablePrice: 98000,
    extraMeasurements: [
      { label: "Shade width", value: 16, unit: "cm" },
      { label: "Bulb sockets", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/luminaria-de-mesa-seixo-ceramica-cru.webp",
        alt: "Small natural ceramic lamp with a pale fabric shade",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A small ceramic lamp with a pale fabric shade and a warm, diffuse glow. It sits comfortably on a desk or nightstand beside a book.",
  },

  // §3.4 row 65 — the entry-priced table lamp
  {
    slug: "luminaria-de-mesa-junco-palhinha",
    name: "Woven Table Lamp",
    family: "luminaria-de-mesa-junco",
    finish: "Woven Cane and Oak",
    type: "luminarias-de-mesa",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 65,
    tablePrice: 76000,
    extraMeasurements: [
      { label: "Shade width", value: 18, unit: "cm" },
      { label: "Bulb sockets", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/luminaria-de-mesa-junco-palhinha.webp",
        alt: "Lit table lamp with a woven cane shade and wood base",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "A table lamp with an open woven cane shade and a simple wood base. When lit, the weave casts a soft pattern across the nearby wall.",
  },
];
