// ============================================
// DATOS DE PRODUCTOS - CARTA COMPLETA ÉBANO
// ============================================

const productosData = {
    recomendados: {
        nombre: "🔥 Más Vendidos",
        descripcion: "Los platos que nuestros clientes más piden. Sabores que siempre triunfan.",
        esComida: true,
        fotos: [
            "fotos-ebano/mas vendidos/picada-para-1.jpg",
            "fotos-ebano/mas vendidos/desgranado-mixto.jpg",
            "fotos-ebano/mas vendidos/churrasco.jpg",
            "fotos-ebano/mas vendidos/1.jpg",
            "fotos-ebano/mas vendidos/2.jpg"
        ],
        productos: [
            {
                id: "picada-1",
                nombre: "Picada x 1",
                precio: 40000,
                descripcion: "Carne de res, cerdo, chicharrón, chorizo, costilla, papa criolla, plátano, arepa, limón. La experiencia Ébano para una persona.",
                tags: ["⭐ POPULAR", "🥂 INDIVIDUAL", "🍖 MIXTO"],
                foto: null
            },
            {
                id: "picada-2",
                nombre: "Picada x 2",
                precio: 76000,
                descripcion: "La experiencia completa para compartir. Carnes variadas, embutidos y acompañamientos en una tabla generosa.",
                tags: ["⭐ POPULAR", "🥂 PARA COMPARTIR", "🍖 MIXTO"],
                foto: null
            },
            {
                id: "desgranado-mixto",
                nombre: "Desgranado Mixto",
                precio: 30000,
                descripcion: "Carne desgranada jugosa con plátano frito y arepa fresca. El clásico que enamora. Perfecto para cualquier momento.",
                tags: ["⭐ FAVORITO", "🥩 CARNE", "🇨🇴 TRADICIONAL"],
                foto: null
            },
            {
                id: "churrasco",
                nombre: "Churrasco (250gr)",
                precio: 42000,
                descripcion: "Corte jugoso a la parrilla, marcado con limón y sal marina. Acompañado de plátano y arepa caliente.",
                tags: ["🥩 CARNE PREMIUM", "🔥 A LA PARRILLA", "⭐ TOP"],
                foto: null
            },
            {
                id: "picada-4-rec",
                nombre: "Picada x 4",
                precio: 160000,
                descripcion: "La experiencia Ébano para grupos. Generosa y completa, ideal para compartir en familia o amigos.",
                tags: ["⭐ POPULAR", "🥂 GRUPO", "🍖 MIXTO"],
                foto: null
            }
        ]
    },
    almuerzos: {
        nombre: "🍽️ Almuerzos del Fin de Semana",
        descripcion: "Especiales únicos disponibles solo los viernes, sábados y domingos. Experiencias completas para disfrutar con tiempo.",
        esComida: true,
        fotos: [
            "fotos-ebano/almuerzos/bandeja-paisa.jpg",
            "fotos-ebano/almuerzos/chuleta-carne-plancha.jpg",
            "fotos-ebano/almuerzos/sancholena.jpg",
            "fotos-ebano/almuerzos/tilapia-frita.jpg",
            "fotos-ebano/almuerzos/trucha-sierra.jpg"
        ],
        productos: [
            {
                id: "ejecutivo-finde",
                nombre: "Ejecutivo Fin de Semana",
                precio: 26000,
                descripcion: "Trucha Frita, Tilapia, Sierra, Chuleta o Carne a la Plancha. Incluye arroz, papas, plátano y bebida.",
                tags: ["⭐ ESPECIAL", "🍽️ COMPLETO", "💼 EJECUTIVO"],
                foto: null
            },
            {
                id: "bandeja-paisa",
                nombre: "Bandeja Paisa",
                precio: 40000,
                descripcion: "La tradición antiqueña en Ébano. Carne molida, huevo frito, arepa, frijoles refrito y plátano maduro. Una experiencia completa.",
                tags: ["🇨🇴 TRADICIÓN", "🥘 COMPLETA", "⭐ ICÓNICA"],
                foto: null
            },
            {
                id: "sancocho-leña",
                nombre: "Sancocho de Leña",
                precio: 35000,
                descripcion: "Caldo rico y sustancioso con carne, papa, yuca y plátano. Cocinado en leña para ese sabor auténtico de la región.",
                tags: ["🔥 HECHO EN LEÑA", "🥘 TRADICIONAL", "🌿 CÁLIDO"],
                foto: null
            },
            {
                id: "sobre-barriga",
                nombre: "Sobre Barriga",
                precio: 24000,
                descripcion: "Carne de res suave y jugosa, preparada con técnica tradicional. Sabroso y reconfortante.",
                tags: ["🥩 CARNE SUAVE", "🇨🇴 TRADICIONAL", "💛 CLÁSICO"],
                foto: null
            }
        ]
    },
    pescados: {
        nombre: "🌊 Pescados y Mariscos",
        descripcion: "Frescura del mar y ríos. Pescados y mariscos preparados con técnicas tradicionales y sabores auténticos.",
        esComida: true,
        fotos: [
            "fotos-ebano/pescados y mariscos/1.jpg",
            "fotos-ebano/pescados y mariscos/2.jpg",
            "fotos-ebano/pescados y mariscos/3.jpg",
            "fotos-ebano/pescados y mariscos/4.jpg",
            "fotos-ebano/pescados y mariscos/5.jpg"
        ],
        productos: [
            {
                id: "trucha-plancha",
                nombre: "Trucha a la Plancha",
                precio: 44000,
                descripcion: "Trucha fresca de agua fría, cocinada a la plancha con hierbas aromáticas. Delicada y sabrosa.",
                tags: ["🐟 AGUA FRÍA", "✨ DELICADA", "🌿 FRESCA"],
                foto: null
            },
            {
                id: "trucha-frita",
                nombre: "Trucha Frita",
                precio: 44000,
                descripcion: "Trucha fresca frita crujiente, tierna por dentro. Acompañada de limón y plátano frito.",
                tags: ["🐟 CRUJIENTE", "🍋 LIMÓN", "⭐ CLÁSICA"],
                foto: null
            },
            {
                id: "trucha-camarones",
                nombre: "Trucha con Camarones",
                precio: 48000,
                descripcion: "La combinación perfecta: trucha fresca con camarones tiernos. Dos sabores en armonía.",
                tags: ["🌊 MIXTO", "✨ PREMIUM", "👑 ESPECIAL"],
                foto: null
            },
            {
                id: "trucha-ajillo",
                nombre: "Trucha al Ajillo",
                precio: 44000,
                descripcion: "Trucha fresca en salsa de ajo, aceite de oliva y hierbas. Aromática y deliciosa.",
                tags: ["🧄 AJO FRESCO", "🌿 HIERBAS", "✨ AROMÁTICA"],
                foto: null
            },
            {
                id: "trucha-marinera",
                nombre: "Trucha Marinera",
                precio: 56000,
                descripcion: "Trucha preparada con salsa marinera, camarones y mariscos. Una experiencia marina completa.",
                tags: ["🌊 MARINERA", "👑 PREMIUM", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "mojarra-frita-500",
                nombre: "Mojarra Frita 500 grs",
                precio: 48000,
                descripcion: "Mojarra fresca de río, frita dorada y crujiente. Servida con limón, arepa y plátano.",
                tags: ["🐟 AGUA DULCE", "🍋 LIMÓN", "🇨🇴 TRADICIONAL"],
                foto: null
            },
            {
                id: "sierra-frita-500",
                nombre: "Sierra Frita 500 grs",
                precio: 50000,
                descripcion: "Pescado fresco del Eje Cafetero, frito crujiente, tierno adentro. Servido con limón y plátano frito.",
                tags: ["🌊 PESCADO FRESCO", "✨ LOCAL", "⭐ POPULAR"],
                foto: null
            },
            {
                id: "mojarra-sudada",
                nombre: "Mojarra Frita Sudada",
                precio: 50000,
                descripcion: "Mojarra fresca cocida lentamente en su propio jugo con tomate, cebolla y cilantro. Sabor auténtico del agua dulce.",
                tags: ["🌊 PESCADO AGUA DULCE", "🍅 SALSA CASERA", "✨ CLÁSICO"],
                foto: null
            },
            {
                id: "bagre-sencillo",
                nombre: "Bagre Sencillo",
                precio: 45000,
                descripcion: "Bagre fresco frito, simple pero delicioso. Acompañado de limón, arepa y plátano frito.",
                tags: ["🌊 PESCADO FRESCO", "🍋 LIMÓN", "🇨🇴 TRADICIONAL"],
                foto: null
            },
            {
                id: "bagre-camarones",
                nombre: "Bagre con Camarones",
                precio: 50000,
                descripcion: "La mejor combinación: bagre fresco con camarones tiernos. Dos sabores en una explosión de gusto.",
                tags: ["🌊 MIXTO MARINO", "👑 PREMIUM", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "bagre-salsa",
                nombre: "Bagre en Salsa",
                precio: 40000,
                descripcion: "Bagre fresco del río, cocido lentamente en salsa de tomate, cebolla y cilantro. Sabor profundo y auténtico.",
                tags: ["🌊 AGUA DULCE", "🍅 EN SALSA", "🇨🇴 CLÁSICO"],
                foto: null
            },
            {
                id: "arroz-camarones",
                nombre: "Arroz con Camarones",
                precio: 46000,
                descripcion: "Arroz aromático con camarones frescos, especias y hierbas. Sabroso y contundente.",
                tags: ["🌊 CAMARONES FRESCOS", "🍚 ARROZ", "✨ SABROSO"],
                foto: null
            },
            {
                id: "arroz-pulpo-camaron",
                nombre: "Arroz con Pulpo y Camarón",
                precio: 48000,
                descripcion: "Arroz con pulpo tierno y camarones frescos. Una combinación marina excepcional.",
                tags: ["🌊 MARISCOS", "👑 PREMIUM", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "arroz-mejillones-camaron",
                nombre: "Arroz con Mejillones y Camarones",
                precio: 48000,
                descripcion: "Arroz con mejillones frescos y camarones jugosos. Sabor de mar puro.",
                tags: ["🌊 FRESCOS DEL MAR", "🌿 HIERBAS", "✨ EXÓTICO"],
                foto: null
            },
            {
                id: "arroz-marinera",
                nombre: "Arroz a la Marinera",
                precio: 54000,
                descripcion: "El pico de la experiencia marina: camarones, mejillones, pulpo y pescado en arroz. Todo en un plato.",
                tags: ["👑 PREMIUM MARINO", "🌊 MIXTO", "✨ EXPERIENCIA"],
                foto: null
            },
            {
                id: "espaguetis-camarones",
                nombre: "Espaguetis con Camarones",
                precio: 46000,
                descripcion: "Pasta al dente con camarones frescos, ajo, limón y un toque de aceite de oliva. Italiano con sabor ébano.",
                tags: ["🍝 PASTA FRESCA", "🌊 CAMARONES", "🇮🇹 FUSIÓN"],
                foto: null
            },
            {
                id: "espaguetis-mariscos",
                nombre: "Espaguetis con Mariscos",
                precio: 50000,
                descripcion: "Pasta con mix de mariscos frescos: camarones, mejillones y pulpo. Sabor mediterráneo.",
                tags: ["🍝 PASTA", "🌊 MARISCOS MIXTOS", "✨ PREMIUM"],
                foto: null
            },
            {
                id: "espaguetis-mejillones-camaron",
                nombre: "Espaguetis con Mejillones y Camarones",
                precio: 46000,
                descripcion: "Pasta con mejillones y camarones en salsa cremosa. Delicioso y reconfortante.",
                tags: ["🍝 PASTA", "🌊 MARISCOS", "✨ CREMOSO"],
                foto: null
            },
            {
                id: "espaguetis-anillos-camaron",
                nombre: "Espaguetis con Anillos y Camarones",
                precio: 46000,
                descripcion: "Pasta con anillos de calamar y camarones frescos. Texturas y sabores del mar.",
                tags: ["🍝 PASTA", "🌊 CALAMAR", "✨ TEXTURA"],
                foto: null
            },
            {
                id: "cazuela-mariscos",
                nombre: "Cazuela de Mariscos",
                precio: 55000,
                descripcion: "Mix de mariscos frescos en caldo aromático. Cálido, sabroso y reconfortante.",
                tags: ["🌊 MARISCOS MIXTOS", "🍲 CAZUELA", "✨ PREMIUM"],
                foto: null
            },
            {
                id: "cazuela-camarones",
                nombre: "Cazuela de Camarones",
                precio: 48000,
                descripcion: "Camarones frescos en caldo marino con hierbas aromáticas. Delicioso y reconfortante.",
                tags: ["🌊 CAMARONES FRESCOS", "🍲 CAZUELA", "🌿 HIERBAS"],
                foto: null
            }
        ]
    },
    especiales: {
        nombre: "👑 Especiales",
        descripcion: "Nuestros platos premium. Preparaciones especiales que destacan por su calidad y sabor.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "salmon-plancha",
                nombre: "Salmón a la Plancha",
                precio: 48000,
                descripcion: "Salmón fresco cocinado a la plancha con hierbas aromáticas. Delicado y sabroso.",
                tags: ["👑 PREMIUM", "🐟 SALMÓN", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "salmon-ajillo",
                nombre: "Salmón al Ajillo",
                precio: 50000,
                descripcion: "Salmón fresco en salsa de ajo y aceite de oliva. Aromático y exquisito.",
                tags: ["👑 PREMIUM", "🧄 AJO", "✨ AROMÁTICO"],
                foto: null
            },
            {
                id: "salmon-camaron",
                nombre: "Salmón con Camarón",
                precio: 56000,
                descripcion: "Salmón fresco con camarones tiernos. La combinación premium del mar.",
                tags: ["👑 PREMIUM", "🌊 MIXTO", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "salmon-marinera",
                nombre: "Salmón a la Marinera",
                precio: 64000,
                descripcion: "Salmón preparado con salsa marinera y mariscos. La experiencia más premium.",
                tags: ["👑 PREMIUM", "🌊 MARINERA", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "langostinos-ajillo",
                nombre: "Langostinos al Ajillo",
                precio: 48000,
                descripcion: "Langostinos frescos en salsa de ajo, limón y hierbas. Exquisito y aromático.",
                tags: ["👑 PREMIUM", "🌊 LANGOSTINOS", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "langostinos-apanados",
                nombre: "Langostinos Apanados",
                precio: 46000,
                descripcion: "Langostinos empanizados, crujientes por fuera, tiernos por dentro. Deliciosos.",
                tags: ["👑 PREMIUM", "🌊 LANGOSTINOS", "🍞 APANADOS"],
                foto: null
            },
            {
                id: "camarones-ajillo",
                nombre: "Camarones al Ajillo",
                precio: 46000,
                descripcion: "Camarones frescos saltados con ajo, limón y un toque de mantequilla. Servido con arroz blanco.",
                tags: ["🌊 CAMARONES FRESCOS", "🧂 MANTEQUILLA", "✨ PREMIUM"],
                foto: null
            },
            {
                id: "camarones-apanados",
                nombre: "Camarones Apanados",
                precio: 40000,
                descripcion: "Camarones empanizados, dorados y crujientes. Perfectos para compartir o disfrutar solo.",
                tags: ["🌊 CAMARONES", "🍞 APANADOS", "✨ CRUJIENTES"],
                foto: null
            },
            {
                id: "churrasco-marinero",
                nombre: "Churrasco Marinero",
                precio: 55000,
                descripcion: "Churrasco a la parrilla acompañado de mariscos frescos. Tierra y mar en un plato.",
                tags: ["🥩 CARNE", "🌊 MARISCOS", "👑 PREMIUM"],
                foto: null
            },
            {
                id: "punta-anca",
                nombre: "Punta de Anca (250GR)",
                precio: 42000,
                descripcion: "Corte premium de res a la parrilla. Jugoso, tierno y lleno de sabor.",
                tags: ["🥩 CARNE PREMIUM", "🔥 A LA PARRILLA", "✨ ESPECIAL"],
                foto: null
            },
            {
                id: "punta-anca-marinera",
                nombre: "Punta de Anca Marinera",
                precio: 55000,
                descripcion: "Punta de anca premium con mariscos frescos. La combinación perfecta.",
                tags: ["🥩 CARNE PREMIUM", "🌊 MARISCOS", "👑 PREMIUM"],
                foto: null
            }
        ]
    },
    carnes: {
        nombre: "🍖 Carnes y Parrillas",
        descripcion: "Cortes premium, carnes preparadas con esmero. El sabor robusto que caracteriza a Ébano.",
        fotos: [
            "fotos-ebano/carnes y parrillas/1.jpg",
            "fotos-ebano/carnes y parrillas/2.jpg",
            "fotos-ebano/carnes y parrillas/3.jpg",
            "fotos-ebano/carnes y parrillas/5.jpg",
            "fotos-ebano/carnes y parrillas/6.jpg"
        ],
        productos: [
            {
                id: "churrasco-250",
                nombre: "Churrasco (250gr)",
                precio: 42000,
                descripcion: "Corte de carne roja jugosa, a la parrilla con toque de limón. La opción que enamora.",
                tags: ["🥩 CARNE PREMIUM", "🔥 A LA PARRILLA", "⭐ TOP"],
                foto: null
            },
            {
                id: "costillas-san-luis",
                nombre: "Costillas San Luis",
                precio: 49000,
                descripcion: "Costillas de cerdo a la parrilla, jugosas y sabrosas. Para chuparse los dedos.",
                tags: ["🐷 COSTILLAS", "🔥 A LA PARRILLA", "✨ SABROSAS"],
                foto: null
            },
            {
                id: "filete-pollo-cerdo",
                nombre: "Filete de Pollo o Cerdo a la Parrilla",
                precio: 40000,
                descripcion: "Filete jugoso a la parrilla. Elige entre pollo o cerdo, ambos deliciosos.",
                tags: ["🔥 A LA PARRILLA", "🥩 CARNE", "✨ JUGOSO"],
                foto: null
            },
            {
                id: "chuletas",
                nombre: "Chuletas",
                precio: 40000,
                descripcion: "Chuletas a la parrilla. Elige entre pollo, cerdo o pescado. Todas deliciosas.",
                tags: ["🔥 A LA PARRILLA", "🥩 CARNE", "✨ VARIEDAD"],
                foto: null
            },
            {
                id: "parrillada",
                nombre: "Parrillada",
                precio: 48000,
                descripcion: "Carne de res, cerdo, pollo, 1 chorizo, ensalada, arepa y papas (400 gr). Todo en un plato.",
                tags: ["🔥 PARRILLA", "🍖 MIXTO", "✨ COMPLETA"],
                foto: null
            },
            {
                id: "picada-1",
                nombre: "Picada x 1",
                precio: 40000,
                descripcion: "Carne de res, cerdo, chicharrón, chorizo, costilla, papa criolla, plátano, arepa, limón. Para una persona.",
                tags: ["⭐ POPULAR", "🥂 INDIVIDUAL", "🍖 MIXTO"],
                foto: null
            },
            {
                id: "picada-2",
                nombre: "Picada x 2",
                precio: 76000,
                descripcion: "La experiencia completa para compartir. Carnes variadas, embutidos y acompañamientos.",
                tags: ["⭐ POPULAR", "🥂 PARA COMPARTIR", "🍖 MIXTO"],
                foto: null
            },
            {
                id: "picada-4",
                nombre: "Picada x 4",
                precio: 160000,
                descripcion: "La experiencia Ébano para grupos. Generosa y completa, ideal para compartir en familia o amigos.",
                tags: ["⭐ POPULAR", "🥂 GRUPO", "🍖 MIXTO"],
                foto: null
            }
        ]
    },
    desgranados: {
        nombre: "🥩 Desgranados",
        descripcion: "Carnes deshilachadas con especias tradicionales. El sabor auténtico colombiano en cada bocado.",
        esComida: true,
        fotos: [
            "fotos-ebano/desgranadod/desgranado mixto.jpg"
        ],
        productos: [
            {
                id: "desgranado-pollo",
                nombre: "Desgranado de Pollo",
                precio: 28000,
                descripcion: "Pollo desgranado marinado en especias, servido con plátano frito y arepa. Ligero pero sabroso.",
                tags: ["🍗 POLLO", "💨 LIGERO", "🔥 ESPECIADO"],
                foto: null
            },
            {
                id: "desgranado-cerdo",
                nombre: "Desgranado de Cerdo",
                precio: 28000,
                descripcion: "Cerdo tierno desgranado con puntas crujientes. Jugoso y lleno de sabor regional.",
                tags: ["🐷 CERDO FRESCO", "🔥 DESGRANADO", "🇨🇴 TRADICIÓN"],
                foto: null
            },
            {
                id: "desgranado-chicharron",
                nombre: "Desgranado de Chicharrón",
                precio: 24000,
                descripcion: "Carne de cerdo deshilachada con crujientes de chicharrón. La combinación perfecta de texturas.",
                tags: ["🐷 CERDO CRUJIENTE", "✨ TEXTURA", "🍖 CONTUNDENTE"],
                foto: null
            },
            {
                id: "desgranado-mixto",
                nombre: "Desgranado Mixto",
                precio: 30000,
                descripcion: "Carne desgranada jugosa con plátano frito y arepa fresca. El clásico que enamora.",
                tags: ["⭐ FAVORITO", "🥩 MIXTO", "🇨🇴 TRADICIONAL"],
                foto: null
            }
        ]
    },
    chicharrones: {
        nombre: "🐷 Chicharrones",
        descripcion: "Crujientes, dorados y deliciosos. El chicharrón preparado de distintas formas para todos los gustos.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "chicharron-patacones",
                nombre: "Chicharrón con Patacones",
                precio: 28000,
                descripcion: "Chicharrón crujiente acompañado de patacones dorados. Textura y sabor en cada bocado.",
                tags: ["🐷 CERDO CRUJIENTE", "🍌 PATACONES", "✨ TEXTURA"],
                foto: null
            },
            {
                id: "coctel-chicharron",
                nombre: "Coctel de Chicharrón",
                precio: 30000,
                descripcion: "Chicharrón en porciones para picar. Crujiente y sabroso, perfecto para compartir.",
                tags: ["🐷 CERDO CRUJIENTE", "🥂 PARA COMPARTIR", "✨ COCTEL"],
                foto: null
            },
            {
                id: "chicharron-bbq",
                nombre: "Chicharrón Ébano en Salsa BBQ",
                precio: 34000,
                descripcion: "Chicharrón crujiente bañado en nuestra salsa BBQ especial. Dulce, ácido y delicioso.",
                tags: ["🐷 CERDO CRUJIENTE", "🔥 BBQ", "✨ ESPECIAL"],
                foto: null
            }
        ]
    },
    tardeando: {
        nombre: "☕ Para Tardear",
        descripcion: "Opciones perfectas para la tarde. Platillos ideales para compartir o disfrutar solo.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "chorizo-arepa",
                nombre: "Chorizo con Arepa",
                precio: 28000,
                descripcion: "Chorizo a la parrilla jugoso con arepa caliente. Clásico y delicioso.",
                tags: ["🔥 PARRILLA", "🥖 AREPA", "✨ CLÁSICO"],
                foto: null
            },
            {
                id: "arepa-carne-desmechada",
                nombre: "Arepa con Carne Desmechada",
                precio: 24000,
                descripcion: "Arepa caliente recién hecha, rellena de carne desmechada tierna y jugosa. Simplicidad que enamora.",
                tags: ["🥖 AREPA FRESCA", "🥩 CARNE MECHADA", "💛 COLOMBIANA"],
                foto: null
            },
            {
                id: "alitas-barbiquiu",
                nombre: "Alitas Barbiquiu",
                precio: 28000,
                descripcion: "Alitas de pollo bañadas en salsa barbiquiu. Jugosas, especiadas y deliciosas.",
                tags: ["🍗 POLLO", "🔥 BBQ", "✨ ESPECIADO"],
                foto: null
            },
            {
                id: "costillas-miel",
                nombre: "Costillas a la Miel",
                precio: 30000,
                descripcion: "Costillas de cerdo glaseadas con miel. Dulces, jugosas e irresistibles.",
                tags: ["🐷 COSTILLAS", "🍯 MIEL", "✨ DULCE"],
                foto: null
            },
            {
                id: "papas-ebano",
                nombre: "Papas Ébano",
                precio: 34000,
                descripcion: "Papas especiales preparadas con nuestro toque único. Crispy y deliciosas.",
                tags: ["🍟 PAPAS", "✨ ESPECIAL", "⭐ EXCLUSIVO"],
                foto: null
            },
            {
                id: "quesadilla",
                nombre: "Quesadilla de Pollo o Carne",
                precio: 22000,
                descripcion: "Tortilla con queso derretido y pollo o carne. Deliciosa y contundente.",
                tags: ["🧀 QUESO", "🥩 CARNE", "✨ DERRETIDO"],
                foto: null
            },
            {
                id: "chuzo",
                nombre: "Chuzo de Cerdo / Pollo / Res",
                precio: 26000,
                descripcion: "Brochetas de carne a la parrilla. Elige entre cerdo, pollo o res.",
                tags: ["🔥 PARRILLA", "🥩 CARNE", "✨ BROCHETA"],
                foto: null
            }
        ]
    },
    hamburguesas: {
        nombre: "🍔 Hamburguesas",
        descripcion: "Hamburguesas artesanales con los mejores ingredientes. Jugosas, sabrosas y deliciosas.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "hamburguesa-artesanal",
                nombre: "Hamburguesa Artesanal",
                precio: 22000,
                descripcion: "Hamburguesa de carne jugosa, queso, lechuga, tomate y salsas especiales. El clásico perfeccionado.",
                tags: ["🍔 ARTESANAL", "🥩 CARNE", "⭐ CLÁSICA"],
                foto: null
            },
            {
                id: "hamburguesa-doble",
                nombre: "Hamburguesa Artesanal Doble",
                precio: 30000,
                descripcion: "Doble carne, doble queso, doble sabor. Para los más hambrientos.",
                tags: ["🍔 ARTESANAL", "🥩 DOBLE", "💪 CONTUNDENTE"],
                foto: null
            },
            {
                id: "hamburguesa-especial",
                nombre: "Hamburguesa Especial",
                precio: 26000,
                descripcion: "Nuestra hamburguesa premium con ingredientes especiales. Una experiencia completa.",
                tags: ["🍔 ESPECIAL", "👑 PREMIUM", "✨ EXCLUSIVA"],
                foto: null
            }
        ]
    },
    entradas: {
        nombre: "🥟 Entradas",
        descripcion: "Aperitivos para abrir el apetito. Pequeños placeres que anticipan lo mejor.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "empanadas-x5",
                nombre: "Empanadas x 5",
                precio: 20000,
                descripcion: "Masa crujiente rellena de carne picada, queso y papa. Cinco piezas de puro antojo.",
                tags: ["🥟 MASA CRUJIENTE", "🧀 QUESO", "🍖 CARNE"],
                foto: null
            },
            {
                id: "arepitas-guiso",
                nombre: "Arepitas con Guiso",
                precio: 14000,
                descripcion: "Mini arepas calientes rellenas de guiso. Bocados perfectos de sabor.",
                tags: ["🥖 AREPA MINI", "🍲 GUISO", "💛 PARA PICAR"],
                foto: null
            },
            {
                id: "patacon-guiso",
                nombre: "Patacón con Guiso",
                precio: 18000,
                descripcion: "Plátano frito en dos rondas, aplastado en el medio. Relleno de guiso casero recién hecho.",
                tags: ["🍌 PLÁTANO FRITO", "🍲 GUISO", "🇨🇴 AUTÉNTICO"],
                foto: null
            }
        ]
    },
    adicionales: {
        nombre: "🍜 Acompañamientos y Adicionales",
        descripcion: "El complemento perfecto. Acompañamientos que elevan cada plato a otro nivel.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "arroz-blanco",
                nombre: "Arroz Blanco",
                precio: 5000,
                descripcion: "Arroz blanco esponjoso, cocido al punto. El acompañante clásico de todo.",
                tags: ["🍚 ARROZ FRESCO", "⚪ BLANCO", "🍽️ BÁSICO"],
                foto: null
            },
            {
                id: "arroz-coco",
                nombre: "Arroz de Coco",
                precio: 6000,
                descripcion: "Arroz cocido en leche de coco fresco, suave y aromático. El toque tropical.",
                tags: ["🥥 COCO FRESCO", "🍚 AROMÁTICO", "🌴 TROPICAL"],
                foto: null
            },
            {
                id: "sopa-pescado",
                nombre: "Sopa de Pescado",
                precio: 12000,
                descripcion: "Caldo reconfortante con trozos de pescado fresco, papa, yuca y plátano. El confort en un plato.",
                tags: ["🍜 SOPA CALIENTE", "🌊 PESCADO FRESCO", "💛 RECONFORTANTE"],
                foto: null
            },
            {
                id: "papas-fritas",
                nombre: "Papas Fritas",
                precio: 10000,
                descripcion: "Papas crujientes por fuera, suaves por dentro. El acompañamiento perfecto.",
                tags: ["🍟 CRUJIENTES", "🥔 PAPAS", "🍽️ ACOMPAÑANTE"],
                foto: null
            },
            {
                id: "patacon-carne-mechada",
                nombre: "Patacón con Carne Mechada",
                precio: 7960,
                descripcion: "Plátano crujiente relleno de carne tierna y jugosa. Doble textura, doble gusto.",
                tags: ["🍌 PLÁTANO", "🥩 MECHADA", "✨ TEXTURA"],
                foto: null
            },
            {
                id: "arepa-carne-mechada",
                nombre: "Arepa con Carne Mechada",
                precio: 4884,
                descripcion: "Arepa caliente recién hecha, rellena de carne deshilachada tierna. Simplicidad que cautiva.",
                tags: ["🥖 AREPA FRESCA", "🥩 MECHADA", "💛 COLOMBIANA"],
                foto: null
            }
        ]
    },
    menuinfantil: {
        nombre: "🧒 Menú Infantil",
        descripcion: "Opciones especiales para los más pequeños. Deliciosas y pensadas para ellos.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "nuggets-pollo",
                nombre: "Nuggets de Pollo",
                precio: 26000,
                descripcion: "Pollo empanizado crujiente, dorado perfecto. Los favoritos de todos, a cualquier edad.",
                tags: ["🍗 POLLO CRUJIENTE", "🧒 FAVORITO", "💛 CLÁSICO"],
                foto: null
            },
            {
                id: "filete-pollo-parrilla",
                nombre: "Filete de Pollo a la Parrilla",
                precio: 26000,
                descripcion: "Filete de pollo a la parrilla, jugoso y suave. Perfecto para los niños.",
                tags: ["🍗 POLLO", "🔥 PARRILLA", "🧒 INFANTIL"],
                foto: null
            },
            {
                id: "choripapa",
                nombre: "Choripapa",
                precio: 24000,
                descripcion: "Chorizo con papas fritas. Simple, delicioso y siempre un éxito.",
                tags: ["🍖 CHORIZO", "🍟 PAPAS", "🧒 INFANTIL"],
                foto: null
            }
        ]
    },
    postres: {
        nombre: "🍰 Postres",
        descripcion: "El final perfecto. Postres caseros para cerrar la experiencia con dulzura.",
        esComida: true,
        fotos: [],
        productos: [
            {
                id: "torta",
                nombre: "Porción de Torta",
                precio: 14000,
                descripcion: "Porción generosa de torta casera. El dulce que siempre apetece.",
                tags: ["🍰 TORTA", "✨ CASERA", "💛 DULCE"],
                foto: null
            },
            {
                id: "helado",
                nombre: "Copa de Helado",
                precio: 16000,
                descripcion: "Copa con helado cremoso. Refrescante y delicioso.",
                tags: ["🍦 HELADO", "🧊 FRÍO", "💛 CREMOSO"],
                foto: null
            }
        ]
    },
    bebidas: {
        nombre: "🥤 Bebidas",
        descripcion: "Refrescantes, cálidas, frías o calientes. Bebidas para acompañar cada momento en Ébano.",
        esComida: false, // Para aplicar humo frío
        fotos: [
            "fotos-ebano/bebidas/1.jpg",
            "fotos-ebano/bebidas/2.jpg",
            "fotos-ebano/bebidas/3.jpg",
            "fotos-ebano/bebidas/4.jpg",
            "fotos-ebano/bebidas/5.jpg",
            "fotos-ebano/bebidas/6.jpg",
            "fotos-ebano/bebidas/7.jpg",
            "fotos-ebano/bebidas/8.jpg"
        ],
        productos: [
            // LIMONADAS
            {
                id: "limonada-hierbabuena",
                nombre: "Limonada Hierbabuena",
                precio: 14000,
                descripcion: "Limón fresco con hierbabuena. Refrescante y aromática.",
                tags: ["🍋 LIMÓN", "🌿 HIERBABUENA", "🥤 REFRESCANTE"],
                foto: null,
                subcategoria: "Limonadas"
            },
            {
                id: "limonada-mangobiche",
                nombre: "Limonada Mangobiche",
                precio: 14000,
                descripcion: "Limón con mango biche. Ácida, refrescante y única.",
                tags: ["🍋 LIMÓN", "🥭 MANGO", "🥤 REFRESCANTE"],
                foto: null,
                subcategoria: "Limonadas"
            },
            {
                id: "limonada-coco",
                nombre: "Limonada Coco",
                precio: 14000,
                descripcion: "Coco fresco rallado, limón y un toque de agua helada. La refrescancia tropical.",
                tags: ["🥥 COCO FRESCO", "🥤 REFRESCANTE", "🌴 TROPICAL"],
                foto: null,
                subcategoria: "Limonadas"
            },
            {
                id: "limonada-cherry",
                nombre: "Limonada Cherry",
                precio: 14000,
                descripcion: "Fresca, refrescante, hecha al momento. El sabor frutal que acompaña perfectamente.",
                tags: ["🍒 CHERRY", "🥤 FRESCA", "✨ FRUTAL"],
                foto: null,
                subcategoria: "Limonadas"
            },
            {
                id: "limonada-natural",
                nombre: "Limonada Natural",
                precio: 10000,
                descripcion: "Limón fresco exprimido, agua fría, punto justo de azúcar. Lo clásico, perfeccionado.",
                tags: ["🍋 LIMÓN FRESCO", "🥤 NATURAL", "⚪ CLÁSICA"],
                foto: null,
                subcategoria: "Limonadas"
            },
            // JUGOS NATURALES
            {
                id: "jugo-agua",
                nombre: "Jugo Natural en Agua",
                precio: 12000,
                descripcion: "Jugo recién exprimido en agua fría. Mango, Maracayá, Guanábana o Mora. Elige tu favorito.",
                tags: ["🍊 FRUTAS FRESCAS", "🥤 NATURAL", "💨 REFRESCANTE"],
                foto: null,
                subcategoria: "Jugos Naturales"
            },
            {
                id: "jugo-leche",
                nombre: "Jugo Natural en Leche",
                precio: 14000,
                descripcion: "Mismo jugo fresco, pero en leche fría cremosa. Más suave, más nutritivo.",
                tags: ["🍊 FRUTAS FRESCAS", "🥛 LECHE", "✨ CREMOSO"],
                foto: null,
                subcategoria: "Jugos Naturales"
            },
            // SODAS Y BEBIDAS FRÍAS
            {
                id: "soda-frutos-rojos",
                nombre: "Soda Frutos Rojos",
                precio: 16000,
                descripcion: "Bebida refrescante con sabor a frutos rojos, fría y burbujeante. La energía en un vaso.",
                tags: ["🍓 FRUTOS ROJOS", "🥤 EFERVESCENTE", "⚡ ENERGÍA"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "soda-frutos-amarillos",
                nombre: "Soda Frutos Amarillos",
                precio: 16000,
                descripcion: "Mango, piña, maracuyá. Los sabores cálidos en forma refrescante. Tropical puro.",
                tags: ["🥭 FRUTAS AMARILLAS", "🥤 EFERVESCENTE", "🌴 TROPICAL"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "frappe-cafe",
                nombre: "Frappé de Café",
                precio: 14000,
                descripcion: "Café helado batido con hielo y espuma. Frío pero con cafeína.",
                tags: ["☕ CAFÉ HELADO", "🧊 FRAPPE", "⚡ ENERGÍA"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "frappe-milo",
                nombre: "Frappé de Milo",
                precio: 12000,
                descripcion: "Milo helado batido con hielo. Delicioso y energizante.",
                tags: ["☕ MILO", "🧊 FRAPPE", "⚡ ENERGÍA"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "te-chai-frio",
                nombre: "Té Chai",
                precio: 14000,
                descripcion: "Té chai especiado. Aromático y reconfortante.",
                tags: ["🍵 TÉ CHAI", "🌿 ESPECIAS", "✨ AROMÁTICO"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "capuchino-frio",
                nombre: "Capuchino",
                precio: 12000,
                descripcion: "Café espresso con leche vaporizada y espuma. Cremoso y perfecto.",
                tags: ["☕ CAFÉ PREMIUM", "🥛 LECHE", "✨ CREMOSO"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "malteadas",
                nombre: "Malteadas",
                precio: 12000,
                descripcion: "Batido cremoso y helado. Delicioso y refrescante.",
                tags: ["🥤 MALTEADA", "🧊 FRÍA", "✨ CREMOSA"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "postobon",
                nombre: "Postobón",
                precio: 6000,
                descripcion: "Bebida refrescante colombiana. El clásico que no falla.",
                tags: ["🥤 REFRESCANTE", "🇨🇴 COLOMBIANA", "⚪ CLÁSICA"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            {
                id: "coca-cola",
                nombre: "Coca Cola",
                precio: 7000,
                descripcion: "El clásico refrescante que lo acompaña todo. Frío y burbujeante.",
                tags: ["🥤 REFRESCANTE", "⚫ CLÁSICA", "🍷 BEBIDA"],
                foto: null,
                subcategoria: "Sodas y Bebidas Frías"
            },
            // CERVEZAS
            {
                id: "aguila-light",
                nombre: "Águila Light",
                precio: 8000,
                descripcion: "Cerveza ligera y refrescante. El sabor que no aburre nunca.",
                tags: ["🍺 CERVEZA LIGERA", "💨 REFRESCANTE", "📍 PREFERIDA"],
                foto: null,
                subcategoria: "Cervezas"
            },
            {
                id: "poker",
                nombre: "Poker",
                precio: 8000,
                descripcion: "Cerveza clásica colombiana con sabor fuerte y auténtico.",
                tags: ["🍺 CERVEZA FUERTE", "🇨🇴 COLOMBIANA", "🍺 CLÁSICA"],
                foto: null,
                subcategoria: "Cervezas"
            },
            {
                id: "club-colombia",
                nombre: "Club Colombia",
                precio: 10000,
                descripcion: "La cerveza del momento. Fresca, con cuerpo, irresistible.",
                tags: ["🍺 CERVEZA PREMIUM", "🇨🇴 COLOMBIANA", "⭐ FAVORITA"],
                foto: null,
                subcategoria: "Cervezas"
            },
            {
                id: "corona",
                nombre: "Corona",
                precio: 12000,
                descripcion: "Cerveza lager internacional, suave y refrescante. Con limón es ley.",
                tags: ["🍺 CERVEZA LAGER", "🌍 INTERNACIONAL", "🍋 CON LIMÓN"],
                foto: null,
                subcategoria: "Cervezas"
            },
            {
                id: "michelado",
                nombre: "Vaso Michelado",
                precio: 5000,
                descripcion: "Cerveza o bebida alcohólica en vaso frío con sal en el borde. El clásico refrescante.",
                tags: ["🍺 CERVEZA", "🥤 MICHELADA", "🧂 CON SAL"],
                foto: null,
                subcategoria: "Cervezas"
            },
            // BEBIDAS CALIENTES
            {
                id: "milo-caliente",
                nombre: "Milo",
                precio: 14000,
                descripcion: "Milo caliente en leche. El confort en una taza, momento de calidez.",
                tags: ["☕ BEBIDA CALIENTE", "🥛 LECHE", "💛 CLÁSICO"],
                foto: null,
                subcategoria: "Bebidas Calientes"
            },
            {
                id: "cafe-leche",
                nombre: "Café con Leche",
                precio: 10000,
                descripcion: "Café tinto colombiano con leche caliente. El desayuno perfecto.",
                tags: ["☕ CAFÉ COLOMBIANO", "🥛 LECHE", "🌅 DESAYUNO"],
                foto: null,
                subcategoria: "Bebidas Calientes"
            },
            {
                id: "chocolate-leche",
                nombre: "Chocolate en Leche",
                precio: 10000,
                descripcion: "Chocolate artesanal derretido en leche caliente. Puro placer de infancia.",
                tags: ["🍫 CHOCOLATE", "🥛 LECHE", "💛 CLÁSICO"],
                foto: null,
                subcategoria: "Bebidas Calientes"
            },
            {
                id: "capuchino-caliente",
                nombre: "Capuchino",
                precio: 15000,
                descripcion: "Café espresso con leche vaporizada y espuma. Cremoso, cálido, perfecto.",
                tags: ["☕ CAFÉ PREMIUM", "🥛 LECHE", "✨ CREMOSO"],
                foto: null,
                subcategoria: "Bebidas Calientes"
            }
        ]
    }
};

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(precio);
}

function esFinDeSemana() {
    const hoy = new Date();
    const dia = hoy.getDay();
    return dia === 5 || dia === 6 || dia === 0; // Viernes=5, Sábado=6, Domingo=0
}

// ============================================
// GESTIÓN DE PANTALLAS
// ============================================

const welcomeScreen = document.getElementById('welcome-screen');
const menuScreen = document.getElementById('menu-screen');
const welcomeForm = document.getElementById('welcome-form');
const clientNameInput = document.getElementById('client-name-input');
const clientNameDisplay = document.getElementById('client-name-display');
const changeNameBtn = document.getElementById('change-name-btn');

// Cargar nombre guardado
function cargarNombre() {
    const nombreGuardado = localStorage.getItem('clientName');
    if (nombreGuardado) {
        mostrarMenu(nombreGuardado);
    }
}

// Mostrar menú
function mostrarMenu(nombre) {
    clientNameDisplay.textContent = nombre;
    welcomeScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
    inicializarMenu();
}

// Cambiar nombre
function cambiarNombre() {
    localStorage.removeItem('clientName');
    menuScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    clientNameInput.value = '';
    clientNameInput.focus();
}

// Validación mejorada del formulario
function validarNombre(nombre) {
    const errorEl = document.getElementById('name-error');
    nombre = nombre.trim();
    
    if (nombre.length < 2) {
        errorEl.textContent = 'El nombre debe tener al menos 2 caracteres';
        clientNameInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    
    if (nombre.length > 50) {
        errorEl.textContent = 'El nombre es demasiado largo';
        clientNameInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    
    // Sanitizar nombre (eliminar caracteres peligrosos)
    const sanitizado = nombre.replace(/[<>]/g, '');
    if (sanitizado !== nombre) {
        errorEl.textContent = 'El nombre contiene caracteres inválidos';
        clientNameInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    
    errorEl.textContent = '';
    clientNameInput.setAttribute('aria-invalid', 'false');
    return true;
}

// Event listeners
welcomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = clientNameInput.value.trim();
    if (validarNombre(nombre)) {
        localStorage.setItem('clientName', nombre);
        mostrarMenu(nombre);
    }
});

clientNameInput.addEventListener('input', () => {
    if (clientNameInput.value.trim().length > 0) {
        validarNombre(clientNameInput.value);
    } else {
        document.getElementById('name-error').textContent = '';
    }
});

changeNameBtn.addEventListener('click', cambiarNombre);

// Cargar al iniciar
cargarNombre();

// ============================================
// NAVEGACIÓN DE CATEGORÍAS
// ============================================

let categoryTabs;
let categoryContent;
let tabAlmuerzos;

// Ocultar/mostrar tab de almuerzos según día
function actualizarTabAlmuerzos() {
    if (!tabAlmuerzos) {
        tabAlmuerzos = document.getElementById('tab-almuerzos');
    }
    
    // El tab siempre está visible, pero el contenido cambia según el día
    // No ocultamos el tab, solo mostramos mensaje si no es fin de semana
    if (tabAlmuerzos) {
        tabAlmuerzos.style.display = '';
    }
}

// Renderizar productos con indicador de carga
function renderizarProductos(categoriaKey) {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!categoryContent) {
        categoryContent = document.getElementById('category-content');
    }
    const searchResults = document.getElementById('search-results');
    
    // Ocultar resultados de búsqueda
    searchResults.classList.add('hidden');
    
    // Mostrar indicador de carga
    loadingIndicator.classList.remove('hidden');
    categoryContent.classList.add('hidden');
    
    // Simular delay mínimo para mejor UX
    setTimeout(() => {
        const categoria = productosData[categoriaKey];
        
        // Si es favoritos
        if (categoriaKey === 'favoritos') {
            const favoritos = obtenerFavoritos();
            if (favoritos.length === 0) {
                categoryContent.innerHTML = `
                    <div class="category-description">
                        <h2>❤️ Mis Favoritos</h2>
                        <p>No tienes productos favoritos todavía. Haz clic en el corazón ❤️ de cualquier producto para agregarlo.</p>
                    </div>
                `;
            } else {
                let html = `
                    <div class="category-description">
                        <h2>❤️ Mis Favoritos</h2>
                        <p>Productos que has guardado como favoritos.</p>
                    </div>
                    <div class="products-grid">
                `;
                
                favoritos.forEach((productoId, index) => {
                    const producto = encontrarProductoPorId(productoId);
                    if (producto) {
                        html += crearProductoCard(producto, index, categoriaKey);
                    }
                });
                
                html += '</div>';
                categoryContent.innerHTML = html;
            }
        }
        // Los almuerzos siempre se muestran, pero indicamos que están disponibles solo fines de semana
        // (Ya no ocultamos el contenido, siempre se muestran los productos)
        else if (!categoria) {
            categoryContent.innerHTML = '<p>Categoría no encontrada.</p>';
        }
        else {
            // Crear carrusel si hay fotos disponibles
            const carruselHTML = crearCarruselCategoria(categoria.fotos, categoria.nombre, categoriaKey);
            
            let html = `
                <div class="category-description">
                    <h2>${categoria.nombre}</h2>
                    <p>${categoria.descripcion}</p>
                </div>
                ${carruselHTML}
                <div class="products-grid">
            `;

            // Agrupar bebidas por subcategoría
            if (categoriaKey === 'bebidas') {
                const subcategorias = {};
                categoria.productos.forEach(prod => {
                    const sub = prod.subcategoria || 'Otras';
                    if (!subcategorias[sub]) {
                        subcategorias[sub] = [];
                    }
                    subcategorias[sub].push(prod);
                });

                Object.keys(subcategorias).forEach(subcat => {
                    html += `<h3 style="grid-column: 1 / -1; font-family: var(--font-heading); font-size: 1.4rem; margin: 2rem 0 1rem; color: var(--color-black); border-bottom: 2px solid var(--color-gold); padding-bottom: 0.5rem;">${subcat}</h3>`;
                    subcategorias[subcat].forEach((producto, index) => {
                        html += crearProductoCard(producto, index, categoriaKey);
                    });
                });
            } else {
                categoria.productos.forEach((producto, index) => {
                    html += crearProductoCard(producto, index, categoriaKey);
                });
            }

            html += '</div>';
            categoryContent.innerHTML = html;
        }
        
        // Ocultar indicador y mostrar contenido
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (categoryContent) categoryContent.classList.remove('hidden');
        
        // Animar productos al entrar en viewport
        observarProductos();
        
        // Inicializar lazy loading
        initLazyLoading();
        
        // Agregar event listeners a botones
        agregarEventListenersProductos();
        
        // Inicializar carrusel si existe
        if (categoria && categoria.fotos && categoria.fotos.length > 0) {
            inicializarCarrusel(categoriaKey);
        }
        
        // Trackear vista de categoría (para analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'view_category', {
                'category_name': categoria?.nombre || categoriaKey
            });
        }
    }, 300);
}

// Encontrar producto por ID en todas las categorías
function encontrarProductoPorId(id) {
    for (const categoriaKey in productosData) {
        const producto = productosData[categoriaKey].productos.find(p => p.id === id);
        if (producto) return producto;
    }
    return null;
}

// Reseñas por categoría
const reseñasPorCategoria = {
    recomendados: [
        { nombre: "María G.", comentario: "¡Los más vendidos de verdad! Todo delicioso 🍽️", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Carlos R.", comentario: "La mejor comida que he probado. Totalmente recomendado!", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Ana L.", comentario: "No me canso de venir, siempre perfecto ✨", rating: "⭐⭐⭐⭐⭐" }
    ],
    almuerzos: [
        { nombre: "Roberto M.", comentario: "Los almuerzos del fin de semana son increíbles. Vale la pena esperar!", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Laura S.", comentario: "El mejor lugar para almorzar los domingos 🍽️", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Diego P.", comentario: "Sabor auténtico y porciones generosas. Excelente!", rating: "⭐⭐⭐⭐⭐" }
    ],
    pescados: [
        { nombre: "Carmen V.", comentario: "El pescado más fresco. Sabor increíble 🌊", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Jorge H.", comentario: "Los mariscos están perfectos. Definitivamente volveré!", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Sofia M.", comentario: "Todo fresco y bien preparado. Me encantó! 💙", rating: "⭐⭐⭐⭐⭐" }
    ],
    carnes: [
        { nombre: "Miguel A.", comentario: "Las mejores parrillas de Pereira. Jugosas y deliciosas! 🔥", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Patricia G.", comentario: "Carnes a la perfección. Un manjar! 🥩", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Fernando L.", comentario: "Cortes premium y bien preparados. Excelente calidad!", rating: "⭐⭐⭐⭐⭐" }
    ],
    desgranados: [
        { nombre: "Diana C.", comentario: "Los desgranados son mi debilidad. Auténtico sabor colombiano 🇨🇴", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Andrés F.", comentario: "Sabor tradicional que no se encuentra en ningún otro lugar!", rating: "⭐⭐⭐⭐⭐" }
    ],
    bebidas: [
        { nombre: "Valentina R.", comentario: "Las limonadas son refrescantes y deliciosas 🥤", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Sebastián T.", comentario: "Bebidas perfectas para acompañar la comida. Muy buenas!", rating: "⭐⭐⭐⭐⭐" },
        { nombre: "Isabella N.", comentario: "Todo está fresco y bien preparado. Me encanta! 🍹", rating: "⭐⭐⭐⭐⭐" }
    ]
};

// Obtener reseña aleatoria por categoría
function obtenerReseñaAleatoria(categoriaKey) {
    const reseñas = reseñasPorCategoria[categoriaKey];
    if (!reseñas || reseñas.length === 0) return null;
    return reseñas[Math.floor(Math.random() * reseñas.length)];
}

// Crear carrusel de fotos por categoría
function crearCarruselCategoria(fotos, categoriaNombre, categoriaKey) {
    if (!fotos || fotos.length === 0) {
        return ''; // No mostrar carrusel si no hay fotos
    }

    // Determinar tipo de humo según categoría
    const categoriasComida = ['recomendados', 'almuerzos', 'pescados', 'especiales', 'carnes', 'desgranados', 'chicharrones', 'tardeando', 'hamburguesas', 'entradas', 'adicionales', 'menuinfantil', 'postres'];
    const esBebidas = categoriaKey === 'bebidas';
    const esComida = categoriasComida.includes(categoriaKey);
    
    const smokeType = esBebidas ? 'cold' : (esComida ? 'hot' : null);

    // Mostrar TODAS las fotos (sin límite)
    const fotosMostrar = [...fotos];
    
    // Obtener reseña aleatoria para esta categoría
    const reseña = obtenerReseñaAleatoria(categoriaKey);

    const slidesHTML = fotosMostrar.map((foto, index) => `
        <div class="carousel-slide ${index === 0 ? 'active' : ''}">
            <img src="${foto}" alt="${categoriaNombre}" loading="lazy" class="carousel-image">
        </div>
    `).join('');

    const indicatorsHTML = fotosMostrar.map((_, index) => `
        <button class="carousel-indicator ${index === 0 ? 'active' : ''}" 
                data-slide="${index}"
                aria-label="Ir a slide ${index + 1}"></button>
    `).join('');

    const smokeAttr = smokeType ? `data-smoke="${smokeType}"` : '';
    const compactClass = categoriaKey === 'recomendados' ? 'compact' : '';
    const totalFotos = fotosMostrar.length;
    
    // HTML de reseña si existe
    const reseñaHTML = reseña ? `
        <div class="carousel-review">
            <div class="review-content">
                <p class="review-text">"${reseña.comentario}"</p>
                <div class="review-author">
                    <span class="review-name">${reseña.nombre}</span>
                    <span class="review-rating">${reseña.rating}</span>
                </div>
            </div>
        </div>
    ` : '';

    return `
        <div class="category-carousel ${compactClass}" data-carousel-id="${categoriaNombre}" data-category="${categoriaKey}" ${smokeAttr}>
            ${reseñaHTML}
            <div class="carousel-container">
                <button class="carousel-btn carousel-prev" aria-label="Imagen anterior">‹</button>
                <div class="carousel-slides">
                    ${slidesHTML}
                </div>
                <button class="carousel-btn carousel-next" aria-label="Siguiente imagen">›</button>
                <div class="carousel-counter">
                    <span class="carousel-current">1</span> / <span class="carousel-total">${totalFotos}</span>
                </div>
            </div>
            <div class="carousel-indicators">
                ${indicatorsHTML}
            </div>
        </div>
    `;
}

// Inicializar carrusel
function inicializarCarrusel(categoriaKey) {
    const carrusel = document.querySelector(`[data-carousel-id="${productosData[categoriaKey]?.nombre || categoriaKey}"]`);
    if (!carrusel) return;

    const slides = carrusel.querySelectorAll('.carousel-slide');
    const indicators = carrusel.querySelectorAll('.carousel-indicator');
    const prevBtn = carrusel.querySelector('.carousel-prev');
    const nextBtn = carrusel.querySelector('.carousel-next');
    const container = carrusel.querySelector('.carousel-container');
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let autoplayInterval = null;

    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        currentSlide = index;
        
        // Actualizar contador de fotos
        const counterCurrent = carrusel.querySelector('.carousel-current');
        if (counterCurrent) {
            counterCurrent.textContent = index + 1;
        }
    }

    function siguienteSlide() {
        const nuevoIndex = (currentSlide + 1) % slides.length;
        mostrarSlide(nuevoIndex);
    }

    function anteriorSlide() {
        const nuevoIndex = (currentSlide - 1 + slides.length) % slides.length;
        mostrarSlide(nuevoIndex);
    }

    // Event listeners para botones (sin autoplay)
    if (prevBtn) prevBtn.addEventListener('click', () => {
        anteriorSlide();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
        siguienteSlide();
    });

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            mostrarSlide(index);
        });
    });

    // Touch gestures para móvil
    if (container) {
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    siguienteSlide(); // Swipe izquierda = siguiente
                } else {
                    anteriorSlide(); // Swipe derecha = anterior
                }
            }
        }
    }
}

function crearProductoCard(producto, index, categoriaKey = null) {
    const delay = (index % 4) * 0.1;
    const favoritos = obtenerFavoritos();
    const esFavorito = favoritos.includes(producto.id);

    const tagsHTML = producto.tags.map(tag => 
        `<span class="product-tag">${tag}</span>`
    ).join('');

    return `
        <div class="product-card" style="animation-delay: ${delay}s;" data-product-id="${producto.id}">
            <div class="product-info">
                <div class="product-header">
                    <button class="product-favorite-btn ${esFavorito ? 'favorited' : ''}" 
                            data-product-id="${producto.id}"
                            aria-label="${esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}"
                            title="${esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
                        ${esFavorito ? '❤️' : '🤍'}
                    </button>
                    <h3 class="product-name">${producto.nombre}</h3>
                    <span class="product-price">${formatearPrecio(producto.precio)}</span>
                </div>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-tags">
                    ${tagsHTML}
                </div>
            </div>
        </div>
    `;
}

// Lazy loading para imágenes del carrusel
function initLazyLoading() {
    const images = document.querySelectorAll('.carousel-image[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Cambiar categoría activa
function cambiarCategoria(categoriaKey) {
    // Ocultar búsqueda si está activa
    ocultarBusqueda();
    
    if (!categoryTabs) {
        inicializarCategoryTabs();
    }
    
    categoryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === categoriaKey) {
            tab.classList.add('active');
        }
    });
    
    // Scroll suave al contenido
    setTimeout(() => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, 100);
    
    renderizarProductos(categoriaKey);
}

// Event listeners para tabs (se inicializan después)
function inicializarCategoryTabs() {
    categoryTabs = document.querySelectorAll('.category-tab');
    categoryContent = document.getElementById('category-content');
    tabAlmuerzos = document.getElementById('tab-almuerzos');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const categoria = tab.dataset.category;
            cambiarCategoria(categoria);
        });
    });
}

// ============================================
// SCROLL REVEAL (Intersection Observer)
// ============================================

function observarProductos() {
    const productos = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    productos.forEach(producto => {
        observer.observe(producto);
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

function inicializarMenu() {
    // Primero inicializar los elementos del DOM
    inicializarCategoryTabs();
    
    actualizarTabAlmuerzos();
    cambiarCategoria('recomendados');
    
    // Actualizar tab de almuerzos cada minuto (por si cambia de día)
    setInterval(actualizarTabAlmuerzos, 60000);
    
    // Inicializar todas las funcionalidades
    inicializarFavoritos();
    inicializarBusqueda();
    inicializarMenuHamburguesa();
    inicializarScrollTop();
    inicializarModalImagen();
    inicializarModoOscuro();
    inicializarTecladoNavegacion();
    inicializarInstagramCopy();
    inicializarDescargaPDF();
    inicializarCompartirCarta();
}

// Inicializar botón de copiar Instagram
function inicializarInstagramCopy() {
    const copyBtn = document.querySelector('.copy-instagram-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const username = copyBtn.dataset.username;
            navigator.clipboard.writeText(username).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '✓ Copiado!';
                copyBtn.style.background = 'var(--color-gold)';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            }).catch(() => {
                // Fallback para navegadores antiguos
                const textArea = document.createElement('textarea');
                textArea.value = username;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                copyBtn.textContent = '✓ Copiado!';
            });
        });
    }
}

// Inicializar descarga de PDF
function inicializarDescargaPDF() {
    const pdfBtn = document.getElementById('download-pdf-btn');
    if (!pdfBtn) return;
    
    pdfBtn.addEventListener('click', () => {
        // Trackear descarga PDF
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download_pdf', {
                'event_category': 'engagement',
                'event_label': 'Carta PDF'
            });
        }
        descargarCartaPDF();
    });
}

// Generar y descargar PDF de la carta
function descargarCartaPDF() {
    // Crear un elemento temporal con el contenido para PDF
    const contentToPrint = document.createElement('div');
    contentToPrint.className = 'pdf-content';
    contentToPrint.style.width = '210mm';
    contentToPrint.style.padding = '20mm';
    contentToPrint.style.background = 'white';
    contentToPrint.style.color = 'black';
    contentToPrint.style.fontFamily = 'Arial, sans-serif';
    
    // Título principal
    const title = document.createElement('h1');
    title.textContent = 'CARTA DIGITAL - MIRADOR RESTAURANTE ÉBANO';
    title.style.textAlign = 'center';
    title.style.color = '#D4AF37';
    title.style.fontSize = '24pt';
    title.style.marginBottom = '10mm';
    title.style.borderBottom = '2px solid #D4AF37';
    title.style.paddingBottom = '5mm';
    contentToPrint.appendChild(title);
    
    // Información del restaurante
    const info = document.createElement('div');
    info.style.textAlign = 'center';
    info.style.marginBottom = '15mm';
    info.style.fontSize = '10pt';
    info.innerHTML = `
        <p><strong>Dirección:</strong> Ébano Mirador Picnic, Vía Cuba, Villa Verde, Pereira, Risaralda</p>
        <p><strong>Teléfono:</strong> +57 310-4827580 | <strong>Email:</strong> ebanopereiramiradorrestaurante@gmail.com</p>
        <p><strong>Instagram:</strong> @miradorebanopereira</p>
        <p><strong>Horarios:</strong> Lunes a Viernes: 4:00 PM - 11:00 PM | Sábado y Domingo: 12:00 PM - 12:00 AM</p>
    `;
    contentToPrint.appendChild(info);
    
    // Iterar por todas las categorías
    for (const categoriaKey in productosData) {
        if (categoriaKey === 'favoritos') continue;
        
        const categoria = productosData[categoriaKey];
        
        // Título de categoría
        const catTitle = document.createElement('h2');
        catTitle.textContent = categoria.nombre;
        catTitle.style.color = '#D4AF37';
        catTitle.style.fontSize = '18pt';
        catTitle.style.marginTop = '10mm';
        catTitle.style.marginBottom = '5mm';
        catTitle.style.borderBottom = '1px solid #D4AF37';
        catTitle.style.paddingBottom = '2mm';
        contentToPrint.appendChild(catTitle);
        
        // Descripción de categoría
        if (categoria.descripcion) {
            const catDesc = document.createElement('p');
            catDesc.textContent = categoria.descripcion;
            catDesc.style.fontSize = '10pt';
            catDesc.style.marginBottom = '5mm';
            catDesc.style.fontStyle = 'italic';
            contentToPrint.appendChild(catDesc);
        }
        
        // Tabla de productos
        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.marginBottom = '10mm';
        
        categoria.productos.forEach(producto => {
            const row = table.insertRow();
            
            // Nombre del producto
            const cellName = row.insertCell(0);
            cellName.textContent = producto.nombre;
            cellName.style.padding = '4mm';
            cellName.style.borderBottom = '1px solid #e0e0e0';
            cellName.style.fontWeight = 'bold';
            cellName.style.fontSize = '11pt';
            cellName.style.width = '60%';
            
            // Precio
            const cellPrice = row.insertCell(1);
            cellPrice.textContent = formatearPrecio(producto.precio);
            cellPrice.style.padding = '4mm';
            cellPrice.style.borderBottom = '1px solid #e0e0e0';
            cellPrice.style.textAlign = 'right';
            cellPrice.style.color = '#D4AF37';
            cellPrice.style.fontWeight = 'bold';
            cellPrice.style.fontSize = '11pt';
            
            // Descripción (si hay espacio)
            if (producto.descripcion && producto.descripcion.length < 100) {
                const descRow = table.insertRow();
                const descCell = descRow.insertCell(0);
                descCell.textContent = producto.descripcion;
                descCell.colSpan = 2;
                descCell.style.padding = '2mm 4mm';
                descCell.style.fontSize = '9pt';
                descCell.style.color = '#666';
                descCell.style.fontStyle = 'italic';
                descCell.style.borderBottom = '1px solid #f0f0f0';
            }
        });
        
        contentToPrint.appendChild(table);
    }
    
    // Footer del PDF
    const footer = document.createElement('div');
    footer.style.marginTop = '15mm';
    footer.style.paddingTop = '5mm';
    footer.style.borderTop = '2px solid #D4AF37';
    footer.style.textAlign = 'center';
    footer.style.fontSize = '8pt';
    footer.style.color = '#666';
    footer.innerHTML = `
        <p>© 2025 Mirador Restaurante Ébano. Todos los derechos reservados.</p>
        <p>Desarrollado por @agenciagenio.ia</p>
        <p style="margin-top: 5mm;"><em>Esta carta digital está actualizada. Visita nuestra página web para la versión más reciente.</em></p>
    `;
    contentToPrint.appendChild(footer);
    
    // Opciones para PDF
    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'Carta-Mirador-Ebano.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };
    
    // Mostrar indicador de carga
    const originalText = pdfBtn.textContent;
    pdfBtn.textContent = '⏳ Generando...';
    pdfBtn.disabled = true;
    
    // Generar PDF
    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(contentToPrint).save().then(() => {
            pdfBtn.textContent = originalText;
            pdfBtn.disabled = false;
        }).catch(() => {
            pdfBtn.textContent = originalText;
            pdfBtn.disabled = false;
            alert('Error al generar el PDF. Por favor, intenta de nuevo.');
        });
    } else {
        alert('La función de descarga PDF no está disponible. Por favor, recarga la página.');
        pdfBtn.textContent = originalText;
        pdfBtn.disabled = false;
    }
}

// Inicializar compartir carta
function inicializarCompartirCarta() {
    const shareBtn = document.getElementById('share-carta-btn');
    if (!shareBtn) return;
    
    shareBtn.addEventListener('click', () => {
        compartirCarta();
    });
}

// Compartir carta en redes sociales o copiar link
function compartirCarta() {
    const shareData = {
        title: 'Carta Digital - Mirador Restaurante Ébano',
        text: 'Descubre nuestra carta digital interactiva con los mejores platos de Pereira',
        url: window.location.href
    };
    
    // Trackear intento de compartir
    if (typeof gtag !== 'undefined') {
        gtag('event', 'share', {
            'method': navigator.share ? 'native' : 'copy_link',
            'content_type': 'carta'
        });
    }
    
    // Usar Web Share API si está disponible (móviles principalmente)
    if (navigator.share) {
        navigator.share(shareData).catch((err) => {
            console.log('Error al compartir:', err);
            copiarLinkCarta();
        });
    } else {
        // Fallback: copiar link al portapapeles
        copiarLinkCarta();
    }
}

// Copiar link de la carta al portapapeles
function copiarLinkCarta() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const shareBtn = document.getElementById('share-carta-btn');
        if (shareBtn) {
            const originalText = shareBtn.textContent;
            shareBtn.textContent = '✓ Copiado!';
            shareBtn.style.background = 'var(--color-gold)';
            setTimeout(() => {
                shareBtn.textContent = originalText;
                shareBtn.style.background = '';
            }, 2000);
        }
        
        // Mostrar notificación
        mostrarNotificacion('Link copiado al portapapeles. ¡Compártelo con tus amigos!');
    }).catch(() => {
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        mostrarNotificacion('Link copiado al portapapeles.');
    });
}

// Mostrar notificación temporal
function mostrarNotificacion(mensaje) {
    // Eliminar notificación anterior si existe
    const notifAnterior = document.querySelector('.notification-toast');
    if (notifAnterior) {
        notifAnterior.remove();
    }
    
    const notificacion = document.createElement('div');
    notificacion.className = 'notification-toast';
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    // Animar entrada
    setTimeout(() => {
        notificacion.classList.add('show');
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 3000);
}

// ============================================
// SISTEMA DE FAVORITOS
// ============================================

function obtenerFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
}

function guardarFavoritos(favoritos) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function toggleFavorito(productoId) {
    let favoritos = obtenerFavoritos();
    const index = favoritos.indexOf(productoId);
    
    if (index > -1) {
        favoritos.splice(index, 1);
    } else {
        favoritos.push(productoId);
    }
    
    guardarFavoritos(favoritos);
    return favoritos.includes(productoId);
}

function agregarEventListenersProductos() {
    // Botones de favoritos
    document.querySelectorAll('.product-favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productoId = btn.dataset.productId;
            const esFavorito = toggleFavorito(productoId);
            
            btn.textContent = esFavorito ? '❤️' : '🤍';
            btn.classList.toggle('favorited', esFavorito);
            btn.setAttribute('aria-label', esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos');
            btn.setAttribute('title', esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos');
            
            // Actualizar contador y visibilidad
            actualizarContadorFavoritos();
            
            // Si estamos en favoritos y se eliminó, refrescar
            const categoriaActiva = document.querySelector('.category-tab.active');
            if (categoriaActiva && categoriaActiva.dataset.category === 'favoritos') {
                renderizarProductos('favoritos');
            }
        });
    });
    
    // Click en imagen del carrusel para expandir
    document.querySelectorAll('.carousel-image').forEach(img => {
        img.addEventListener('click', (e) => {
            abrirModalImagen(img.src, img.alt);
        });
    });
}

function inicializarFavoritos() {
    const favoritesToggle = document.getElementById('favorites-toggle');
    const tabFavoritos = document.getElementById('tab-favoritos');
    
    if (favoritesToggle) {
        favoritesToggle.addEventListener('click', () => {
            cambiarCategoria('favoritos');
            cerrarMenuHamburguesa();
        });
    }
    
    if (tabFavoritos) {
        tabFavoritos.addEventListener('click', () => {
            cambiarCategoria('favoritos');
            cerrarMenuHamburguesa();
        });
        
        // Ocultar tab de favoritos si no hay favoritos
        const favoritos = obtenerFavoritos();
        if (favoritos.length === 0) {
            tabFavoritos.style.display = 'none';
        }
    }
    
    actualizarContadorFavoritos();
}

function actualizarVisibilidadTabFavoritos() {
    const tabFavoritos = document.getElementById('tab-favoritos');
    const favoritos = obtenerFavoritos();
    if (tabFavoritos) {
        tabFavoritos.style.display = favoritos.length > 0 ? '' : 'none';
    }
}

function actualizarContadorFavoritos() {
    const favoritos = obtenerFavoritos();
    const favoritesToggle = document.getElementById('favorites-toggle');
    if (favoritesToggle) {
        favoritesToggle.setAttribute('title', favoritos.length > 0 ? `Favoritos (${favoritos.length})` : 'Favoritos');
    }
    actualizarVisibilidadTabFavoritos();
}

// ============================================
// SISTEMA DE BÚSQUEDA
// ============================================

let timeoutBusqueda;

function inicializarBusqueda() {
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchContainer = document.getElementById('search-container');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchContainer.classList.toggle('hidden');
            if (!searchContainer.classList.contains('hidden')) {
                searchInput.focus();
            }
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', ocultarBusqueda);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeoutBusqueda);
            timeoutBusqueda = setTimeout(() => {
                buscarProductos(e.target.value);
            }, 300);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                ocultarBusqueda();
            }
        });
    }
}

function ocultarBusqueda() {
    const searchContainer = document.getElementById('search-container');
    const searchResults = document.getElementById('search-results');
    const categoryContent = document.getElementById('category-content');
    
    searchContainer.classList.add('hidden');
    searchResults.classList.add('hidden');
    categoryContent.classList.remove('hidden');
    document.getElementById('search-input').value = '';
}

function buscarProductos(termino) {
    const searchResults = document.getElementById('search-results');
    const searchResultsTitle = document.getElementById('search-results-title');
    const searchResultsContent = document.getElementById('search-results-content');
    const categoryContent = document.getElementById('category-content');
    
    if (!termino.trim()) {
        searchResults.classList.add('hidden');
        categoryContent.classList.remove('hidden');
        return;
    }
    
    const resultados = [];
    const terminoLower = termino.toLowerCase();
    
    for (const categoriaKey in productosData) {
        productosData[categoriaKey].productos.forEach(producto => {
            if (
                producto.nombre.toLowerCase().includes(terminoLower) ||
                producto.descripcion.toLowerCase().includes(terminoLower) ||
                producto.tags.some(tag => tag.toLowerCase().includes(terminoLower))
            ) {
                resultados.push(producto);
            }
        });
    }
    
    categoryContent.classList.add('hidden');
    searchResults.classList.remove('hidden');
    
    if (resultados.length === 0) {
        searchResultsTitle.textContent = `No se encontraron productos para "${termino}"`;
        searchResultsContent.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--color-text);">Intenta con otro término de búsqueda.</p>';
    } else {
        searchResultsTitle.textContent = `${resultados.length} producto${resultados.length > 1 ? 's' : ''} encontrado${resultados.length > 1 ? 's' : ''} para "${termino}"`;
        searchResultsContent.innerHTML = resultados.map((producto, index) => 
            crearProductoCard(producto, index)
        ).join('');
        
        observarProductos();
        initLazyLoading();
        agregarEventListenersProductos();
    }
}

// ============================================
// MENÚ HAMBURGUESA MÓVIL
// ============================================

function inicializarMenuHamburguesa() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = mobileMenu?.querySelector('.mobile-menu-close');
    const mobileMenuItems = mobileMenu?.querySelector('.mobile-menu-items');
    
    // Asegurar que categoryTabs esté inicializado
    if (!categoryTabs) {
        inicializarCategoryTabs();
    }
    
    // Crear items del menú
    if (mobileMenuItems && categoryTabs) {
        mobileMenuItems.innerHTML = '';
        categoryTabs.forEach(tab => {
            // Omitir tabs ocultos
            if (tab.style.display === 'none') return;
            
            const item = document.createElement('button');
            item.className = 'mobile-menu-item';
            item.textContent = tab.textContent.trim();
            item.addEventListener('click', () => {
                const categoria = tab.dataset.category;
                cambiarCategoria(categoria);
                cerrarMenuHamburguesa();
            });
            mobileMenuItems.appendChild(item);
        });
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', !mobileMenu.classList.contains('hidden'));
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', cerrarMenuHamburguesa);
    }
    
    // Cerrar al hacer click fuera
    mobileMenu?.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            cerrarMenuHamburguesa();
        }
    });
}

function cerrarMenuHamburguesa() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');
    if (mobileMenu && menuToggle) {
        mobileMenu.classList.add('hidden');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

// ============================================
// BOTÓN VOLVER ARRIBA
// ============================================

function inicializarScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// MODAL DE IMÁGENES
// ============================================

let imagenesModal = [];
let indiceImagenActual = 0;

function inicializarModalImagen() {
    const modal = document.getElementById('image-modal');
    const modalClose = modal.querySelector('.modal-close');
    const modalPrev = modal.querySelector('.modal-prev');
    const modalNext = modal.querySelector('.modal-next');
    
    modalClose.addEventListener('click', cerrarModalImagen);
    modalPrev.addEventListener('click', () => cambiarImagenModal(-1));
    modalNext.addEventListener('click', () => cambiarImagenModal(1));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModalImagen();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'Escape') cerrarModalImagen();
            if (e.key === 'ArrowLeft') cambiarImagenModal(-1);
            if (e.key === 'ArrowRight') cambiarImagenModal(1);
        }
    });
}

function abrirModalImagen(src, nombre) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    // Recopilar todas las imágenes del carrusel visible
    imagenesModal = Array.from(document.querySelectorAll('.carousel-image[src]'))
        .map(img => ({
            src: img.src,
            alt: img.alt
        }));
    
    indiceImagenActual = imagenesModal.findIndex(img => img.src === src || img.alt === nombre);
    if (indiceImagenActual === -1) indiceImagenActual = 0;
    
    if (imagenesModal.length > 0) {
        modalImage.src = imagenesModal[indiceImagenActual].src;
        modalImage.alt = imagenesModal[indiceImagenActual].alt;
        modalCaption.textContent = nombre || imagenesModal[indiceImagenActual].alt;
    } else {
        // Si no hay imágenes en el carrusel, mostrar solo la imagen seleccionada
        modalImage.src = src;
        modalImage.alt = nombre;
        modalCaption.textContent = nombre;
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function cerrarModalImagen() {
    const modal = document.getElementById('image-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function cambiarImagenModal(direccion) {
    indiceImagenActual += direccion;
    if (indiceImagenActual < 0) indiceImagenActual = imagenesModal.length - 1;
    if (indiceImagenActual >= imagenesModal.length) indiceImagenActual = 0;
    
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    modalImage.src = imagenesModal[indiceImagenActual].src;
    modalCaption.textContent = imagenesModal[indiceImagenActual].alt;
}

// ============================================
// MODO OSCURO
// ============================================

function inicializarModoOscuro() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const theme = localStorage.getItem('theme') || 'light';
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = '☀️';
    }
    
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        darkModeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

// ============================================
// NAVEGACIÓN POR TECLADO
// ============================================

function inicializarTecladoNavegacion() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K para búsqueda
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchContainer = document.getElementById('search-container');
            if (searchContainer) {
                searchContainer.classList.toggle('hidden');
                if (!searchContainer.classList.contains('hidden')) {
                    document.getElementById('search-input').focus();
                }
            }
        }
    });
}
