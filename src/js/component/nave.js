
import React, { useState, useEffect, useContext } from "react";
import { Link, useActionData } from "react-router-dom";
import { Context } from "../store/appContext";


export const Nave = (props) => {
    const {store,actions}=useContext(Context) 


	return (
		<>
        <div className="card my-3 mx-3" style={{width: "18rem"}}>
            
        <img src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`} className="card-img-top" id="imagenes"  alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">UID - 
            {props.uid}
            </p>

            <button className="btn btn-primary" onClick={()=>{actions.setFavorito(props.title)}}>Me gusta</button>
            <Link className="btn btn-primary mx-1" to={"/nave/" + props.uid}>
								<span>ver nave</span>
			</Link>
        </div>
        </div>
         


        </>
	);
};

