const List = ({ data, query }) => {

    if (data.length <= 16) {
        data.push({ "title": "Bookings" });
        data.push({ "title": "Classification" });
        data.push({ "title": "About" });
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
                    <h2>{item.title}</h2>
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