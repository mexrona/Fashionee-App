import {socials} from "../../data";

export default function Socials() {
    return (
        <div className="socials">
            <h3 className="socials__title">Find us here:</h3>
            <div className="socials__inner">
                {socials.map((social) => (
                    <a
                        className="socials__link"
                        href="#"
                        target="_blank"
                        key={social.id}>
                        {social.title}
                    </a>
                ))}
            </div>
        </div>
    );
}
