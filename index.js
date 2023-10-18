let peliculas = []
for(let i = 0; i < data.length; i++) {
    const peliculas1 = data[i]
    const p = new Peliculas( 
        peliculas1.titulo, 
        peliculas1.sinopsis, 
        peliculas1.Image, 
        peliculas1.rating,
            )
            peliculas.push(p)
}      

function renderAllPeliculas(peli) {
    let container = document.getElementById("populares")
    container.innerHTML = ""
    for(let i = 0; i < peli.length; i++) {
        const pe = peli[i]
        container.innerHTML += pe.toHtml(i)
    }
}
renderAllPeliculas(peliculas)

function renderAllPeliculasestreno(peli) {
    let container = document.getElementById("estreno")
    container.innerHTML = ""
    for(let i = 0; i < peli.length; i++) {
        const pe = peli[i]
        container.innerHTML += pe.toHtml(i)
    }
}
renderAllPeliculasestreno(peliculas)

function peliculaSelected(position){
    var pelicula= peliculas[position]
document.getElementById("bannerimagen").src=pelicula.Image
console.log(pelicula);
} 

