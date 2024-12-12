export default function ListLink(props) {
    return (
        <li>
            <a className="list__link" href="#">
                {props.title}
            </a>
        </li>
    );
}
