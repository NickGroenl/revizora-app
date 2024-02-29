import HeaderMarketPlace from "@/components/marketplace/header";
import type { Metadata, NextPage } from "next";
import '../index.css';
import LayoutMarketPlacePayment from "./layout";
export const dynamic='force-dynamic';
export const metadata: Metadata = {
  title: "Stockeado - Payment",
  description: "Confirma tu orden",
  // other metadata
};
const MarketPlaceURLPage: NextPage = () => {
    return <>
        <LayoutMarketPlacePayment/>      
  </>
}
export default MarketPlaceURLPage;