export class Userprofile {
    constructor(public name:string,
      public login:string,
      public avatar_url:string,
      public followers:string,
      public following:string,
      public repositories:number,
      public bio:string,
      public location:string,
      public email:string,
      public created:Date
    ){}
}
