// Arreglo de objetos para almacenar los productos
let productos = [
  {
    imagen: "../imagenes/camisa_de_vestir.jpg",
    nombre: "Camisa de Vestir",
    categoria: "Elegante",
    precio: 55000,
    talla: "M",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/vestido_de_gala.jpg",
    nombre: "Vestido de Gala",
    categoria: "Elegante",
    precio: 75000,
    talla: "L",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/pantalones_vaqueros.jpg",
    nombre: "Pantalones Vaqueros",
    categoria: "Casual",
    precio: 45000,
    talla: "S",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/blusa_floral.jpg",
    nombre: "Blusa Floral",
    categoria: "Casual",
    precio: 35000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Verano",
  },
  {
    imagen: "../imagenes/vestido_fiesta.jpg",
    nombre: "Vestido de Fiesta",
    categoria: "Elegante",
    precio: 85000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/camiseta_deportiva.jpg",
    nombre: "Camiseta Deportiva",
    categoria: "Deportivo",
    precio: 30000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/chaqueta_cuero.jpg",
    nombre: "Chaqueta de Cuero",
    categoria: "Casual",
    precio: 120000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/pantalones_yoga.jpg",
    nombre: "Pantalones de Yoga",
    categoria: "Deportivo",
    precio: 40000,
    talla: "S",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/abrigo_invernal.jpg",
    nombre: "Abrigo Invernal",
    categoria: "Casual",
    precio: 150000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Invierno",
  },
  {
    imagen: "../imagenes/falda_mezclilla.jpg",
    nombre: "Falda de Mezclilla",
    categoria: "Casual",
    precio: 60000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/polo_estampado.jpg",
    nombre: "Polo Estampado",
    categoria: "Casual",
    precio: 25000,
    talla: "S",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/vestido_bohemio.jpg",
    nombre: "Vestido Bohemio",
    categoria: "Casual",
    precio: 70000,
    talla: "L",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/camisa_rayas.jpg",
    nombre: "Camisa a Rayas",
    categoria: "Casual",
    precio: 35000,
    talla: "M",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/abrigo_lana.jpg",
    nombre: "Abrigo de Lana",
    categoria: "Casual",
    precio: 130000,
    talla: "XL",
    sexo: "Femenino",
    temporada: "Invierno",
  },
  {
    imagen: "../imagenes/traje_baño.jpg",
    nombre: "Traje de Baño",
    categoria: "Deportivo",
    precio: 55000,
    talla: "M",
    sexo: "Masculino",
    temporada: "Verano",
  },
  {
    imagen: "../imagenes/vestido_verano.jpg",
    nombre: "Vestido de Verano",
    categoria: "Casual",
    precio: 45000,
    talla: "S",
    sexo: "Femenino",
    temporada: "Verano",
  },
  {
    imagen: "../imagenes/chaqueta_acolchada.jpg",
    nombre: "Chaqueta Acolchada",
    categoria: "Deportivo",
    precio: 95000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Invierno",
  },
  {
    imagen: "../imagenes/top_encaje.jpg",
    nombre: "Top de Encaje",
    categoria: "Casual",
    precio: 60000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/pantalon_vestir.jpg",
    nombre: "Pantalones de Vestir",
    categoria: "Elegante",
    precio: 50000,
    talla: "S",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/sudadera.jpg",
    nombre: "Sudadera",
    categoria: "Deportivo",
    precio: 40000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/camiseta_cuadros.jpg",
    nombre: "Camiseta a Cuadros",
    categoria: "Casual",
    precio: 30000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/vestido_coctel.jpg",
    nombre: "Vestido de Cóctel",
    categoria: "Elegante",
    precio: 80000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/pantalon_cargo.jpg",
    nombre: "Pantalón de Cargo",
    categoria: "Casual",
    precio: 65000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/bufanda_lana.jpg",
    nombre: "Bufanda de Lana",
    categoria: "Casual",
    precio: 35000,
    talla: "Única",
    sexo: "Unisex",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/gorra_deportiva.jpg",
    nombre: "Gorra Deportiva",
    categoria: "Deportivo",
    precio: 25000,
    talla: "Única",
    sexo: "Unisex",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/vestido_novia.jpg",
    nombre: "Vestido de Novia",
    categoria: "Elegante",
    precio: 150000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/chaqueta_vaquera.jpg",
    nombre: "Chaqueta Vaquera",
    categoria: "Casual",
    precio: 85000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/chandal.jpg",
    nombre: "Chándal",
    categoria: "Deportivo",
    precio: 55000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/bañador.jpg",
    nombre: "Bañador",
    categoria: "Deportivo",
    precio: 45000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Verano",
  },
  {
    imagen: "../imagenes/pijama_algodon.jpg",
    nombre: "Pijama de Algodón",
    categoria: "casual",
    precio: 40000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/jersey_punto.jpg",
    nombre: "Jersey de Punto",
    categoria: "casual",
    precio: 60000,
    talla: "L",
    sexo: "Unisex",
    temporada: "Invierno",
  },
  {
    imagen: "../imagenes/chaleco_acolchado.jpg",
    nombre: "Chaleco Acolchado",
    categoria: "Casual",
    precio: 75000,
    talla: "M",
    sexo: "Masculino",
    temporada: "Invierno",
  },
  {
    imagen: "../imagenes/shorts.jpg",
    nombre: "Shorts",
    categoria: "Casual",
    precio: 30000,
    talla: "S",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/falda_lapiz.jpg",
    nombre: "Falda Lápiz",
    categoria: "Elegante",
    precio: 55000,
    talla: "S",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/camisa_hawaiana.jpg",
    nombre: "Camisa Hawaiana",
    categoria: "Casual",
    precio: 45000,
    talla: "M",
    sexo: "Masculino",
    temporada: "Verano",
  },
  {
    imagen: "../imagenes/vestido_playa.jpg",
    nombre: "Vestido de Playa",
    categoria: "Casual",
    precio: 65000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Verano",
  },
  {
    imagen: "../imagenes/chaqueta_punto.jpg",
    nombre: "Chaqueta de Punto",
    categoria: "Casual",
    precio: 70000,
    talla: "L",
    sexo: "Unisex",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/sombrero_paja.jpg",
    nombre: "Sombrero de Paja",
    categoria: "Accesorio",
    precio: 25000,
    talla: "Única",
    sexo: "Unisex",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/abrigo_cuadros.jpg",
    nombre: "Abrigo de Cuadros",
    categoria: "Casual",
    precio: 120000,
    talla: "M",
    sexo: "Unisex",
    temporada: "Invierno",
  },
  {
    imagen: "../imagenes/bata_baño.jpg",
    nombre: "Bata de Baño",
    categoria: "Casual",
    precio: 45000,
    talla: "L",
    sexo: "Unisex",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/polo_corta.jpg",
    nombre: "Polo Manga Corta",
    categoria: "Casual",
    precio: 35000,
    talla: "M",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/pantalon_pana.jpg",
    nombre: "Pantalón de Pana",
    categoria: "Casual",
    precio: 60000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/gorro_invierno.jpg",
    nombre: "Gorro de Invierno",
    categoria: "Casual",
    precio: 25000,
    talla: "Única",
    sexo: "Unisex",
    temporada: "Invierno",
  },
  {
    imagen: "../imagenes/blazer.jpg",
    nombre: "Blazer",
    categoria: "Elegante",
    precio: 90000,
    talla: "M",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/gorra_beisbol.jpg",
    nombre: "Gorra de Béisbol",
    categoria: "Deportivo",
    precio: 20000,
    talla: "Única",
    sexo: "Unisex",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/bermuda.jpg",
    nombre: "Bermuda",
    categoria: "Casual",
    precio: 40000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/camisa_larga.jpg",
    nombre: "Camisa Manga Larga",
    categoria: "Casual",
    precio: 45000,
    talla: "XL",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/hoodie.jpg",
    nombre: "Hoodie",
    categoria: "Casual",
    precio: 55000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/pantalon_slim.jpg",
    nombre: "Pantalón Slim",
    categoria: "Casual",
    precio: 70000,
    talla: "S",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/blusa_satin.jpg",
    nombre: "Blusa de Satín",
    categoria: "Elegante",
    precio: 48000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/chaqueta_bomber.jpg",
    nombre: "Chaqueta Bomber",
    categoria: "Deportivo",
    precio: 80000,
    talla: "L",
    sexo: "Masculino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/blusa_algodon.jpg",
    nombre: "Blusa de Algodón",
    categoria: "Casual",
    precio: 45000,
    talla: "M",
    sexo: "Femenino",
    temporada: "Uso general",
  },
  {
    imagen: "../imagenes/blusa_cropped.jpg",
    nombre: "Blusa Cropped",
    categoria: "Casual",
    precio: 40000,
    talla: "S",
    sexo: "Femenino",
    temporada: "Uso general",
  },
];
