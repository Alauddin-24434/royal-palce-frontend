import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({children}:{children:React.ReactNode})=>{
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )


}

export default layout;