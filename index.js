import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hello World!<h1>")
})
app.get("/about", (req, res) => {
    res.send("about")
})
app.get("/contact", (req, res) => {
    res.send("contact")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})