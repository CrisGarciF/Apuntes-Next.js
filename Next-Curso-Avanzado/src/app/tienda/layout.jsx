import Link from "next/link";

export const metadata = {
    title: "Tienda oficial",
}

const TiendaLayout = ({children}) => {
    return (
        <>
            <nav>
                <h3>Seccion Tienda</h3>

                <ul>
                    <li>
                        <Link href="/tienda/categorias">Categorias</Link>
                    </li>
                </ul>
            </nav>

            {children}
        </>
    )
};

export default TiendaLayout;
