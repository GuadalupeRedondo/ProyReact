const products = [
    {
      name: "Sweater negro",
      category: "sweater",
      id:1,
      img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.childrensalonoutlet.com%2Fes%2Fdolce-gabbana-teen-black-logo-sweater-344314.html&psig=AOvVaw3DIfDbLuMKi8_W0rs0njCc&ust=1653868389836000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiR3JCyg_gCFQAAAAAdAAAAABAI",
      price: 1000,
    },
    {
      name: "Sweater blanco",
      category: "Sweater",
      id:2,
      img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mujerhoy.com%2Fmoda%2Fno-te-pierdas%2Ftraje-chaqueta-blanco-zara-barato-blazer-original-espalda-abierta-arrasa-influencers-20210818130942-nt.html&psig=AOvVaw36JjxGIm28tt6YbVrKY_sy&ust=1653868432151000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICZ6aSyg_gCFQAAAAAdAAAAABAH",
      price: 2000,
    },
    { 
    name: "Remera negra",
    category: "remera",
    id:3,
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.childrensalonoutlet.com%2Fes%2Fdolce-gabbana-teen-black-logo-sweater-344314.html&psig=AOvVaw3DIfDbLuMKi8_W0rs0njCc&ust=1653868389836000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiR3JCyg_gCFQAAAAAdAAAAABAI",
    price: 1000,
    },
    {
    name: "Remera blanca",
    category: "remera",
    id:4,
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mujerhoy.com%2Fmoda%2Fno-te-pierdas%2Ftraje-chaqueta-blanco-zara-barato-blazer-original-espalda-abierta-arrasa-influencers-20210818130942-nt.html&psig=AOvVaw36JjxGIm28tt6YbVrKY_sy&ust=1653868432151000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICZ6aSyg_gCFQAAAAAdAAAAABAH",
    price: 2000,
    }
    ]

    
    export const getFetch = (id) => {
      return new Promise((resolve) => {
          setTimeout(() => {
              const query = id ? products.find(product => product.id === id) : products
              resolve(query)
          },2000)
      })
    }
    