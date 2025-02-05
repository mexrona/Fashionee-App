import {payment} from "../../data";

export default function Payment() {
    return (
        <div className="payment">
            Payment methods:
            <div className="payment__inner">
                {payment.map((link) => (
                    <a className="payment__link" href="#" key={link.id}>
                        <img src={link.src} alt={link.alt} />
                    </a>
                ))}
            </div>
        </div>
    );
}
