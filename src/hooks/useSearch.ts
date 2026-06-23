import { useState, useCallback } from 'react';

export const useSearch = <T,>(items: T[], searchField: keyof T) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useCallback(() => {
    return items.filter((item) =>
      String(item[searchField]).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm, searchField]);

  return { searchTerm, setSearchTerm, filteredItems: filteredItems() };
};
