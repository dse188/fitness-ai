const API_KEY = 'f2HD1flyKLTLE8IKJaEmKA==y36xdleog7rOpFAI';
const BASE_URL = 'https://api.api-ninjas.com/v1/exercises';

export const searchExerciseName = async () => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    });

    const data = await response.json();
    return data;
};