import { Cta } from "../_components/cta";
import CollectionCustomers from "./_components/collection-customers";
import CustomersHero from "./_components/hero";
import TestimonialCustomers from "./_components/testimonial";

const CustomersPage = () => {
    return ( 
        <main>
            <CustomersHero/>
            <TestimonialCustomers/>
            <CollectionCustomers/>
            <Cta/>
        </main>
     );
}
 
export default CustomersPage;