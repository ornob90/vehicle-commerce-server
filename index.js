const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();

app.use(express.json());

const port = process.env.PORT || 5001;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4hptkj7.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Inserting all the data to the database complete

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productCollection = client.db("autoMobileDB").collection("product");
    const cartCollection = client.db("autoMobileDB").collection("cart");

    // get all products
    app.get("/products", async (req, res) => {
      const cursor = productCollection.find();
      const result = await cursor.toArray();

      res.send(result);
    });

    // get all cart products
    app.get("/carts", async (req, res) => {
      const cursor = cartCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get products by category
    app.get("/products/:category", async (req, res) => {
      const category = req.params.category;

      const query = { category };

      const cursor = productCollection.find(query);
      const result = await cursor.toArray();

      res.send(result);
    });

    // get single product details
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);

      res.send(result);
    });

    // post single product
    app.post("/product", async (req, res) => {
      const product = req.body;

      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    // post single cart product
    app.post("/carts", async (req, res) => {
      const product = req.body;

      const result = await cartCollection.insertOne(product);
      res.send(result);
    });

    // post multiple product
    app.post("/products", async (req, res) => {
      const products = req.body;
      const options = { ordered: true };

      const result = await productCollection.insertMany(products, options);
      res.send(result);
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.listen(port, () => {
  console.log("Server Running");
});
