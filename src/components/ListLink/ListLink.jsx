export default function ListLink(props) {
    return (
        <li>
            <a
                className={props.hasPage ? "list__link" : "list__link hidden"}
                href="#"
                onClick={() => props.onChange(props.title)}>
                {props.title}
            </a>
        </li>
    );
}
