import { ref, get, remove, push, update } from "firebase/database";
import database from "../firebase";

const carsRef = ref(database, "/cars")

const getAllCars = () => {
    return (get(carsRef))
}

const removeCar = (key) => {
    const carToDeleteRef = ref(database, `/cars/${key}`);
    return (remove(carToDeleteRef))
}

const addCar = (brand, model, FirstDate, SecondDate) => {
    return push(carsRef, {
        brand: brand,
        model: model,
        FirstDate: FirstDate,
        SecondDate: SecondDate
    })
}
const updateCar = (key, brand, model, FirstDate, SecondDate) => {
    const carToUpdateRef = ref(database, `/cars/${key}`);
    return update(carToUpdateRef, {
        brand: brand,
        model: model,
        FirstDate: FirstDate,
        SecondDate: SecondDate
    });
}

export default {
    getAllCars,
    removeCar,
    addCar,
    updateCar
}