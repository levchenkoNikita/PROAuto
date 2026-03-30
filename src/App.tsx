import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '@/pages/Home/index';
import Catalog from "@pages/Catalog";
import Basket from "@pages/Basket";
import Contacts from "@pages/Contacts";
import Information from "@pages/Information";
import Services from "@pages/Services";
import About from "@pages/About";

const App = () => {
    return (
        <div className="font-family-base overflow-x-hidden">
            <header className="">

            </header>
            <main className="">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/information" element={<Information />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <footer className="">

            </footer>
        </div>
    );
};

export default App;