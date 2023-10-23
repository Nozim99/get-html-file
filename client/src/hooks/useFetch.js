import {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../data/links.js";

export const useHtml = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(url)
            .then((result) => {
                if (result.data.status) {
                    setError(true);
                } else {
                    setData(result.data)
                }
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }, [url]);

    return {data, error};
};

export const useHome = (link) => {
    const [data, setData] = useState();

    useEffect(() => {
        const encodedUrl = encodeURIComponent(link);
        axios.get(baseUrl + "/status/" + encodedUrl)
            .then(result => {
                if (result.data.status) {
                    setData(result.data.status)
                } else {
                    setData(result.data);
                }
            })
            .catch((error) => {
                console.error(error)

                if (error.response && error.response.data && error.response.data.status) {
                    setData(error.response.data.status);
                } else if (error.response && error.response.status) {
                    setData(error.response.status);
                } else {
                    setData("Error");
                }
            })
    }, [link])

    return data;
}
