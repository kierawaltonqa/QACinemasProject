const List = ({ data, query }) => {

    if (data.length <= 16) {
        data.push({ "title": "Tickets", "href": "../TicketBooking" });
        data.push({ "title": "Booking", "href": "../TicketBooking" });
        data.push({ "title": "Classification", "href": "../FilmClass" });
        data.push({ "title": "About", "href": "../about" });
        data.push({ "title": "Contact Us", "href": "../contact" });
        data.push({ "title": "Screens", "href": "../screens" });
        data.push({ "title": "Discussion", "href": "../discussion" });
    }

    // query
    const byQuery = (query) => (data) => data.title.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];
    filteredList = data.filter(byQuery(query));



    return (
        <>
            <hr />
            {filteredList.map((item) => (
                <div id="list-page">
                    <a href={item.href}> {item.title}</a>
                    <hr />

                </div>
            ))}
        </>
    )


    // return (
    //     <>
    //         <ul>
    //             {
    //                 data.map((film) => (
    //                     <li>
    //                         <span>{film.title} </span>
    //                         {/* <span>{film.director}, </span>
    //                         <span>{film.actors}</span> */}
    //                     </li>
    //                 ))
    //             }
    //         </ul>
    //     </>
    // )
}

export default List;