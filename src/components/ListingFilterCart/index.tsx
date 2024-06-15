import './style.css';
import { ProductDTO } from '../../model/product';

type Props = {
    products: ProductDTO[];
}

export default function ListingFilterCart({products}: Props) {

    return(
        <main>
            <section id='listing-section' className='container mt30'>
            {
               products.map((product) => (
                    <div key={product.id} className='listing-content'>
                    <div className='listing-item'>
                    <h4>{product.name}</h4>
                    <h6>R$ {product.price}</h6>
                    </div>
                </div>

                ))
                
            }
            </section>
        </main>
    );
}