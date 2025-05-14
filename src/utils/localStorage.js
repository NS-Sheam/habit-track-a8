export const getFromLocalStorage = () => {
  const data = localStorage.getItem("habits");
  return data ? JSON.parse(data) : [];
};

export const addToLocalStorage = (id) => {
  const existing = getFromLocalStorage();
  if (!existing.includes(id)) {
    existing.push(id);
    localStorage.setItem("habits", JSON.stringify(existing));
  }
};

export const removeFromLocalStorage = (id) => {
  const existing = getFromLocalStorage();
  const updatedIds = existing.filter((item) => parseInt(item) !== id);
  localStorage.setItem("habits", JSON.stringify(updatedIds));
};
