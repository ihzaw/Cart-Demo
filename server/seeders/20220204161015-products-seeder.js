'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const datas = [
      {
        product_name: "2-pack Jersey Tops",
        product_description: "Fitted, long-sleeved tops in stretch organic cotton jersey with a wide neckline.",
        product_price: 299900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/fd158ea8eb1159c833dcf866780a92076181e9ab_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Wide Crease-leg Trousers",
        product_description: "Trousers in woven fabric. High waist with concealed elastication, a zip in one side and pleats at the front for added width. Side pockets and wide, straight legs with creases.",
        product_price: 549900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/621dc1d3bffe6a112c2ff7ffcbce79f9c4ca150b_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Jersey Sleeveless Top",
        product_description: "Relaxed-fit sleeveless top in soft cotton jersey with a round, rib-trimmed neckline.",
        product_price: 169900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/5ce1384f98c40da8de5980051517b60cf995b471_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Sleeveless Jersey Dress",
        product_description: "Short, straight-cut dress in soft cotton jersey. Relaxed fit with gently dropped shoulders and short slits in the sides of the hem.",
        product_price: 199900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/114380e8578b7bdd5f8f3fe364045bb2a427a216_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Shirt Jacket",
        product_description: "Shirt jacket in woven fabric with a collar, buttons down the front and flap chest pockets. Low dropped shoulders, long sleeves with buttoned cuffs, and a rounded hem. Unlined. Some of the polyester content of the jacket is recycled.",
        product_price: 479900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9b4c29bf09db01e99742fc0c0bd9815eb324b03_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "2-pack Long Fit T-shirts",
        product_description: "Long, round-necked T-shirts in soft cotton jersey with ribbing around the neckline. Straight, relaxed fit with a curved hem.",
        product_price: 379900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/0ffbed718bdfdf74ea87e61023458d3d6815065f_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "2-pack Regular Fit Joggers",
        product_description: "Joggers in sweatshirt fabric made from a cotton blend. Regular fit with covered elastication and a drawstring at the waist, pockets in the side seams and ribbed hems. Soft brushed inside.",
        product_price: 549900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/5b03ee553e41be57e118e4ec54c717417a944422_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Patterned Socks",
        product_description: "Socks in a soft, jacquard-knit cotton blend with elasticated tops.",
        product_price: 49900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4176de51d1f0113aeb6bf23020a109497ead43b8_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Non-medical Face Mask",
        product_description: "Packet containing two double-layered, reusable face masks with adjustable-length elastic straps for best fit.",
        product_price: 129900,
        product_imgUrl: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/446cb19b2ba36f44cd002ad1afac61d68abf96ca_xxl-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Products', datas)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products')
  }
};
