class Peliculas {
    constructor(titulo, sinopsis, Image, rating) {
        this.titulo = titulo
        this.sinopsis = sinopsis
        this.Image = Image
        this.rating = rating
        }

    toHtml(position) {
        return `
        <div onclick='peliculaSelected(${position})'><img src="${this.Image}" width="300" height="400" alt=""> 
        <div class="estrellas">
            <img src="./silueta-de-estrella-negra.png" width="32" alt="">
            <img src="./silueta-de-estrella-negra.png" width="32" alt="">
            <img src="./silueta-de-estrella-negra.png" width="32" alt="">
            <img src="./silueta-de-estrella-negra.png" width="32" alt="">
            <img src="./estrella.png" width="32" alt="">
        </div>
    </div>
        `
        
    }
    
}
