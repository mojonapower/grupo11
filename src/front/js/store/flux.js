const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			//classRegistration: [],
			//classParticipants: [],
			token: [],
			//login: false,
			islogin: false,

			dataempresa: {
				CELULAR: "9999 8888",
				DESCRIPCION: "del palo de cas 500 varas",
				FOTO_FONDO: ".//fotos/principal.jpg",
				ID: 1,
				LATITUD: "10 10 10",
				LOGO: "..//fotos/logo.jpg",
				LONGITUD: "20 20 20",
				NOMBRE: "compania demo",
				OTROS: "por si acaso",
				TELEFONO: "8888 9999",
				UBICACION: "provincia demo"
			},
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
			clasesdisponibles: [
				/* {
					DESCRIPCION: "conozca las ultimas tecnicas sagradas de kami",
					DIA_SEMANA: "Miercoles",
					DURACION: 60,
					ENTRENADOR: "mr Popo",
					ESPACIOS: 10,
					ESPACIOS_DISPONIBLES: 10,
					ESTADO: "Publicada",
					FECHA_INICIO: "Mon, 03 May 2021 00:00:00 GMT",
					FOTO: "..//fotos/actividad_kempo.jpg",
					HORA_INICIO: "20:00",
					ID: 1,
					LUGAR: "templo sagrada kamizama",
					NOMBRE: "kempo",
					PRECIO: 0
				} */
			],
			misclasesreservadas: [
				/* {
					DESCRIPCION: "conozca las ultimas tecnicas sagradas de kami",
					DIA_SEMANA: "Miercoles",
					DURACION: 60,
					ENTRENADOR: "Mr. Satán ",
					ESPACIOS: 10,
					ESPACIOS_DISPONIBLES: 10,
					ESTADO: "Publicada",
					FECHA_INICIO: "Mon, 03 May 2021 00:00:00 GMT",
					FOTO: "..//fotos/actividad_kempo.jpg",
					HORA_INICIO: "20:00",
					ID: 1,
					LUGAR: "templo sagrada kamizama",
					NOMBRE: "kempo",
					PRECIO: 0
				} */
			],
			articulos: [],
			imagen: [
				"https://www.tecnosports.com/img/tecno/1194/1569082152/anillas-de-madera-para-gimnasia-deportiva.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/51QAoL7N7CL._AC_SX466_.jpg",
				"https://plussport.cl/wp-content/uploads/2020/05/banda-suspencion-trx-set.jpg",
				"https://www.mideporte.pe/wp-content/uploads/2020/07/pack-5-bandas-elasticas-de-resistencia-gimnasia-fitness-yoga-05.png",
				"https://images-na.ssl-images-amazon.com/images/I/51KQMjlRGUL._AC_SY355_.jpg",
				"https://sdmed.cl/wp-content/uploads/2019/08/2-15-600x600.jpg",
				"https://i.pinimg.com/originals/95/d0/57/95d05733e6624ae0d149cd979efd04e7.webp",
				"https://sportcornermv.com/wp-content/uploads/2020/05/EDUCACION-FISICA-MOTRICIDAD-COLCHONETA-INFANTIL-202068-202069-202070-202071-B-scaled.jpg",
				"https://www.lifefitness-latinamerica.com/resource/image/783210/landscape_ratio4x3/400/300/850d599d68924ce43e931543bca4476f/EY/lf-core-bags7-mr.jpg",
				"https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/rope_training_p.jpg",
				"https://www.medicaltex.pe/wp-content/uploads/2018/07/Disco-de-Equilibrio-Disco-Balance-Board-MEDICALTEX-SAC.jpg",
				"https://cdn.sportadictos.com/files/2014/03/escalera-de-coordinacion-8598-MLC20005148882_112013-F.jpg?w=1200&auto=format,compress",
				"https://www.carreraspormontana.com/images/sites/2/2016/05/foam-roller-exercises-660x300.jpg",
				"https://dojiw2m9tvv09.cloudfront.net/14107/product/X_ladrillogomaeva9437.jpg?105",
				"https://cdn11.bigcommerce.com/s-rtjifcqsd2/images/stencil/original/products/117/1469/MultipurposeEVA_Parent_2_sm__68648.1598033929.jpg?c=2",
				"https://jukeperformance.com/wp-content/uploads/2017/09/Medicine-Balls-01-1.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/71KwPy8BPiL._AC_SX425_.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/51RdNc%2Brq5L._AC_SX425_.jpg",
				"https://falabella.scene7.com/is/image/FalabellaPE/881734454_1?wid=800&hei=800&qlt=70",
				"https://www.ictiva.com/blog/wp-content/uploads/2015/07/steps-para-adelgazar-5.jpg",
				"https://images-na.ssl-images-amazon.com/images/I/61-gEJjwuoL._AC_SX425_.jpg",
				"https://m.media-amazon.com/images/I/61PHiY62BdL._AC_SX425_.jpg",
				"https://salud10.top/imagenes/2019/09/los-mejores-zafus.jpg",
				"https://cicadex.com/wp-content/uploads/2016/05/implementos-deportivos.png"
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			ErrorApi: status => {
				if (status > 200) alert("error: " + status);
			},

			nombreDelDiaSegunFecha: fecha => {
				const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
				return dias[fecha.getDay()];
			},

			updateClassRegistrationApi: (Class, fechaini) => {
				const actions = getActions();
				//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
				console.log("hora", fechaini);
				const fechaInicio = new Date(fechaini);

				console.log("hora date lista", fechaInicio);
				/* 
				let fechaInicio = `${fechaini.substring(6, 10)}-${Class.fechaIni.substring(
					3,
					5
				)}-${Class.fechaIni.substring(0, 2)}T${Class.fechaIni.substring(11, 13)}:${Class.fechaIni.substring(
					14,
					16
				)}:00Z`;

				fechaInicio = new Date(fechaInicio); */
				const dia = actions.nombreDelDiaSegunFecha(fechaInicio);
				var myHeaders = new Headers();

				myHeaders.append("Content-Type", "application/json");
				const jsonClase = {
					NOMBRE: Class.nombreClase,
					ENTRENADOR: Class.instructor,
					LUGAR: Class.lugar,
					PRECIO: Class.precio,
					ESPACIOS: Class.cupo,
					DESCRIPCION: Class.descripcion,
					ESTADO: Class.estado,
					DIA_SEMANA: dia, // "Lunes",
					FECHA_INICIO: fechaInicio, //"Mon, 03 May 2021 00:00:00 GMT", // Class.fechaIni,
					HORA_INICIO: fechaInicio.toLocaleTimeString().substring(0, 5), //`${f.getHours()}:${f.getMinutes()}`, //"20:00",
					DURACION: Class.duracion,
					FOTO: "..//fotos/actividad_kempo.jpg",
					EMPRESA_ID: 1 // por el momento es solo una empresa se debe cambiar a variable de empresa
				};

				fetch(process.env.BACKEND_URL + "/api/clases", {
					method: "POST",
					body: JSON.stringify(jsonClase),
					headers: myHeaders
				})
					.then(resp => {
						//console.log("respuesta SubirClase ", resp.ok); // will be true if the response is successfull
						//console.log("status SubirClase", resp.status); // the status code = 200 or code = 400 etc.
						//console.log("texto SubirClase", resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => setStore({ message: data.msg }))
					.catch(error => {
						console.log("Error SubirClase", error);
					});
			},

			//clase matriculada por el usuario
			updateRegisteredClassesAPI: registeredClass => {
				const actions = getActions();
				const token = sessionStorage.getItem("my_token");
				let myHeaders = new Headers();
				const jsonClase = "";
				myHeaders.append("Authorization", "Bearer " + token);
				myHeaders.append("Content-Type", "application/json");
				//console.log("headers", myHeaders.get("Authorization"));
				fetch(process.env.BACKEND_URL + "/api/matricularclase/" + registeredClass, {
					method: "POST",
					body: JSON.stringify(jsonClase),
					headers: myHeaders
				})
					.then(resp => {
						actions.ErrorApi(resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ message: data.msg });
						actions.getmisclasesreservadas();
						actions.getclases();

						//alerta si fue exitosa
						swal({
							title: "Correcto!",
							text: "Se ha matriculado Exitosamente",
							icon: "success",
							button: "Aceptar"
						});
					})
					.catch(error => {
						console.log("Error MatricularClase", error);
					});
			},

			dropFromClass: toRemove => {
				const store = getStore();

				const myUpdatedClasses = store.classParticipants.filter((item, index) => index !== toRemove);

				setStore({ classParticipants: myUpdatedClasses });
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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

			/* setLogin: loggin => {
				const store = getStore();
				console.log("me llamaron para cambiar el loggin", loggin);
				console.log("el estado antes de cambio", store.islogin);
				setStore({ islogin: loggin });
            }, */

			setisLogin: loggin => {
				const store = getStore();

				console.log("me llamaron para cambiar el loggin AL ESTADO:", loggin);
				console.log("el estado antes de cambio DE ISLOGIN ES", store.islogin);

				setStore({ islogin: loggin });
				console.log("el estado DESPUES de cambio DE ISLOGIN ES", store.islogin);
			},

			getempresainfo: () => {
				fetch(process.env.BACKEND_URL + "/api/empresa/1") //trae el api
					.then(resp => resp.json()) //llama  en json
					.then(data => setStore({ dataempresa: data.result })) //asigna el "result" en "dataempresa"
					.catch(error => console.log("Error loading message from backend", error));
			},

			getclases: () => {
				fetch(process.env.BACKEND_URL + "/api/clases") //trae el api
					.then(resp => resp.json()) //llama  en json
					.then(data => setStore({ clasesdisponibles: data.results })) //asigna el "result" en "dataempresa"
					.catch(error => console.log("Error loading message from backend", error));
			},

			getmisclasesreservadas: () => {
				const token = sessionStorage.getItem("my_token");

				let myHeaders = new Headers();
				const jsonClase = "";
				myHeaders.append("Authorization", "Bearer " + token);
				myHeaders.append("Content-Type", "application/json");
				fetch(process.env.BACKEND_URL + "/api/clasesreservadas", {
					method: "GET",
					//body: JSON.stringify(jsonClase),
					headers: myHeaders
				})
					.then(resp => resp.json()) //llama  en json
					.then(data => setStore({ misclasesreservadas: data.result }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getclasstoupdate: index => {
				const store = getStore();
				const actions = getActions();

				store.clasesdisponibles.map((elm, i) => {
					if (i === index) setStore({ classupdate: elm });
				});

				// actions.updateRegisteredClasses(classRegistration, index);
			},
			updatetoClass: Class => {
				const store = getStore();
				const actions = getActions();

				const body = {
					NOMBRE: Class.nombreClase,
					ENTRENADOR: Class.instructor,
					LUGAR: Class.lugar,
					PRECIO: Class.precio,
					ESPACIOS: Class.cupo,
					DESCRIPCION: Class.descripcion,
					ESTADO: Class.estado,
					DIA_SEMANA: "lunes", // "Lunes",
					FECHA_INICIO: "Mon, 03 May 2021 00:00:00 GMT", // Class.fechaIni,
					HORA_INICIO: "20:00",
					DURACION: Class.duracion,
					FOTO: "..//fotos/actividad_kempo.jpg",
					EMPRESA_ID: 1
				};

				fetch(process.env.BACKEND_URL + "/api/actualizarclase/" + Class.id, {
					method: "PUT",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						actions.getclases();
					})
					.catch(err => console.log(err));
			},
			deleteclasscreate: index => {
				const store = getStore();
				const actions = getActions();

				fetch(process.env.BACKEND_URL + "/api/eliminarclase/" + index, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						actions.getclases();
					})
					.catch(err => console.log(err));

				// actions.updateRegisteredClasses(classRegistration, index);
			},

			deletereservedclass: index => {
				const actions = getActions();
				const token = sessionStorage.getItem("my_token");
				let myHeaders = new Headers();
				const jsonClase = "";
				myHeaders.append("Authorization", "Bearer " + token);
				myHeaders.append("Content-Type", "application/json");
				console.log("entré");
				console.log(index);

				fetch(process.env.BACKEND_URL + "/api/clasereservada/" + index, {
					method: "DELETE",
					headers: myHeaders
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						actions.getmisclasesreservadas();
						actions.getclases();
					})
					.catch(err => console.log(err));
			},
			getarticulosmerclib: () => {
				fetch("https://api.mercadolibre.com/categories/MLA438176", {
					method: "GET"
					//body: JSON.stringify(jsonClase),
				})
					.then(resp => resp.json()) //llama  en json
					.then(data => {
						setStore({ articulos: data.children_categories });
					})
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
