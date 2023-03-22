import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopData, cart, setCart }) => {

    const { itm } = useParams();
    const detailItm = shopData.find(it => String(it.id) === itm);
    const Go = useNavigate();
    const addCart = () => {
        setCart([
            ...cart,
            {
                id: detailItm.id,
                name: detailItm.name,
                price: detailItm.price,
                description: detailItm.description,
                img: detailItm.api_featured_image,
                num: 1,
            }
        ]);
        Go('/cart');
    }
    return (
        <div className="itm">
            {
                Itm &&
                <figure className="itm">
                    <figure>
                        <img src={detailItm.api_featured_image} alt="" />
                    </figure>
                    <div className="des_case">
                        <strong>{detailItm.name}</strong>
                        {detailItm.description && <p>{detailItm.description}</p>}
                        <button onClick={addCart}>add cart</button>
                    </div>
                </figure>
            }
        </div>
    )
}

export default Itm;