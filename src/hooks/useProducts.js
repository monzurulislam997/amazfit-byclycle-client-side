
import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://peaceful-shelf-82163.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]

};

export default useProducts;















// const hello = [
//     {
//         name: "Kids Bike"
//         , img: "https://i.ibb.co/kc1nD7m/mountain-bike1jpg.jpg",
//         description: "Travel across the nearly 6,000 foot span of the majestic Brooklyn Bridge. Explore Brooklyn's unique cultural and exceptional architectural legacy as well as its historical background.",
//         quantity: 5, price: 49,
//         supplier: "Johon doe"
//     },
//     {
//         name: "rangermax bicycle",
//         img: "https://i.ibb.co/f4nLsnM/9.jpg",
//         description: "Need your grey matter to sparkle? Then get pedalling. Researchers from the University of Illinois found that a 5 per cent improvement in cardio-respiratory ﬁtness from cycling led to an improvement of",
//         quantity: 15,
//         price: 99,
//         supplier: "Johon doe"
//     },
//     {
//         name: "Personal bike fit",
//         img: "https://i.ibb.co/C0Mzd1q/10.jpg",
//         description: "According to experts from Bristol University, the beneﬁts of cycling extend deep into your core. “Physical activity helps decrease the time it takes food to move through the large intestine, limiting",
//         quantity: 74,
//         price: 99,
//         supplier: "Johon doe"
//     },
//     {
//         name: "Tour Bike",
//         img: "https://i.ibb.co/z4hhw0C/7.jpg",
//         description: " At Black Bikes we have multiple types of bikes available for rent. The most commonly known is the handbrake bicycle, but be sure to have a look at our other types of bicycle", quantity: 29, price: 99, supplier: "Johon doe"
//     },
//     {
//         name: " Handbrake Bicycile", img: "https://i.ibb.co/WPHdjL1/8.jpg", description: "According to experts from Bristol University, the beneﬁts of cycling extend deep into your core. “Physical activity helps decrease the time it takes food to move through the large intestine, limiting",
//         quantity: 28,
//         price: 99,
//         supplier: "Johon doe"
//     },
//     {
//         name: "3-speed internal red frame", img: "https://i.ibb.co/M7mLH5p/6.jpg", description: "On this 2-hour tour you'll see the sights of Midtown Manhattan in a fascinating display of pulsating lights. Listen as our guide regales you with fascinating and often amusing stories about this histo", quantity: 47, price: 99, supplier: "Johon doe"
//     },
//     {
//         name: "Linus Dutchi 3-speed internal yellow frame", img: "https://i.ibb.co/vc7tqDF/5.jpg", description: "At Black Bikes we have multiple types of bikes available for rent.The most commonly known is the handbrake bicycle, but be sure to have a look at our other types of bicycle',quantity: 51, price: 109", supplier: "Johon doe"
//     },
//     {
//         name: "Linus Roadster Classic with black profile", img: "https://i.ibb.co/jGLm2G8/4.jpg",
//         description: "Do you remember what it is like to be cruising on the boulevard and catching fresh spring wind on the shiny and chromed old school bike? Our online shop is the best place to buy bikes, accessories and",
//         quantity: 96,
//         price: 89,
//         supplier: "Johon doe"
//     },
//     {
//         name: "SANTA BARBARA",
//         img: "https://i.ibb.co/CQgHFK6/3.jpg",
//         description: "Since that time he’s decided to open his own store that would sell everything that is connected with bikes.Do you remember what it is like to be cruising on the boulevard and catching fresh spring win", quantity: 16, price: 199, supplier: "Johon doe"
//     },
//     {
//         name: "The best Bike!",
//         img: "https://i.ibb.co/TY2VwCC/2.jpg",
//         description: "King’s College London compared over 400 identical twins and found those who did the equivalent of just three 45-minute rides a week were nine years ‘biologically younger’ even after discounting othe",
//         quantity: 25,
//         price: 299,
//         supplier: "Johon doe"
//     },
//     {
//         name: "Tune-ups & builds", img: "https://i.ibb.co/vc7tqDF/5.jpg", description: "Popular content and opportunities.Use Google Analytics to review popular and unpopular content, plus tools such as Social Crawlytics to see what content is popular from social shares.Reviewing your",
//         quantity: 39,
//         price: 319,
//         supplier: "Johon doe"
//     },
// ]