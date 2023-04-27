const cars = [
    {
        model: "Civic EK9",
        brand: "Honda",
        price: 15000,
        img: "civic.jpg"
    }, {
        model: "Golf GTI MK2",
        brand: "Volkswagen",
        price: 6900,
        img: "gti.jpg"
    }, {
        model: "Miata MX5 NA",
        brand: "Mazda",
        price: 15000,
        img: "miata.jpg"
    },
];

const getCars = () => {
    return cars;
}

export default {
    getCars
};