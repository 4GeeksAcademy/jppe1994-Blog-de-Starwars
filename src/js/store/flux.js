const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajesFlux: [
				{
					uid: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					uid: "SECOND",
					name: "white2",
					initial: "white"
				}
			],
			favoritos:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// personajesCall : () =>{
			// 	fetch ('https://www.swapi.tech/api/people')
			// 	.then(resp => resp.json())
			// 	.then (resp => resp)
			// 	.catch(error=>console.log(error))

			// },
			// personajesUrls : async ()=>{
			// 	const lista = await getActions().personajesCall();
			// 	const {results} = lista;
			// 	const urls = results.map(result => result.url);
			// 	return urls

			// },
			// getPersonajes : async ()=>{
			// 	const urls = await getActions().personajesUrls ();
			// 	const personajes = await urls.map(url => fetch(`https://www.swapi.tech/api/people${url}`))
			// 	return personajes

			// }
			

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				
				
					console.log('se cargo desde flux')
					fetch('https://www.swapi.tech/api/people')
					.then((response) => response.json())
					.then((data)=> setStore({ personajesFlux: data.results }))
							  
					
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setFavorito: (name)=>{
				console.log(name)
				let store=getStore()
				if(!store.favoritos.includes(name)){setStore({favoritos:[...store.favoritos,name]})}

			},
			setDeletF: (name) => {
				let store=getStore()
				const result = store.favoritos.filter((favorito) => (favorito != name));
				setStore ({favoritos:result})
			}
		}
	};
};

export default getState;
