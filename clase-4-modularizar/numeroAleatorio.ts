const numeroAlteatorio = ():number => {
    // let nRandom = Math.random();
    let nRandom = Math.floor(Math.random() * 10);
    return nRandom;
};

export { numeroAlteatorio }