const form = document.getElementById("formularioId");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let formularioIdData = new FormData(form);

    let transactionTableReference = document.getElementById("transactionTable");
    let newTransactionRow = transactionTableReference.insertRow(-1);

    let newTypeCell = newTransactionRow.insertCell(0);
    newTypeCell.textContent = formularioIdData.get("nombre_producto");

    newTypeCell = newTransactionRow.insertCell(1);
    newTypeCell.textContent = formularioIdData.get("precio_producto");

    newTypeCell = newTransactionRow.insertCell(2);
    newTypeCell.textContent = formularioIdData.get("cantidad_producto");

    newTypeCell = newTransactionRow.insertCell(3);
    newTypeCell.textContent = formularioIdData.get("categoria_producto");

    let eliminarCelda = newTransactionRow.insertCell(4);
    let eliminarBoton = document.createElement("button");
    eliminarBoton.textContent = "Eliminar";
    eliminarCelda.appendChild(eliminarBoton)

    eliminarBoton.addEventListener("click", (event) =>{
        event.target.parentNode.parentNode.remove()

    
    })
    let actualizarCelda = newTransactionRow.insertCell(5);
    let actualizarBoton = document.createElement("button");
    actualizarBoton.textContent = "Actualizar";
    actualizarCelda.appendChild(actualizarBoton)

    actulizarBoton.addEventListener("click", (event) =>{
        console.log(event.target.parentNode)
        
    })
})