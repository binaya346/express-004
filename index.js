import express from 'express'
const app = express()

// API GET, POST, DELETE, PUT
app.get('/', (req, res) => {
    // req object is used to access the request. 
    // res object is used to access the response
    res.send('Hello World! Hello from the MERN stack class')
})

app.get("/api", (req, res) => {
    res.json({ "mesage": "Hello you have hit our api endpoint" })
});

app.get("/contact", (req, res) => {
    res.json({ "mesage": "hello from contact page" })
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})