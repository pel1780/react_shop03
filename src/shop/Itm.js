import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopData, cart, setCart }) => {

    const { itm } = useParams();
    const detailItm = shopData.find(it => String(it.id) === itm);
    const Go = useNavigate();

    const addCart = () => {
        const macth = cart.find(it => it.id == detailItm.id);
        let option;
        if (macth) {
            alert('장바구니에 같은 제품이 있습니다.')
            option = cart.map(it => it.id === macth.id ? { ...it, num: it.num + 1 } : it);
        }
        else {
            option = [
                ...cart,
                {
                    id: detailItm.id,
                    name: detailItm.name,
                    price: detailItm.price,
                    description: detailItm.description,
                    img: detailItm.api_featured_image,
                    num: 1,
                }
            ];
        }
        setCart(option);
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