// import { create } from 'react-test-renderer';
// import ListingsDetails from '../Components/Movies/MovieListings/ListingsDetails';
// import ListingsFilm from '../Components/Movies/MovieListings/ListingsFilm';
//!this test file doesnt work yet
//! DO NOT USE
//!
//!
//!
//!

// describe(`Listing page details and render`, () => {

//     const props = {

//         title: "The Shawshank Redemption",
//         runtime: "02:22",
//         rating: "15",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
//         showtime: "",
//         director: "Frank Darabont",
//         actors: [
//             "Morgan Freeman",
//             "Tim Robbins",
//             "Bob Gunton",
//             "William Sadler"
//         ],
//         id: "tt0111161"
//     }

//     let componentToTest;


//     beforeEach(() => {
//         const TestInstance = create(<ListingsFilm props={props} />);
//         componentToTest = TestInstance.root;
//     });

//     it(`should render a modal header with the movie title on `, () => {
//         const h5 = componentToTest.findByType(`h5`);
//         console.log(props.title);
//         console.log(h5.children);
//         expect(h5.children).toEqual(props.director);
//     })


// })