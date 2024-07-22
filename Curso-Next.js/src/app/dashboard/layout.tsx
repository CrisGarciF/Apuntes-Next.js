export default function DashboardLayout ({children, chat, analytics, video}: { 
    children: React.ReactNode;
    chat: React.ReactNode;
    video: React.ReactNode;
    analytics: React.ReactNode;
}) {
    return (
        <>
            <article> {children} </article>
            <section>
                <aside>{analytics}</aside>
                <aside> {chat} </aside>
                <aside>{video} </aside>
            </section>
        </>
    )
}