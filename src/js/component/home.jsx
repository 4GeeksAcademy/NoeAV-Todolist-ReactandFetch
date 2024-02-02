import React, { useEffect,useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	// Updatelist - agregar nuevas tareas 
	const updateList = (e) => {
		if (e) {
			if (e?.key != "Enter") {
				return null
			} 
		}
		
		if (inputValue != "") {
			setTodos(todos.concat({ label: inputValue, done: false }));
			setInputValue("");
		}
	  };



	const getList = () => {
		fetch("https://playground.4geeks.com/apis/fake/todos/user/NoeAV")
		  .then((response) => response.json())
		  .then((data) => setTodos(data));
	  };
	

	
	const deleteTodo = (index) => {
		if (todos.length === 1) {
			setTodos([{ label: "example task", done: false }])
		} else (
			setTodos(todos.filter((item, i) => i !== index))
		)
	  };


	const updateListOnServer = (newList) => {
		fetch("https://playground.4geeks.com/apis/fake/todos/user/NoeAV", {
		  method: "PUT",
		  body: JSON.stringify(newList),
		  headers: {
			"Content-Type": "application/json",
		  },
		})
		  .then((resp) => resp.json())
		  .then((data) => console.log("Lista actualizada en el servidor:", data))
		  .catch((error) => console.error("Error al actualizar la lista en el servidor:", error)
		);
	  };
	
	
	  useEffect(() => {
		getList();
	  }, []);

	  useEffect(() => {
		updateListOnServer(todos);
	  }, [todos]);


	  return (
		<div className="container">
		  <h1>Todo list using React + Fetch </h1>
		  <ul>
			<li>
			  <div className="d-flex">
				<input
				style={{height:"39.8px"}}
				  type="text"
				  onChange={(e) => setInputValue(e.target.value)}
				  value={inputValue}
				  placeholder="What do you need to do?"
				  onKeyDown={(e) => updateList(e)}
				></input>
				
				<button type="button" className="btn btn-outline-secondary d-flex" style={{height:"39.8px"}} >
				<i className="fa-solid fa-wand-sparkles fa-beat"
					style={{ color: "#FFB650" }}
					onClick={() => updateList()}
				  ></i>
				  Add 
				</button>


			  </div>
			</li>
			<ul className="container mt-4 listOfTodos justify-content-center">
			  {todos.map((item, i) => (
				<li key={i}>
				  {item.label}{" "}
				  <i
					className="fa-solid fa-trash-can"
					style={{ color: "#FFB650" }}
					onClick={() => deleteTodo(i)}
				  ></i>
				</li>
			  ))}
			</ul>
		  </ul>
		  <div className="leftTask">{todos.length} left.</div>
		</div>
	  );
	};

export default Home;
