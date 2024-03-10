function catAndMouse(x, y, z) {
    var distCatA = Math.abs(x - z);
    var distCatB = Math.abs(y - z);
    if(distCatA == distCatB){
        return "Mouse C";
    }else{
        return (distCatA > distCatB) ? "Cat B" : "Cat A";
    }
}
