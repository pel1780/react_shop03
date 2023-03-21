const ListAll = ({ shopData }) => {
    return (
        <ul>
            {
                shopData.slice(0, 20).map((it, idx) => {
                    return (
                        <li key={it.id}>
                            <h2>{it.name}</h2>
                            <img src={it.api_featured_image} alt="" />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListAll;