export type TaskProps = {
      id:string ; 
      title:string ; 
      description?:string ;
      date:string;
      done:boolean;
      late:boolean;
};

//Je mets la description en optionnelle directement dans le type
//Même si hook-form le gère dejà bien à l'affichage 
//(on ne sait jamais)s