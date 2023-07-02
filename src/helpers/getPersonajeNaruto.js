
export const getPersonajesNaruto = async () => {
    const url = `https://naruto-api.fly.dev/api/v1/characters`;
    const resp = await fetch(url);
    const { url1, status, statusText } = resp;
    if(!resp.ok) throw Error(`Error: ${ status } ${ statusText } in fetch ${ url1 } `);
    const getPersonajes = resp.json();

    return getPersonajes;
}