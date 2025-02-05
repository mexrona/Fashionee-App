import ListLink from "../ListLink/ListLink";

export default function Navdown({onChange, info, title}) {
    return (
        <div className="nav__down">
            <a
                className="nav__link nav__link--list"
                href="#"
                onClick={() => onChange(title)}>
                {title}
            </a>
            <ul className="list">
                {info.map((link) => (
                    <ListLink
                        key={link.id}
                        title={link.title}
                        hasPage={link.hasPage}
                        onChange={onChange}
                    />
                ))}
            </ul>
        </div>
    );
}
