export async function getDishes() {
  const response = await fetch("/menu-data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch menu data");
  }
  return response.json();
}
export async function getDishById(id) {
  const response = await fetch("/menu-data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch dish");
  }
  const dishes = await response.json();
  const dish = dishes.find((d) => d.id === String(id));

  if (!dish) throw new Error("Dish not found");
  return dish;
}
