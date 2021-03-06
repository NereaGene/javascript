/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
var arrayVacio=[];
var objetoVacio={

};
var objeto={
    nombre: "Neres",
    apellido: "Ramírez",
    ciudad: "Madrid",
    profesion: "Front end developer",
    edad:28,
    activo:true,
    cursos:["Javascript","HTML","CSS"],
    toString: function(){
        //console.log(objeto);
        //console.log(objeto.nombre);
        //console.log(this.nombre);
        return "Objeto[nombre:"+this.nombre+",apellido:"+this.apellido
            +",ciudad:"+this.ciudad+",profesion:"+this.profesion+"]";
    },
    getNombre:function(){
        return this.nombre;
    },
    setNombre: function (n) {
        this.nombre=n;
    },
    addCurso: function (nombreCurso){
        this.cursos.push(nombreCurso);
    },
    //encapsulamiento
    direccion:{
        calle:"mayor",
        numero:14,

    }
};
console.log(objeto);
console.log(objeto.nombre);
objeto.nombre="Pepe";
console.log(objeto.nombre);
console.log(objeto.toString());
console.log(objeto.getNombre());
objeto.setNombre("Carlos");
console.log(objeto.getNombre());
console.log(objeto.cursos);
console.log(objeto.cursos[0]);
console.log(objeto.cursos[2]);
objeto.cursos[2]="CSS3";
objeto.addCurso("CSS2");
console.log(objeto.cursos);
console.log(objeto.direccion);
console.log(objeto.direccion.calle);