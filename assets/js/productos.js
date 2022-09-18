
const arraysPintura = [];

class Pintura {
    constructor (marca, tipo, color, descripcion, litros, precio) {
        this.marca = marca,
        this.tipo = tipo,
        this.color = color,
        this.descripcion = descripcion,
        this.litros = litros,
        this.precio = precio,
        this.imagen = `./assets/image/tienda/img${color}.jpg`
    }
}

const verde = new Pintura ("Alba", "Latex", "Verde", "Fresco como montañas", 5, 450);
arraysPintura.push (verde);

const amarillo = new Pintura ("Alba", "Latex", "Amarillo", "Todo el varnao en tu sala", 5, 450);
arraysPintura.push (amarillo);

const rojo = new Pintura ("Pintecord", "Latex", "Rojo", "Pasion en tus paredes", 4, 470);
arraysPintura.push (rojo);

const azul = new Pintura ("Alba", "Latex", "Azul", "Las tanquilidad en tu sala", 4, 460);
arraysPintura.push (azul);

const negro = new Pintura ("Pintecord", "Latex", "Negro", "Elegancia y estilo en los detalles", 6, 600);
arraysPintura.push (negro);

const violeta = new Pintura ("Alba", "Latex", "Violeta", "Vibrante e intrepida", 5, 465);
arraysPintura.push (violeta);









