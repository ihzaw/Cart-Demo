const request = require("supertest");
const app = require("../app");
// const { User, Product, Cart, CartProduct } = require('../models')
const { User, Product, Cart, CartProduct } = require('../models')

const productData = [
    {
        "product_name": "2-pack Jersey Tops",
        "product_description": "Fitted, long-sleeved tops in stretch organic cotton jersey with a wide neckline.",
        "product_price": 299900,
        "product_imgUrl": "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/fd158ea8eb1159c833dcf866780a92076181e9ab_xxl-1.jpg"
      },
      {
        "product_name": "Wide Crease-leg Trousers",
        "product_description": "Trousers in woven fabric. High waist with concealed elastication, a zip in one side and pleats at the front for added width. Side pockets and wide, straight legs with creases.",
        "product_price": 549900,
        "product_imgUrl": "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/621dc1d3bffe6a112c2ff7ffcbce79f9c4ca150b_xxl-1.jpg"
      },
]

beforeAll((done) => {
    User.create({ username: 'sampleuser' })
    .then(() => {
       Cart.create({ userId: 1 })
    })
    .then(() => {
       Product.bulkCreate(productData)
    })
    .then(() => {
       done()
    })
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
    .then(() => {
        Cart.destroy({
            truncate: true,
            restartIdentity: true,
            cascade: true,
        })    
    })
    .then(() => {
        Product.destroy({
            truncate: true,
            restartIdentity: true,
            cascade: true,
        })    
    })
    .then(() => {
        CartProduct.destroy({
            truncate: true,
            restartIdentity: true,
            cascade: true,
        })    
    })
    .then(() => done())
    .catch(err => done(err))
})

describe ("GET /products", () => {
    test("success should return array of objects with status code 200", (done) => {
        request(app)
        .get('/products')
        .then((response) => {
            const result = response.body
            const entry = result[0]
            
            expect(response.status).toBe(200)
            expect(result).toBeInstanceOf(Array)
            expect(entry).toBeInstanceOf(Object)
            expect(entry).toHaveProperty("product_name")
            expect(entry).toHaveProperty("product_description")
            expect(entry).toHaveProperty("product_price")
            expect(entry).toHaveProperty("product_imgUrl")
            done()
        })
        .catch(err => done(err))
    })
})

// {
//     message: 'Added to Cart',
//     response
// }

describe("POST /carts/:userId", () => {
    const body = {
        productId: 1
    }

    test("success should return object with status code 201", (done) => {
        request(app)
        .post("/carts/1")
        .send(body)
        .then((response) => {
            const result = response.body
            
            expect(response.status).toBe(201)
            expect(result).toBeInstanceOf(Object)
            expect(result).toHaveProperty("message", "Added to Cart")
            expect(result).toHaveProperty("response")
            done()
        })
        .catch(err => done(err))
    })
})