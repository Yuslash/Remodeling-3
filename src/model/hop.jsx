const API_URL = "http://localhost:8000/api/cart"

export const fetchCartItems = async (username) => {
  const res = await fetch(`${API_URL}/items?username=${username}`)
  const data = await res.json()
  return data.items
}

export const addToCart = async (username, item) => {
  const payload = {
    username,
    productId: item.id,
    title: item.title,
    price: item.price,
    count: 1,
    image: item.image,
    type: item.type
  }

  await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
}

export const removeFromCart = async (username, item) => {
  const payload = {
    username,
    productId: item.id,
    count: 1
  }

  await fetch(`${API_URL}/reduce`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
}
