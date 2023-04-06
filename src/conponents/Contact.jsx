import { useProductFlowers } from './context/productcontext';


function Contact() {
    const myName = useProductFlowers();
    return (
        <>
            {myName}
            <div>Contact</div>
        </>
    )
}

export default Contact