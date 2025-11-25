export function wordShortener(characters, startNumber, endNumber){
    const resp = characters ? (`${characters.slice(0, startNumber)}....${characters.slice(characters.length-endNumber, characters.length)}`): "...."
    //return `${characters.slice(0, startNumber)}....${characters.slice(characters.length-endNumber-1, characters.length-1)}`;
    return resp;
}
