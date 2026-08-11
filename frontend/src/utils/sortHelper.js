const getSortField = (option) => {
  if (option.startsWith("price-")) return "price";
  if (option.startsWith("rating-")) return "rating";
  if (option.startsWith("experience-")) return "experience";
  if (option.startsWith("distance-")) return "distance";
  return option;
};

export const toggleSortOption = (prevSort, value) => {
  const field = getSortField(value);

  // agar same option already selected hai -> remove (toggle off)
  if (prevSort.includes(value)) {
    return prevSort.filter((item) => item !== value);
  }

  // usi field ka koi purana option hai to usko hata do, phir naya add karo
  const filtered = prevSort.filter(
    (item) => getSortField(item) !== field
  );

  return [...filtered, value];
};