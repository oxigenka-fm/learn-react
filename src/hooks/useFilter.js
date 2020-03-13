import { useState } from "react";

const useFilter = (
  initialSearch = "",
  initialOrder = "asc",
  initialLimit = 6
) => {
  const [search, setSearch] = useState(initialSearch);
  const [order, setOrder] = useState(initialOrder);
  const [limit, setLimit] = useState(initialLimit);

  return { search, setSearch, order, setOrder, limit, setLimit };
};

export default useFilter;
