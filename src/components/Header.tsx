import { PATH } from "@/constants";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={PATH.HOME}>Home</Link>
                    </li>
                    <li>
                        <Link to={PATH.COMMING_SOON}>Comming Soon</Link>
                    </li>
                    <li>
                        <Link to={PATH.NOW_PLAYING}>Now Playing</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
