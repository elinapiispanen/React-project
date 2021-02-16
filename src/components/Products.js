import React, {useState, useEffect} from 'react'
import ImageGrid from './config/ImageGrid'
import data from "../assets/data.json"
import Pagination from './config/Pagination'
import Container from "react-bootstrap/Container";

function Products() {

   const products = data.products;
   const [currentPage, setCurrentPage] = useState(1);
   const [productsPerPage, setProductsPerPage] = useState(20);
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

   const paginate = (pageNum) => {
      setCurrentPage(pageNum);
   }
   const nextPage = () => {
      setCurrentPage(currentPage + 1)
   }

   const prevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   }

   const selectPerPage = (pages) => {
      setProductsPerPage(pages);
      setCurrentPage(1);
   }



    return (
        <Container>
            <header className="Products-header">
                <Pagination currentPage={currentPage} selectPerPage={selectPerPage} nextPage={nextPage} prevPage={prevPage} paginate={paginate} productsPerPage={productsPerPage} totalProducts={data.products.length} />
                <ImageGrid products={products} indexOfFirstProduct={indexOfFirstProduct} indexOfLastProduct={indexOfLastProduct} />
                <Pagination currentPage={currentPage} selectPerPage={selectPerPage} nextPage={nextPage} prevPage={prevPage} paginate={paginate} productsPerPage={productsPerPage} totalProducts={data.products.length} />
            </header>
            <body className="Products-body">
             </body>
       </Container>
    )
}

export default Products
