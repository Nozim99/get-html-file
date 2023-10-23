import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {links} from "../data/links.js";
import {useNavigate} from "react-router-dom";
import {urlToKey} from "../utils/urlGenerate.js";

const SwiperItems = () => {
    const navigate = useNavigate();

    const navigateHandler = (url) => {
        const generateUrl = urlToKey(encodeURIComponent(url));
        navigate("/code/" + generateUrl);
    }

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{clickable: true}}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mx-5 md:mx-auto md:w-100 h-32 xs:h-52 border border-neutral-300 rounded-md mt-10 dark:border-blue-400 transition dark:shadow-lg dark:shadow-blue-400/50 dark:hover:border-blue-500 dark:hover:shadow-blue-500/50 dark:border-2"
        >
            {links.map((item, index) => (
                <SwiperSlide
                    onClick={() => navigateHandler(item.link)}
                    className="relative cursor-pointer flex justify-center items-center"
                    key={index}>
                    {item.image ?
                        <img className="h-full" src={item.image} alt={item.name}/>
                        :
                        <h1 className="text-2xl sm:text-4xl font-medium tracking-wide">{item.name}</h1>
                    }
                    <div className="swiper__hover absolute top-0 left-0 w-full h-full hover:bg-slate-200/40">
                        <h3 className="swiper__hover__h3 hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl bg-neutral-50/90 rounded-full w-20 h-20 pb-1 justify-center items-center shadow-[0_0_13px_5px] shadow-blue-500">&lt;/&gt;</h3>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperItems;