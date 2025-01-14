const baseUrl = "https://lanie-backend-mongodb.onrender.com/api";
import { toast } from "react-toastify";

export async function getProducts(searchParams) {

    const params = new URLSearchParams(searchParams).toString();

    try {
        const res = await fetch(`${baseUrl}/products?${params}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (res.ok) {
            const data = await res.json()
            return data
        }
        else {
            toast.error("Something gone wrong", {
                theme: "colored"
            })
            return {
                data: []
            }
        }

    } catch (error) {
        throw new Error(error);
    }

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

export async function login(body) {
    const res = await fetch(`${baseUrl}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  }