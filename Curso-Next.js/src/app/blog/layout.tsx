import { ReactNode } from "react";

export default function BlogLayaout({children}: { children:ReactNode }) {
    return (
        <>
            <header>Cabecera Blog</header>
            <main>
                <section> {children} </section>
                <aside>
                    <form action="">
                        <input type="search" name="" id="" placeholder="Buscar algo" />
                        <input type="submit" value="Buscar" />
                    </form>
                </aside>
            </main>
            <footer>Pie del blog</footer>
        </>
    )
}