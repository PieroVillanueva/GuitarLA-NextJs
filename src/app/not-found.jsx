import Link from "next/link";
export const metadata = {
  title: "Página no Encontrada",
};

export default function NotFound() {
  return (
    <>
      <p className="error">Página no Encontrada</p>
      <Link href={"/"} className="error-enlace">
        Ir a Inicio
      </Link>
    </>
  );
}
