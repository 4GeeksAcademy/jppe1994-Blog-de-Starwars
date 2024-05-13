
import React, { useState, useEffect, useContext } from "react";
import { Link, useActionData } from "react-router-dom";
import { Context } from "../store/appContext";


export const People = (props) => {
 const {store,actions}=useContext(Context) 


	return (
		<>
        <div className="card my-3 mx-auto" style={{width: "18rem"}}>
            
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">UID -
            {props.uid}
            {props.name}</p>
            <button className="btn btn-primary" onClick={()=>{actions.setFavorito(props.title)}}>Me gusta</button>
            <Link className="btn btn-primary mx-1" to={"/people/" + props.uid}>
								<span>ver Personaje</span>
			</Link>
        </div>
        </div>
         


        </>
	);
};

