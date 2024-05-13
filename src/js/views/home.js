import React, {useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Nave } from "../component/nave";
import { Context } from "../store/appContext";
import { People } from "../component/people";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [nave, setNave]= useState([])
	const [people,setPeople]=useState([])

	useEffect(() => {
		console.log('se cargo Home')
		fetch('https://www.swapi.tech/api/starships')
			      .then((response) => response.json())
			      .then((data)=> setNave(data.results))
		},[])

	
	return (
	
			 <div className="container row mx-auto">
			{/* <div className="col">
				<Nave title='nave 1' />
			</div>
			<div className="col">
				<Nave title='nave 2' />
			</div>
			<div className="col">
				<Nave title='nave 3' />
			</div>
			<div className="col">
				<Nave  title='nave 4'/>
			</div>

			Linea 35 ,mapea la constante nave y lo guarda en item para asignarle un id que será uid
			y luego escribira el nombre de las naves en un parrafo
			{nave.map((item)=><p key={item.uid}>{item.name}</p>)} */}
				<h1>Naves desde API</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					
				
					{nave.map((item)=><Nave key={item.uid} uid={item.uid} title={item.name}/>)}
					

				</div>
				
				<h1>Personajes desde Flux</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					
				{store.personajesFlux.map((item)=><People key={item.url} uid={item.uid} title={item.name}/>)}

				</div>
			
			

		</div>
				
			
		
				

	
	
	
	
);
};