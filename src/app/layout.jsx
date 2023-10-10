import "./styles/globals.css";
import "./styles/normalize.css";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalContextProvider from "./context/GlobalContext";
import NextTopLoader from "nextjs-toploader";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "GuitarLA - Inicio",
  description: "Venta de guitarras y Blog de Música",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <NextTopLoader color={"var(--primary)"} />
        <GlobalContextProvider>
          <Header />
          {children}
        </GlobalContextProvider>
        <Footer />
      </body>
    </html>
  );
}
