import { Link } from "react-router";

export default function PrimaryBtn({ label, to }) {

    return (
        <Link to={to} className="primary-btn">
            {label}
        </Link>
    );
}