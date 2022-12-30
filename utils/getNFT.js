const getNFT = async (uri) =>{
    const res = await fetch(uri);
    const final = res.json();
    return final;
}

export default getNFT;