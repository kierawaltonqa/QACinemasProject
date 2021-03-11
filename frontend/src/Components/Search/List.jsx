import Details from "./Details";

const List = ({ data, query }) => {

    if (data.length <= 16) {
        data.push({ "title": "Tickets", "href": "../bookings" });
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
                    <a style={{ fontSize: "200%" }} href={item.href}> {item.title}</a>
                    <Details item={item} />

                    <hr />
                </div>
            ))}
        </>
    )
}

export default List;