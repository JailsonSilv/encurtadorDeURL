// Buscar os links salvos.
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvar um link no storage.

export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);

    // Se ja tiver um link salvo com algum ID não vou deixar duplicar.
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Esse link já existe na sua lista!')
        return
    }

    // Adicionar esse novo link na lista...
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso!')
}

// Deletar algum link salvo.
export function deleteLink(links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtador', JSON.stringify(myLinks));
    console.log("Link deletado com sucesso!")

    return myLinks;
}