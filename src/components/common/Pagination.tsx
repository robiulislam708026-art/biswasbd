import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPagesToShow = 5;

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const halfRange = Math.floor(maxPagesToShow / 2);
    let start = Math.max(1, currentPage - halfRange);
    let end = Math.min(totalPages, start + maxPagesToShow - 1);

    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    if (start > 1) pageNumbers.push(1);
    if (start > 2) pageNumbers.push('...');

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (end < totalPages - 1) pageNumbers.push('...');
    if (end < totalPages) pageNumbers.push(totalPages);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
      >
        Previous
      </button>

      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => typeof number === 'number' && onPageChange(number)}
          disabled={number === '...' || number === currentPage}
          className={`px-3 py-2 rounded ${
            number === currentPage ? 'bg-blue-600 text-white' : 'border hover:bg-gray-100'
          } ${ number === '...' ? 'cursor-default' : 'cursor-pointer'}`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
