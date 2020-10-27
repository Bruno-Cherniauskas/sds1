import React from 'react';
import './styles.css';

type Props = {
  totalPages?: number;
  goToPage: Function;
  activePage: number;
}

const Pagination = ({ totalPages = 0, goToPage, activePage }: Props) => {
 const paginationItems = Array.from(Array(totalPages).keys());
<<<<<<< HEAD
=======

>>>>>>> 2885c4b22b4e3396b01ef14c693d153c76e916fc
 return (
    <div className="pagination-container">
      {paginationItems.map(item => (
        <button 
          key={item   }
          className={`pagination-item active ${activePage === item ? 'active' : 'inactive'}`}
          onClick={() => goToPage(item)}
      >
        {item + 1}
      </button>
      ))}
<<<<<<< HEAD
=======
      
>>>>>>> 2885c4b22b4e3396b01ef14c693d153c76e916fc
    </div>
  );
}

export default Pagination;