import CollectionCustomers from "./_components/collection-customers";
import CustomersHero from "./_components/hero";
import TestimonialCustomers from "./_components/testimonial";

const CustomersPage = () => {
    return ( 
        <main>
            <CustomersHero/>
            <TestimonialCustomers/>
            <CollectionCustomers/>
        </main>
     );
}
 
export default CustomersPage;