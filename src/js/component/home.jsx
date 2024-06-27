import React, { useState } from "react";


//create your first component

function TodoTareas({label, is_done, onclick, toggle_todo}) {
	return(
		<div className="TodoTareas">
			<input type="checbox" checked={is_done} onChange={toggle_todo}/>
			<span className="todo-text">{label}</span>
			<button className="btn btn-danger" onClick={onclick}>
			Borrar
			</button>
		</div>
	)
}




const Home = () => {
	const [tareas, setTareas] = useState([])
	return (
		<form className="container d-flex flex-column align-items-center justify-content-start ">
			<h1>Tododlist</h1>
			<input
				className="form-control form-control-lg" 
				type="text" 
				placeholder="Introduce tarea" 
				aria-label=".form-control-lg example">
			</input>
			{tareas.map()}
			<div className="listaTareas">
				<input type="checkbox" />
				<span>feed the cat</span>
				<button className="btn btn-danger">borrar</button>
			</div>
		</form>
	);
};

export default Home;
