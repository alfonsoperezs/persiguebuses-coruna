const url = import.meta.env.VITE_API_URL

export const getBuses = async function () {
    const response = await fetch(`${url}/buses`);
    return await response.json();
}