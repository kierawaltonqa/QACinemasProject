const List = ({ data, query }) => {

    // query
    const byQuery = (query) => (data) => data.title.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];
    filteredList = data.filter(byQuery(query));

    return (
        <>
            {filteredList.map((item) => (
                <div>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </>
    )

    // data.map((film) => {
    //     list.push(film.title)
    // })

    // if (list.includes(query)) {
    //     filteredList = list.filter();
    //     return filteredList;
    // }

    // else {
    //     return null;
    // }

    // if (list.includes(query)) {
    //     filteredList = list.filter()
    // }

    //else if (query == "") {
    return (
        <>
            <ul>
                {
                    data.map((film) => (
                        <li>
                            <span>{film.title} </span>
                            {/* <span>{film.director}, </span>
                            <span>{film.actors}</span> */}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default List;