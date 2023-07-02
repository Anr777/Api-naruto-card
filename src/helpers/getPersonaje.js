
export const getPersonaje = async ( id ) => {
    const url = `https://naruto-api.fly.dev/api/v1/characters/${ id }`;

    const resp = await fetch(url);
    const personajeById = await resp.json()
    
    return personajeById;
}