import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";


const events = [
    {
        "id": 1,
        "date": {
            "day": "15",
            "month": "Feb"
        },
        "location": {
            "city": "Los Angeles",
            "country": "USA",
            "address": "1234 Convention Blvd"
        },
        "priceRange": "$20,000 - $50,000"
    },
    {
        "id": 2,
        "date": {
            "day": "20",
            "month": "Mar"
        },
        "location": {
            "city": "New York",
            "country": "USA",
            "address": "5678 Broadway Ave"
        },
        "priceRange": "$30,000 - $60,000"
    },
    {
        "id": 3,
        "date": {
            "day": "10",
            "month": "Abr"
        },
        "location": {
            "city": "Paris",
            "country": "France",
            "address": "90 Rue de Rivoli"
        },
        "priceRange": "$25,000 - $55,000"
    },
    {
        "id": 4,
        "date": {
            "day": "25",
            "month": "May"
        },
        "location": {
            "city": "Tokyo",
            "country": "Japan",
            "address": "1-1-1 Tokyo Tower"
        },
        "priceRange": "$40,000 - $70,000"
    },
    {
        "id": 5,
        "date": {
            "day": "12",
            "month": "Jun"
        },
        "location": {
            "city": "Sydney",
            "country": "Australia",
            "address": "22 Bondi Beach Rd"
        },
        "priceRange": "$35,000 - $65,000"
    },
    {
        "id": 6,
        "date": {
            "day": "8",
            "month": "Jul"
        },
        "location": {
            "city": "Rio de Janeiro",
            "country": "Brazil",
            "address": "454 Copacabana Ave"
        },
        "priceRange": "$28,000 - $58,000"
    },
    {
        "id": 7,
        "date": {
            "day": "14",
            "month": "Ago"
        },
        "location": {
            "city": "London",
            "country": "UK",
            "address": "10 Downing Street"
        },
        "priceRange": "$22,000 - $52,000"
    },
    {
        "id": 8,
        "date": {
            "day": "20",
            "month": "Sept"
        },
        "location": {
            "city": "Berlin",
            "country": "Germany",
            "address": "5 Brandenburg Gate"
        },
        "priceRange": "$33,000 - $63,000"
    },
    {
        "id": 9,
        "date": {
            "day": "18",
            "month": "Oct"
        },
        "location": {
            "city": "Moscow",
            "country": "Russia",
            "address": "1 Red Square"
        },
        "priceRange": "$38,000 - $68,000"
    },
    {
        "id": 10,
        "date": {
            "day": "22",
            "month": "Nov"
        },
        "location": {
            "city": "Dubai",
            "country": "UAE",
            "address": "123 Sheikh Zayed Rd"
        },
        "priceRange": "$45,000 - $75,000"
    }
];

// const getEvents = async () => {
//     const res = await fetch('http://localhost:4000/events');
//     return res.json();
// }

const Events = async () => {
    // const events = await getEvents();
    return <section className="section" id="tours">
        <div className="container mx-auto">
            {/* events */}
            <SectionHeader pretitle='World Tour' title='Upcoming Events' />
            <EventBox events={events} />
        </div>
    </section>
}

export default Events