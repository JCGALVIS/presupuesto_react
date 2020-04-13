export const revisarPresupuesto = (presupeusto, restante) =>{
    let clase;

    if((presupeusto / 4) > restante){
        clase = "alert alert-danger";
    }else if ((presupeusto / 2) > restante){
        clase = "alert alert-warning";
    }else{
        clase = "alert alert-success";
    }

    return clase;
}