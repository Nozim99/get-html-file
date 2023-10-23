import {useNavigate} from "react-router-dom";
import {urlToKey} from "../utils/urlGenerate.js";
import {useHome} from "../hooks/useFetch.js";

const StatusLink = ({item}) => {
    const navigate = useNavigate();

    const data = useHome(item.link);

    const navigateHandler = () => {
        const generateUrl = urlToKey(encodeURIComponent(item.link));
        navigate("/code/" + generateUrl);
    }

    return (
        <div className="border border-neutral-300 px-2 py-3 sm:px-5 rounded">
            <div className="flex justify-between mb-1.5">
                <h1 onClick={navigateHandler}
                    className="font-medium cursor-pointer hover:text-blue-700">{item.name}</h1>
                <div className="flex gap-1 items-center">
                    <div
                        className={`${!data ? "offline-ping" : ((typeof data) === "string" || data >= 400) ? "error-ping" : "online-ping"} relative ping`}></div>
                    <div className="text-neutral-600">status: {data ? data :
                        <span className="font-bold tracking-wider">...</span>}</div>
                </div>
            </div>
            <a className="text-indigo-600 hover:text-purple-600 cursor-pointer" href={item.link}
               target="_blank"
               rel="noreferrer">{item.link}</a>
        </div>
    );
};

export default StatusLink;