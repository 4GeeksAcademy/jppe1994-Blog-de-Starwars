import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const NaveView = props => {
	const { store, actions } = useContext(Context);
	const [naveViews, setNaveViews] = useState({})
	useEffect(()=>{
		console.log('se cargo la vista de nave')
		fetch('https://www.swapi.tech/api/starships/' + params.nave_id)
					.then((response) => response.json())
					.then((data)=> setNaveViews(data.result.properties ))
	},[])
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">Vista nave: {params.nave_id}</h1>

			<hr className="my-4" />
			<p> Model:{naveViews.model} </p>
			<p> manufacturer:{naveViews.manufacturer} </p>
			<p> name:{naveViews.name} </p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

NaveView.propTypes = {
	match: PropTypes.object
};
