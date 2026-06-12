const links = [
  { texto: "YouTube", url: "https://youtube.com" },
  { texto: "Google", url: "https://google.com" }
];
const html = links.map(link => `<a href="${link.url}">${link.texto}</a>`)

console.log(html)
