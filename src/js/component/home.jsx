import React, { useEffect,useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	


	// const actualizarListaEnServidor = (nuevasTareas) => {
	// 	fetch('https://psychic-capybara-qwv7qrgw6xx2jrg-3000.app.github.dev/', {
	// 	  method: "PUT",
	// 	  body: JSON.stringify(nuevasTareas),
	// 	  headers: {
	// 		"Content-Type": "application/json"
	// 	  }
	// 	})
	// 	.then(resp => resp.json())
	// 	.then(data => console.log('Lista actualizada en el servidor:', data))
	// 	.catch(error => console.error('Error al actualizar la lista en el servidor:', error));
	//   };
	  
	//   const agregarNuevaTarea = () => {
	// 	// Añadir la nueva tarea al estado 'todos'
	// 	setTodos(todos.concat(inputValue));
	  
	// 	// Realizar una solicitud PUT para actualizar la lista en el servidor
	// 	actualizarListaEnServidor(todos.concat(inputValue));
	  
	// 	// Limpiar el campo de entrada después de agregar la tarea
	// 	setInputValue("");
	//   };
	  
	//   const eliminarTarea = (index) => {
	// 	// Filtrar las tareas para eliminar la tarea en el índice proporcionado
	// 	const nuevasTareas = todos.filter((_, currentIndex) => index !== currentIndex);
	  
	// 	// Actualizar el estado 'todos' con las nuevas tareas
	// 	setTodos(nuevasTareas);
	  
	// 	// Realizar una solicitud PUT para actualizar la lista en el servidor
	// 	actualizarListaEnServidor(nuevasTareas);
	//   };



	return (
		<div className="container">
			<h1>Todo list using React + Fetch </h1>
			<ul>
				<li>
					<input type="text" 
					// event = e. Así que el "e.target.value" es la version corta de "event.target.value"
					// el "value" de los inputs/events hace referencia a literalmente lo que estamos escribiendo en el input
					onChange={(e) => setInputValue(e.target.value)} 
					value={inputValue}
					onKeyPress={(e) => 
						e.key === "Enter" 
						? agregarNuevaTarea()
						: null
					}
					placeholder="What do you need to do?"></input>
				</li>
				
				{todos.map((item, index) => (
					<li> 
						{item} {" "} <i className="fa-solid fa-eraser" style={{color: "#FFB650"}} 
						onClick={() => 
							eliminarTarea (index)	
						}></i>
					</li>
				))}

				
			
			</ul>
			<div className="leftTask"> {todos.length} left.</div>
		</div >
	);
};

export default Home;
