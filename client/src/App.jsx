import "./App.css"
import CodeHtml from "./pages/CodeHtml.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";

// *? CORS orqali bloklangani tufayli to'g'ridan to'g'ri React app da ulanib bo'lmadi shuning uchun
// *? Nodejs orqali server yaratdim va server orqali kerakli ma'lumotlarni oldim
// *? yani topshiriqdagi saytlar orasida serverim o'rtakashlik qiladi
// *? Server.png rasmda serverim ko'rsatilgan
// *? Firebasedan bepul foydalanganman, ma'lum vaqtdan keyin server to'xtaydi

function App() {

    return (
        <Routes>
            {/* faqat status ko'dlarini ko'rsatadi */}
            <Route path="/" element={<Home/>}/>

            {/* serverdan kelgan HTML faylini ko'rsatadi */}
            {/* Sahifa to'liq ishga tushishi uchun biroz vaqt olishi mumkin faylni hajmiga bog'liq */}
            <Route path="/code/:url" element={<CodeHtml/>}/>
        </Routes>
    );
}

export default App;
