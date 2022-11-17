import * as fs from 'fs'

class Alumno{
    private name: string;
    private id: number;
    private note: number;

    public constructor(name:string, id:number, note: number){
        this.name = name;
        this.id = id;
        this.note = note;
    }

    public getNote(): number{
        return this.note;
    }

    public estaAprobado(){
        if (this.note < 0){
            throw new Error ("Los números negativos no pueden ser notas");
        }
        if (this.note >=7 && this.note<= 10){
            console.log ("El Alumno" + this.name+ " esta aprobado")
        } else if (this.note < 7 && this.note > 0){
            console.log ("El Alumno" + this.name+ " esta desaaprobado")
        } else if (this.note > 10) {
            throw new Error ("Los números mayores a 10 no pueden ser notas")
        }
    }


}

class Maestro{
    private name: string;
    private id: number;
    private listaAlumnos: Alumno[];

    public constructor(name:string, id:number, listaAlumnos: Alumno[]){
        this.name = name;
        this.id = id;
        this.listaAlumnos = listaAlumnos;
    }

    public getListadeAlumnos (): Alumno[]{
        return this.listaAlumnos;
    }
}

class Escuela{
    private name:string;
    private address: string;
    private listaAlumnos: Array<Alumno>;
    private listaProfes: Array<Maestro>;

    public constructor(name:string, address:string, listaAlumnos:Array<Alumno>, listaProfes:Array<Maestro>){
        this.name = name;
        this.address = address;
        this.listaAlumnos = listaAlumnos;
        this.listaProfes = listaProfes;

    }

    public getListadeAlumnos(): Array<Alumno> {
        return this.listaAlumnos;
    }

    public getListadeProfesores (): Array<Maestro>{
        return this.listaProfes;
    }
}

//instalar npm install @types/node
// creamos un gestor que nos permite leer un archivo de texto
​
class GestorDeArchivos {
​
    private arregloString: string[];
​
    constructor(txtFileLocation: string) {
​
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); //esta variable guarda "Karen Simari,325486925;Juan Garcia,254879658;Lola Perez,124587625"
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
        //["Karen Simari,325486925","Juan Garcia,254879658", "Lola Perez,124587625"]
    
    }
​
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
​
    public getArregloString(): string[] {
        return this.arregloString;
    }
​
}

let alumno1 : Alumno = new Alumno ("franco", 37.36055, -8);
let alumno2 : Alumno = new Alumno ("franco", 37.36055, 8); 
let alumno3 : Alumno = new Alumno ("franco", 37.36055, 18);
let alumno4 : Alumno = new Alumno ("franco", 37.36055, 5);

try {
  alumno3.estaAprobado();  
 } catch (Error){
    console.log ("Dato invalido: " + Error.message);
 }


