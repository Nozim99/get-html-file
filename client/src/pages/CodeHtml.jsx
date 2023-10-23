import {useParams} from "react-router-dom";
import {urlToDot} from "../utils/urlGenerate.js";
import {baseUrl} from "../data/links.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import Loading from "../components/Loading.jsx";
import ErrorCode from "../components/ErrorCode.jsx";
import {useHtml} from "../hooks/useFetch.js";
import TitleHelmet from "../components/TitleHelmet.jsx";

const CodeHtml = () => {
    const params = useParams();
    const url = urlToDot(params.url);

    const {data, error} = useHtml(baseUrl + "/html/" + encodeURIComponent(url))

    if (error) {
        return (
            <>
                <TitleHelmet/>
                <ErrorCode/>
            </>
        )
    }

    if (!data) {
        return (
            <>
                <TitleHelmet/>
                <Loading/>
            </>
        )
    }

    return (
        <>
            <TitleHelmet/>
            <div className="mx-5 sm:mx-10 mb-20">
                <h1 className="text-center mt-10 font-medium text-2xl">{url}</h1>
                <div className=" border border-neutral-400 mt-5">
                    <SyntaxHighlighter language="html" wrapLongLines={true} padding="25px">
                        {data}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    );
};

export default CodeHtml;