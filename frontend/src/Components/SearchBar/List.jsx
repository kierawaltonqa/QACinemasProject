const List = ({ list, query }) => {

    const byQuery = (query) => (list) => list.title.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];

    filteredList = list.filter(byQuery(query));




    return (

        <>

            {filteredList.map((item) => (
                <div>
                    <h2>{item.title}</h2>
                </div>

            ))}

        </>
    )
}

export default List;