const baseUrl = "https://lanie-backend-mongodb.onrender.com/api";

export async function getProducts(query) {

    const res = await fetch(`${baseUrl}/products?${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}

export async function getOneProducts(id) {

    const res = await fetch(`${baseUrl}/products/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}

export async function getProductsByCategory(category) {

    const res = await fetch(`${baseUrl}/products?limit=8&category=${category}`, {
        next: { revalidate: 3600 },
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}

export async function getProductsBySearch(query) {

    const res = await fetch(`${baseUrl}/products?limit=12&search=${query}`, {
        next: { revalidate: 3600 },
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json();
    return data
}

export async function getCollections() {

    const res = await fetch(`${baseUrl}/collections`, {
        next: { revalidate: 3600 },
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await res.json()
    return data
}