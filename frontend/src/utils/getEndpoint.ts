export const getEndpoint = (slug: String) => {
    return `${import.meta.env.VITE_API_URL}${slug}`
}