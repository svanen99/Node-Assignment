const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;


const server = http.createServer((req, res) => {
    if (req.url.includes("/css/") || req.url.includes("/html/")) {
        const filePath = path.join(__dirname, req.url);

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`Error reading file ${filePath}:`, err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("File not found");
            } else {
                const contentType = req.url.includes(".css") ? "text/css" : "text/html";
                res.writeHead(200, { "Content-Type": contentType });
                res.end(data);
            }
        });
    } else if (req.url.includes("/about")) {
        const aboutPagePath = path.join(__dirname, "about-page.html");

        fs.readFile(aboutPagePath, (err, data) => {
            if (err) {
                console.error("Error reading about-page.html:", err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("About page not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url.includes("/main")) {
        const indexPath = path.join(__dirname, "index.html");

        fs.readFile(indexPath, (err, data) => {
            if (err) {
                console.error("Error reading index.html:", err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("Main page not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url.includes("/contact")) {
        const contactPagePath = path.join(__dirname, "contact-page.html");

        fs.readFile(contactPagePath, (err, data) => {
            if (err) {
                console.error("Error reading contact-page.html:", err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("Contact page not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url.includes("/info")) {
        const indexPath = path.join(__dirname, "info-page.html");

        fs.readFile(indexPath, (err, data) => {
            if (err) {
                console.error("Error reading info-page.html:", err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("Info page not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
       
        const homePagePath = path.join(__dirname, "index.html");

        fs.readFile(homePagePath, (err, data) => {
            if (err) {
                console.error("Error reading index.html:", err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("Home page not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

