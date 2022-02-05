const request = require("supertest");
const app = require("../app");
const { User, Product, Cart, CartProduct } = require('../models')

const productData = [
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
]

beforeAll((done) => {
    User.create({ username: 'sampleuser' })
    .then(_ => {
        Cart.create({ userId: 1 })
    })
    .then(_ => {
        Product.bulkCreate(productData)
    })
    .then(_ => done())
    .catch(err => done(err))
})

beforeEach(() => {
    jest.restoreAllMocks()
})

afterAll((done) => {
    User.destroy({
        truncate: true,
        restartIdentity: true,
        cascade: true,
    })
    .then(_ => {
        Cart.destroy({
            truncate: true,
            restartIdentity: true,
            cascade: true,
        })    
    })
    .then(_ => {
        Product.destroy({
            truncate: true,
            restartIdentity: true,
            cascade: true,
        })    
    })
    .then(_ => {
        CartProduct.destroy({
            truncate: true,
            restartIdentity: true,
            cascade: true,
        })    
    })
    .then(_ => done())
    .then(err => done(err))
})

