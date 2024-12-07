export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

export const sortedPosts = computed(() => {
  return [...posts.value].sort((a, b) => {
    const dateA = parseDate(a.cardSubtitle);
    const dateB = parseDate(b.cardSubtitle);
    return dateB - dateA; // Сортируем по убыванию: сначала более поздние записи
  });
});
