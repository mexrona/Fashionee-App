export default function ListLink(props) {
    return (
        <li>
            <a
                className="list__link"
                href="#"
                onClick={() => props.onChange(props.title)}>
                {props.title}
            </a>
        </li>
    );
}
