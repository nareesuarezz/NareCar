const cars = [
    {
        model: "350Z",
        brand: "Nissan",
        price: 25000,
        img: "350z.jpg"
    }, {
        model: "RS5 Sportback",
        brand: "Audi",
        price: 111800,
        img: "rs5.webp"
    }, {
        model: "Clio Sport V6",
        brand: "Renault",
        price: 70000,
        img: "clio.jpg"
    },
];

const getCars = () => {
    return cars;
}

export default {
    getCars
};