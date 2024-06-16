import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


const MainLayout = ({
    children 
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full dark:bg-[#1F1F1F]">
            <Navbar/>
            <main className="h-full">
                {children}
            </main>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;