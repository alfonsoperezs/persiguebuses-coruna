const url = import.meta.env.VITE_API_URL

export const getBuses = async function () {
    const response = await fetch(`${url}/buses`);
    return await response.json();
}

export const getBusDetails = async function (id) {
    const response = await fetch(`${url}/buses/${id}`);
    return await response.json();
}

export const getBusPosition = async function (id, line) {
    const response = await fetch(`${url}/buses/${id}/position?line=${line}`);
    return await response.json();
}