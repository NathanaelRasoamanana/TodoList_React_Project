import ListMovies from "../components/ListMovies";
import ListTasks from "../components/ListTasks";

//page qui combine l'affichage de la liste des tâches et la liste films que je pourrais ajouter dans ma liste
export default function PageListTasksMovies(){
    return(
        <>
            <ListTasks/>    
            <ListMovies/>
        </>
    )
}