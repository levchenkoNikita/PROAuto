import CatalogProducts from "@/components/Catalog/Catalog";
import { information } from "./datasets";

const Catalog = () => {
    return (
        <CatalogProducts information={information}/>
    );
};

export default Catalog;