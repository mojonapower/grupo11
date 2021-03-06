import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar1 = () => {
	const { store, actions } = useContext(Context);
	const { islogin } = store;
	const { setisLogin } = actions;
	console.log("esta loging", islogin);

	return (
		<div className="container navpad">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">
					<i className="fas fa-dumbbell fa-2x d-inline-block align-top" width="30" height="30" />
				</Navbar.Brand>
				<Navbar.Brand> Kalendar-FIT</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/crearclase">Crear clase</Nav.Link>
						<Nav.Link href="/clasedisponibles"> Clases disponibles</Nav.Link>
						<Nav.Link href="/misclases"> Mis clases</Nav.Link>
						<Nav.Link href="/contact">Contacto</Nav.Link>
					</Nav>
					{islogin ? (
						<>
							<Button
								variant="primary buttonspace"
								onClick={() => {
									setisLogin(false);
									swal({
										title: "Sesion Cerrada!",
										text: "Ha cerrado sesion correctamente",
										icon: "info",
										button: "Aceptar"
									});
								}}>
								Logout
							</Button>
						</>
					) : (
						<>
							<Link to="/register">
								<Button variant="primary buttonspace">Registrarme</Button>
							</Link>
							<Link to="/login">
								<Button variant="primary buttonspace">Login</Button>
							</Link>
						</>
					)}
				</Navbar.Collapse>
			</Navbar>
			<script src="https://kit.fontawesome.com/3b05315429.js" crossOrigin="anonymous" />
		</div>
	);
};
