export const randId = ()=> {
    const randomData = "0123456789";
    const token = "";

    for(let i=0; i<10; i++){
        const randomIndex = Math.floor(Math.random()*randomData.length);

        if(i==1){
            token+="-";
            continue;
        }

        token+= randomData.charAt(randomIndex);
    }

    return token;

}