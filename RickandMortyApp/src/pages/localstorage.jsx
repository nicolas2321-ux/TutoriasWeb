


export function LocalStorage(){
    function handlerClick(){
        const objecto = {
            name: "hola",
            apellido: "mundo"
        }
        const guardado = JSON.stringify([objecto])
       localStorage.setItem("prueba", guardado) //crea una variable en el local storage.
    }
    function showLocal(){
        const local = JSON.parse(localStorage.getItem("prueba"))
        console.log(local)
    }
    //JSON.parse === convertir elemento para leerlo
    //JSON.stringify === convertir elemento para guardarlo
    return(
        <>
        <h1>HOLA MUNDO</h1>
        <button onClick={handlerClick}>crear variable de local storage</button>
        <button onClick={showLocal}>Mostrar elementos del local</button>
        </>
    )
}