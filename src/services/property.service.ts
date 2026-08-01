export async function getFeaturedProperties() {
    const response = await fetch(
        "http://localhost:3000/api/properties",
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch properties.");
    }

    return response.json();
}