function fullStack(frontendesek, backendesek) {

    const frontendTomb = frontendesek.split(";");
    const backendTomb = backendesek.split(";");

    return frontendTomb.filter(fejleszto => backendTomb.includes(fejleszto));
}
