export const productos = [
    {
      id: 1,
      nombre: "Ventilador Enfriador Recargable Más Gatillos Memo Ak03",
      precio: 23990,
      categoria: "Tecnologia",
      stock: 8,
      descripcion:
        "El Ventilador AK03 de MEMO es el combo perfecto para quienes buscan ventilar su smartphone y jugar cómodos, AK03 cuenta con un gatillo de pulso electromagnético y modos ráfaga mas un gatillo de pulso mecánico-capacitivo. Con ellos tus jugadas serán de precisión absoluta ya que cuenta con 0 delay al momento de jugar. Es compatible con todos los teléfonos del mercado IOS y Android de hasta 10mm de espesor ( De 67mm hasta 88mm ancho)",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_702045-MLC73366395809_122023-F.webp",
    },
    {
      id: 2,
      nombre: "Batería Externa Power Bank Master G 20000 Mah Power Delivery Color Azul",
      precio: 19000,
      categoria: "Tecnologia",
      stock: 5,
      descripcion:
        "Con la Nueva Power Bank portátil de Master-G de 20.000 mAh puedes cargar hasta dos dispositivos simultáneamente, es pequeña y fácil de utilizar, puedes conectar desde un SmartPhone hasta Tablet, MP4, PSP y demás.",
      img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/114140408_01/width=480,height=480,quality=70,format=webp,fit=pad",
    },
    {
      id: 3,
      nombre: "Pack De 2 Almohadas Emma Diamond Degree | Regula Temperatura",
      precio: 72900,
      categoria: "Hogar",
      stock: 9,
      descripcion:
        "El pack de 2 almohadas Diamond Degree está pensado para aquellos que buscan la tecnología más avanzada a la hora de dormir. Nuestra almohada, de la gama más premium, ofrece una innovadora espuma de grafito que regula la temperatura mientras duermes, ayudándote a mantenerte fresco durante toda la noche. Adicionalmente, las capas intercambiables de la almohada te permiten personalizar la altura de la almohada para adaptarla a tu forma de dormir, ya sea que prefieras dormir de lado, hacia arriba o hacia abajo. ¡La frescura y la comodidad al alcance de tus manos!",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_784704-MLC69687817377_052023-F.webp",
    },
    {
      id: 4,
      nombre: "Silla Piso Bar Taburete Respaldo Altura Regulable Ecocuero Acabado",
      precio: 17800,
      categoria: "Hogar",
      stock: 5,
      descripcion:
        "Este elegante taburete de dimensiones compactas, con una altura regulable de 50 a 75 centímetros y un diámetro de 38.5 centímetros, añade un toque contemporáneo a cualquier espacio. Su diseño minimalista y sofisticado se destaca gracias a su asiento de ecocuero, un material sostenible que combina estética lujosa con conciencia ambiental. La base de metal proporciona estabilidad y durabilidad, ofreciendo un soporte robusto para quienes buscan comodidad y estilo en un solo mueble.",
      img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/131770982_01/width=480,height=480,quality=70,format=webp,fit=pad",
    },
    {
      id: 5,
      nombre: "Chaqueta Polerón Ram Hombre Navy Doite",
      precio: 25900,
      categoria: "Polerones",
      stock: 5,
      descripcion:
        "Polerón clásico con cierre y bolsillo delantero y con interior de Sherpa o Corderito. Detalles a contraste ideal para cualquier ocasión.",
      img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/127199052_01/width=480,height=480,quality=70,format=webp,fit=pad",
    },
    {
      id: 6,
      nombre:"Zapatillas Padel/tenis Gel Resolution 9 Clay",
      precio: 115000,
      categoria: "Zapatillas",
      stock: 15,
      descripcion:
      "ZAPATILLAS para Padel - Tenis marca ASICS modelo GEL-RESOLUTION 9 CLAY, es 100% ORIGINAL y está totalmente nueva con sus etiquetas y caja.",
      img:"https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/50361134_1/width=480,height=480,quality=70,format=webp,fit=pad"
    }
  ];

  export const getProducts=()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(productos)
        },2000)
    })
  }

  export const getProductsByCategory= (category)=>{

    return new Promise((res)=>{
      const productosFiltrados= productos.filter(
        (prod)=>prod.categoria === category
      )
      setTimeout(()=>{
        res(productosFiltrados)

      },1000)
    })
  }

  export const getProductById = (id)=>{

    return new Promise((res)=>{
      const productosBuscado=productos.find(
        (prod)=> prod.id === parseInt(id) 
      )
      setTimeout(()=>{
        res(productosBuscado)

      },1000)
    })
  }