const cars = [
    {
        model: "RX7 FD3S",
        brand: "Mazda ",
        price: 35000,
        img: "rx7.jpg"
    }, {
        model: "RX7 FC3S",
        brand: "Mazda",
        price: 15000,
        img: "rx7fcs3s.jpg"
    }, {
        model: "RX8",
        brand: "Mazda",
        price: 20000,
        img: "rx8.jpg"
    },
];

const getCars = () => {
    return cars;
}

export default {
    getCars
};