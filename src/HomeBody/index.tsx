import FilterCart from "../components/FilterCart";
import ListingFilterCart from "../components/ListingFilterCart";
import "./style.css";
import * as productService from '../service/product-service';
import { useEffect, useState } from "react";
import { ProductDTO } from "../model/product";

type QueryParams = {
    min: number;
    max:number;
}

export default function HomeBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        min: 0,
        max: Number.MAX_VALUE,
    });

    useEffect(() => {
      productService.findAll()
      .then((list: ProductDTO[]) => {
        setProducts(list);
        }, [queryParams]);
    })

    function handleFilter(searchPrecoMinimo: number, searchPrecoMaximo: number) {
        setProducts([]);
        console.log('hadle Minimo = ', searchPrecoMinimo);
        setQueryParams({ ...queryParams, min: searchPrecoMinimo, max: searchPrecoMaximo});
        console.log('hadle Maximo = ', searchPrecoMaximo);
        console.log('params = ',queryParams);
    }
  

  return (
    <>
      <FilterCart  onFilter={handleFilter}/>
      <ListingFilterCart products={products} />
    </>
  );
}
