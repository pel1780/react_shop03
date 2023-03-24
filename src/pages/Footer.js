import { Info } from "../data/Info";

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                {Info.company}
                <strong>{Info.address}</strong>
                <address>{Info.address}</address>
            </div>
        </footer>
    )
}

export default Footer;