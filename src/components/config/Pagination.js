import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Pagination(props) {

   const { productsPerPage,
      currentPage,
      selectPerPage,
      totalProducts,
      paginate,
      nextPage,
      prevPage } = props;
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <div className="mt-2">
         <ul className="pagination justify-content-end">
            {pageNumbers.length > 1 && currentPage !== 1 ?
               <li className="page-item">
                  <a className="page-link" onClick={() => prevPage()} href="#">
                     <span aria-hidden="true">&laquo;</span>
                     <span className="sr-only">Previous</span>
                  </a>
               </li>
               :
               <li className="page-item disabled">
                  <a className="page-link" onClick={() => prevPage()} href="#">
                     <span aria-hidden="true">&laquo;</span>
                     <span className="sr-only">Previous</span>
                  </a>
               </li>
            }
            {pageNumbers.map(num => (
               <li className="page-item" key={num}>
                  <a className="page-link" onClick={() => paginate(num)} href="#"> {num} </a>
               </li>
            ))}
            {pageNumbers.length > 1 && currentPage != pageNumbers.length ?
               <li className="page-item">
                  <a className="page-link" onClick={() => nextPage()} href="#">
                     <span aria-hidden="true">&raquo;</span>
                     <span className="sr-only">Next</span>
                  </a>
               </li>
               :
               <li className="page-item disabled">
                  <a className="page-link" onClick={() => nextPage()} href="#">
                     <span aria-hidden="true">&raquo;</span>
                     <span className="sr-only">Next</span>
                  </a>
               </li>
            }
            <li className="page-item">
               <DropdownButton id="dropdown-basic-button" title={productsPerPage + " / sivu"}>
                  <Dropdown.Item onClick={() => selectPerPage(20)} >20 / sivu</Dropdown.Item>
                  <Dropdown.Item onClick={() => selectPerPage(50)}>50 / sivu</Dropdown.Item>
                  <Dropdown.Item onClick={() => selectPerPage(100)}>100 / sivu</Dropdown.Item>
               </DropdownButton>
            </li>
         </ul>
         <div className="d-flex justify-content-end">
            {totalProducts == 1 ?
               <p>Yhteensä: {totalProducts} hakemus</p>
               :
               <p>Yhteensä: {totalProducts} hakemusta</p>
            }
         </div>
      </div>
   )
}