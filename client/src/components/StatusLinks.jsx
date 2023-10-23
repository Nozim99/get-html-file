import StatusLink from "./StatusLink.jsx";
import {links} from "../data/links.js";

const StatusLinks = () => {
    return (
        <div className="mx-5 mt-5 md:mx-auto md:w-100">
            <h1 className="font-medium mb-1.5 text-2xl tracking-wide">Sites</h1>
            <div className="flex flex-col gap-4">
                {links.map((item, index) => (
                    <StatusLink item={item} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default StatusLinks;