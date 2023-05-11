import { useEffect, useState } from "react";
import CarService from "../../services/firebase.service"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Database.css"
function Database() {
	const [cars, setCars] = useState([])
	const [editingCarKey, setEditingCarKey] = useState(null);


	const getAllCars = () => {
		CarService.getAllCars().then(data => {
			let allCars = [];
			data.forEach(item => {
				console.log(item.key)
				console.log(item.val())
				allCars.push({
					key: item.key,
					brand: item.val().brand,
					model: item.val().model,
					FirstDate: item.val().FirstDate,
					SecondDate: item.val().SecondDate
				})
			})
			setCars(allCars)
		})
	}


	const removeCar = (key) => {
		CarService.removeCar(key).then(() => {
			getAllCars();
		});
	}

	const addCar = (e) => {
		e.preventDefault();
		const brand = e.target.brand.value;
		const model = e.target.model.value;
		const FirstDate = e.target.FirstDate.value;
		const SecondDate = e.target.SecondDate.value;
		CarService.addCar(brand, model, FirstDate, SecondDate).then(() => {
			getAllCars();
		})

	}

	const updateCar = (e, key) => {
		e.preventDefault();
		const brand = e.target.brand.value;
		const model = e.target.model.value;
		const FirstDate = e.target.FirstDate.value;
		const SecondDate = e.target.SecondDate.value;
		CarService.updateCar(key, brand, model, FirstDate, SecondDate).then(() => {
			setEditingCarKey(null);
			getAllCars();
		});
	}


	useEffect(() => {
		getAllCars();
	}, [])


	return (
		<>
			<Header />

			<h1>Renting de coches</h1>
			<p>¿Buscas una de las bellezas que has visto en el catálogo pero no quieres quedartelas permanentemente? No te preocupes, hemos implementado un sistema de Renting en el que puedes citarte a ti mismo y tener un registro de los alquileres que has hecho.</p>
			<p>Para guardar una cita, simplemente debes escribir en los siguientes registros la marca de coche, modelo, y el rango de fechas que deseas alquilar ese coche</p>
			<form onSubmit={addCar}>
				<input type="text" name="brand" placeholder="marca" />
				<input type="text" name="model" placeholder="modelo" />
				<input type="date" name="FirstDate" placeholder="Fecha de inicio" />
				<input type="date" name="SecondDate" placeholder="Fecha final" />
				<button type="submit">Add Car</button>
			</form>
			{cars.map(c => (
				<div key={c.key}>
					<div className="buttons">
						<p className="log">
							Se ha alquilado el coche: {c.brand} {c.model} entre las fechas {c.FirstDate} y {c.SecondDate}
						</p>
						<button onClick={() => removeCar(c.key)}>Eliminar</button>
						<button onClick={() => setEditingCarKey(c.key)}>Editar</button>
					</div>
					{editingCarKey === c.key && (
						<form onSubmit={(e) => updateCar(e, c.key)}>
							<input type="text" name="brand" defaultValue={c.brand} />
							<input type="text" name="model" defaultValue={c.model} />
							<input type="date" name="FirstDate" defaultValue={c.FirstDate} />
							<input type="date" name="SecondDate" defaultValue={c.SecondDate} />
							<button type="submit">Actualizar</button>
							<button type="button" onClick={() => setEditingCarKey(null)}>Cancelar</button>
						</form>
					)}
				</div>
			))}
			<Footer />
		</>
	);

}

export default Database;