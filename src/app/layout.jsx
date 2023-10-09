import "./styles/globals.css";
import "./styles/normalize.css";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalContextProvider from "./context/GlobalContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "GuitarLA - Inicio",
  description: "Venta de guitarras y Blog de Música",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <Header />
        <GlobalContextProvider> {children}</GlobalContextProvider>
        <Footer />
      </body>
    </html>
  );
}
