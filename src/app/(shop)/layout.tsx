import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function ShopLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            <div className="app__content">
                {children}
            </div>
            <Footer />
        </div>
    )
}