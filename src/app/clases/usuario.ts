export class Usuario {
  public correo : string;
  public clave : string;
  public sexo : string;
  public perfil : string;
  public id : number;

  public constructor(correo,clave,id=0){
      this.clave = clave;
      this.correo = correo;
      this.id = id;
  }
  public SetId(id){
      this.id = id;
  }
}
