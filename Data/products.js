const products = [
    //PUFFER
    {
        id: "vtr-puffer-black",
        name: "Vinter Puffer Jacket – Black",
        brand: "VINTER",
        gender: "men",

        category: "jacket",
        fit: "regular",
        hood: true,
        zip: "full",
        material: "polyester",
        warmthLevel: 5,

        color: "black",
        pattern: "solid",

        price: 4999,
        originalPrice: 6999,
        discount: 29,

        inStock: true,
        stockCount: 20,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Heavy insulated winter puffer jacket designed for extreme cold with a clean minimal look."
    },
    {
        id: "vtr-puffer-white",
        name: "Vinter Puffer Jacket – White",
        brand: "VINTER",
        gender: "men",

        category: "jacket",
        fit: "regular",
        hood: true,
        zip: "full",
        material: "polyester",
        warmthLevel: 5,

        color: "black",
        pattern: "solid",

        price: 4999,
        originalPrice: 6999,
        discount: 29,

        inStock: true,
        stockCount: 20,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Heavy insulated winter puffer jacket designed for extreme cold with a clean minimal look."
    },

    //HOODIE

    {
        id: "vtr-hoodie-black",
        name: "Vinter Hoodie – Black",
        brand: "VINTER",
        gender: "men",

        category: "hoodie",
        fit: "oversized",
        hood: true,
        zip: "none",
        material: "cotton-fleece",
        warmthLevel: 3,

        color: "black",
        pattern: "solid",

        price: 1999,
        originalPrice: 2799,
        discount: 29,

        inStock: true,
        stockCount: 35,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Soft heavyweight fleece hoodie designed for everyday winter wear with a relaxed oversized fit."
    },
    {
        id: "vtr-hoodie-white",
        name: "Vinter Hoodie – White",
        brand: "VINTER",
        gender: "men",

        category: "hoodie",
        fit: "oversized",
        hood: true,
        zip: "none",
        material: "cotton-fleece",
        warmthLevel: 3,

        color: "white",
        pattern: "solid",

        price: 1999,
        originalPrice: 2799,
        discount: 29,

        inStock: true,
        stockCount: 35,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Soft heavyweight fleece hoodie designed for everyday winter wear with a relaxed oversized fit."
    },

    //QUARTER ZIP

    {
        id: "vtr-quarterzip-black",
        name: "Vinter Quarter Zip – Black",
        brand: "VINTER",
        gender: "men",

        category: "quarterzip",
        fit: "slim",
        hood: false,
        zip: "quarter",
        material: "cotton-blend",
        warmthLevel: 3,

        color: "black",
        pattern: "solid",

        price: 2499,
        originalPrice: 3299,
        discount: 24,

        inStock: true,
        stockCount: 25,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Minimal quarter-zip sweatshirt designed for a clean layered winter look."
    },
    {
        id: "vtr-quarterzip-white",
        name: "Vinter Quarter Zip – White",
        brand: "VINTER",
        gender: "men",

        category: "quarterzip",
        fit: "slim",
        hood: false,
        zip: "quarter",
        material: "cotton-blend",
        warmthLevel: 3,

        color: "white",
        pattern: "solid",

        price: 2499,
        originalPrice: 3299,
        discount: 24,

        inStock: true,
        stockCount: 25,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Minimal quarter-zip sweatshirt designed for a clean layered winter look."
    },

    //Sweaters

    {
        id: "vtr-sweater-black",
        name: "Vinter Knit Sweater – Black",
        brand: "VINTER",
        gender: "men",

        category: "sweater",
        fit: "regular",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 4,

        color: "black",
        pattern: "solid",

        price: 2699,
        originalPrice: 3499,
        discount: 23,

        inStock: true,
        stockCount: 22,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Premium wool-blend knit sweater built for warmth, comfort, and a clean winter aesthetic."
    },
    {
        id: "vtr-sweater-white",
        name: "Vinter Knit Sweater – White",
        brand: "VINTER",
        gender: "men",

        category: "sweater",
        fit: "regular",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 4,

        color: "white",
        pattern: "solid",

        price: 2699,
        originalPrice: 3499,
        discount: 23,

        inStock: true,
        stockCount: 22,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Premium wool-blend knit sweater built for warmth, comfort, and a clean winter aesthetic."
    },

    //full zip hoodie

    {
        id: "vtr-fullzip-black",
        name: "Vinter Full Zip Hoodie – Black",
        brand: "VINTER",
        gender: "men",

        category: "hoodie",
        fit: "regular",
        hood: true,
        zip: "full",
        material: "cotton-fleece",
        warmthLevel: 3,

        color: "black",
        pattern: "solid",

        price: 2299,
        originalPrice: 2999,
        discount: 23,

        inStock: true,
        stockCount: 30,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Minimal full-zip hoodie designed for easy layering and everyday winter wear."
    },
    {
        id: "vtr-fullzip-white",
        name: "Vinter Full Zip Hoodie – White",
        brand: "VINTER",
        gender: "men",

        category: "hoodie",
        fit: "regular",
        hood: true,
        zip: "full",
        material: "cotton-fleece",
        warmthLevel: 3,

        color: "white",
        pattern: "solid",

        price: 2299,
        originalPrice: 2999,
        discount: 23,

        inStock: true,
        stockCount: 30,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Minimal full-zip hoodie designed for easy layering and everyday winter wear."
    },

    //Sweatshirts

    {
        id: "vtr-sweat-black",
        name: "Vinter Sweatshirt – Black",
        brand: "VINTER",
        gender: "men",

        category: "sweatshirt",
        fit: "oversized",
        hood: false,
        zip: "none",
        material: "cotton-fleece",
        warmthLevel: 2,

        color: "black",
        pattern: "solid",

        price: 1799,
        originalPrice: 2499,
        discount: 28,

        inStock: true,
        stockCount: 35,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Clean oversized sweatshirt built for everyday winter comfort."
    },
    {
        id: "vtr-sweat-white",
        name: "Vinter Sweatshirt – White",
        brand: "VINTER",
        gender: "men",

        category: "sweatshirt",
        fit: "oversized",
        hood: false,
        zip: "none",
        material: "cotton-fleece",
        warmthLevel: 2,

        color: "white",
        pattern: "solid",

        price: 1799,
        originalPrice: 2499,
        discount: 28,

        inStock: true,
        stockCount: 35,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Clean oversized sweatshirt built for everyday winter comfort."
    },

    //winter joggers

    {
        id: "vtr-jogger-black",
        name: "Vinter Winter Jogger – Black",
        brand: "VINTER",
        gender: "men",

        category: "bottom",
        fit: "regular",
        hood: false,
        zip: "none",
        material: "cotton-blend",
        warmthLevel: 3,

        color: "black",
        pattern: "solid",

        price: 2199,
        originalPrice: 2899,
        discount: 24,

        inStock: true,
        stockCount: 30,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Minimal winter jogger designed for warmth, comfort, and a clean silhouette."
    },
    {
        id: "vtr-jogger-white",
        name: "Vinter Winter Jogger – White",
        brand: "VINTER",
        gender: "men",

        category: "bottom",
        fit: "regular",
        hood: false,
        zip: "none",
        material: "cotton-blend",
        warmthLevel: 3,

        color: "white",
        pattern: "solid",

        price: 2199,
        originalPrice: 2899,
        discount: 24,

        inStock: true,
        stockCount: 30,
        sizes: ["S", "M", "L", "XL"],

        images: [],
        description: "Minimal winter jogger designed for warmth, comfort, and a clean silhouette."
    },

    //accessories
    //beanies
    {
        id: "vtr-beanie-black",
        name: "Vinter Beanie – Black",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 2,

        color: "black",
        pattern: "solid",

        price: 699,
        originalPrice: 999,
        discount: 30,

        inStock: true,
        stockCount: 50,
        sizes: ["free"],

        images: [],
        description: "Soft knit beanie built to keep you warm with a minimal winter look."
    },
    {
        id: "vtr-beanie-white",
        name: "Vinter Beanie – White",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 2,

        color: "white",
        pattern: "solid",

        price: 699,
        originalPrice: 999,
        discount: 30,

        inStock: true,
        stockCount: 50,
        sizes: ["free"],

        images: [],
        description: "Soft knit beanie built to keep you warm with a minimal winter look."
    },

    //gloves
    {
        id: "vtr-gloves-black",
        name: "Vinter Gloves – Black",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 2,

        color: "black",
        pattern: "solid",

        price: 699,
        originalPrice: 999,
        discount: 30,

        inStock: true,
        stockCount: 50,
        sizes: ["free"],

        images: [],
        description: "Soft knit gloves built to keep you warm with a minimal winter look."
    },
    {
        id: "vtr-gloves-white",
        name: "Vinter Gloves – White",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 2,

        color: "white",
        pattern: "solid",

        price: 699,
        originalPrice: 999,
        discount: 30,

        inStock: true,
        stockCount: 50,
        sizes: ["free"],

        images: [],
        description: "Soft knit gloves built to keep you warm with a minimal winter look."
    },

    //socks
    {
        id: "vtr-socks-black",
        name: "Vinter Socks – Black",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 2,

        color: "black",
        pattern: "solid",

        price: 399,
        originalPrice: 599,
        discount: 33,

        inStock: true,
        stockCount: 50,
        sizes: ["free"],

        images: [],
        description: "Soft knit socks built to keep you warm with a minimal winter look."
    },
    {
        id: "vtr-socks-white",
        name: "Vinter Socks – White",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 2,

        color: "white",
        pattern: "solid",

        price: 399,
        originalPrice: 599,
        discount: 33,

        inStock: true,
        stockCount: 50,
        sizes: ["free"],

        images: [],
        description: "Soft knit socks built to keep you warm with a minimal winter look."
    },

    //muffler
    {
        id: "vtr-muffler-black",
        name: "Vinter Muffler – Black",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 3,

        color: "black",
        pattern: "solid",

        price: 799,
        originalPrice: 1199,
        discount: 33,

        inStock: true,
        stockCount: 40,
        sizes: ["free"],

        images: [],
        description: "Soft wool-blend muffler designed to add warmth and a clean winter finish."
    },
    {
        id: "vtr-muffler-white",
        name: "Vinter Muffler – White",
        brand: "VINTER",
        gender: "men",

        category: "accessory",
        fit: "free",
        hood: false,
        zip: "none",
        material: "wool-blend",
        warmthLevel: 3,

        color: "white",
        pattern: "solid",

        price: 799,
        originalPrice: 1199,
        discount: 33,

        inStock: true,
        stockCount: 40,
        sizes: ["free"],

        images: [],
        description: "Soft wool-blend muffler designed to add warmth and a clean winter finish."
    }
]

export function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    })
}

export function fetchProductById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);

            if (product) {
                resolve(product);
            }
            else {
                reject("Error : Product not found");
            }
        }, 300);
    });
}