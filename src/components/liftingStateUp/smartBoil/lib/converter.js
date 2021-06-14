export function toCelsius(f){
    return ((f-32)*5)/9;
}

export function toFahrenhiet(c){
    return (c*9/5)+32;
}

export function convert(temperatur,convertTo){
    const input=parseFloat(temperatur);

    if(Number.isNaN(input)){
        return '';
    }

    const output=convertTo(input);
    const rounded=Math.round(output*1000)/1000;
    /*
      dosomik er por 3 ghor porjonto nibo tai 1000[1 er por 3 sunno] dia gun abong vag korechi.Jdi 4 ghor nitam tahole 10000[1 er por 4 sunno] dai gun abong vag kortam.
    */

    return rounded.toString();

}