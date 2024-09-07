document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('options');

    // Añadir una opción en blanco al principio
    const blankOption = document.createElement('option');
    blankOption.value = "";  // Valor vacío para la opción en blanco
    blankOption.textContent = "Selecciona una opción";  
    blankOption.disabled = true;  // Deshabilitar para evitar selección
    blankOption.selected = true;  // Seleccionada por defecto
    selectElement.appendChild(blankOption);  // Añadir al select

    // Fetch al archivo JSON para obtener las opciones
    fetch('options.json')
        .then(response => response.json())
        .then(data => {
            // Iterar sobre el JSON y crear opciones en el select
            data.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;  // Asignar valor a la opción
                optionElement.textContent = option.label;  // Mostrar etiqueta
                selectElement.appendChild(optionElement);  // Añadir opción al select
            });
        })
        .catch(error => console.error('Error fetching options:', error));

    // Escuchar el evento submit y mostrar los campos como un objeto en consola
    document.getElementById('myForm').addEventListener('submit', (event) => {
        event.preventDefault();  // Evitar el envío real del formulario

        // Crear un objeto con los valores del formulario
        const formData = {
            name: document.getElementById('name').value,  
            email: document.getElementById('email').value,  
            password: document.getElementById('password').value,  
            optionSelected: document.getElementById('options').value  // Valor de la opción seleccionada
        };

        // Imprimir el objeto en consola
        console.log(formData);
    });
});


