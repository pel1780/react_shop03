import { useParams } from "react-router-dom";

const Itm = ({ shopData }) => {

    const { itm } = useParams();
    const detailItm = shopData.find(it => String(it.id) === itm);
    return (
        <>
            {
                Itm &&
                <figure className="itm">
                    itm : {detailItm.name}
                </figure>
            }
        </>
    )
}

export default Itm;