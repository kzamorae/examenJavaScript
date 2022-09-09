class Persona{
    nombre;
    apellido;
    edad;
    
    constructor (nombre,apellido,edad){
        this.nombre =nombre;
        this.apellido =apellido;
        this.edad= edad;
    }
    
    getDetalles (){
        console.log ("Jugador: " + this.nombre + " " + this.apellido + 
        "de" + this.edad +"años. ");
    
    }
 }

class Jugador extends Persona{
    posicion;
    constructor(nombre,apellido,edad,posicion){
        super (nombre,apellido,edad);
        this.posicion = posicion;
        
        }

    getDetalles (){
        super.getDetalles();
        console.log ("y su posicion es " + this.posicion);
    }
}

class Entrenador extends Persona{
    aniosExperiencia;
    idFederacion;
    constructor(nombre,apellido,edad,aniosExperiencia,idFederacion){
    
        super (nombre,apellido,edad);
        if (this.idFederacion == ''){ 
            this.idFederacion = generarIdEntrenador()
        }
        this.aniosExperiencia = aniosExperiencia;
        this.idFederacion =  idFederacion;

        }

    getDetalles (){
        super.getDetalles();
        console.log ("El entrenador tiene  "+ this.aniosExperiencia +" años de experiencia ");
        console.log (" y su identificacion es "+ this.idFederacion);
    }
    generarIdEntrenador(){
        let numberResult =  Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
        return numberResult
    }

}

class Equipo {
    director;
    arrayJugadores;
    constructor(director,infoEquipo){
        this.director =director;
        this.arrayJugadores = infoEquipo;
        
        }

    getDetalles (){
        for (let index = 0; index < arrayJugadores.length; index++) {
            let jugador1 = this.arrayJugadores[index][3];
            let jugadorRiver = new Jugador (this.arrayJugadores[index][0],this.arrayJugadores[index][1],this.arrayJugadores[index][2],this.arrayJugadores[index][3]);
            jugadorRiver.getDetalles();
        }
    } 


}
let arrayJugadores = ([["Jan","Giron",7,"Portero"],["Martin","Delgado",8,"Defensa"],["Stefano","Nieto",8,"Medio"],["Ricardo","Briones",7,"Delantero"]]);
let entrenador1River= new Entrenador ("Julian","Suarez",43,15);

//let River = new Jugador ([["Jan","Giron",7,"Portero"],["Martin","Delgado",8,"Defensa"],["Stefano","Nieto",8,"Medio"],["Ricardo","Briones",7,"Delantero"]]);
console.log (arrayJugadores);
console.log (entrenador1River);

