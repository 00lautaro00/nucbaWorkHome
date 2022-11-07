

export const getImpar = (menu) => {
    const idsTemp = menu.map(ids=> ids.id % 2 !== 0 ? ids : 'nothing' );

    const  idsImpar = idsTemp.filter(ids => ids !== 'nothing');

    return idsImpar
}

export const getPrices = (menu) => {
    const idsTemp = menu.map(ids=> ids.price < 600 ? ids : 'nothing' );

    const  idsPrices = idsTemp.filter(ids => ids !== 'nothing');

    return idsPrices

}
export const getAll = (menu) => {
    const idsAll = menu.map(ids=> ids);
    return idsAll

}

export const getIds = (e,menu) => {
    const idsPizza = menu.filter(ids => parseInt(e.target[0].value) === ids.id);
    return idsPizza
}