import Footer from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";


const layout = ({children}:{children:React.ReactNode})=>{
    return (
        <div className="">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )


}

export default layout;