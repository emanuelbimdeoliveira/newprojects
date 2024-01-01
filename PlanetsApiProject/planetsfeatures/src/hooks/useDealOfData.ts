
export const useDealOfData = (planetOption: string) => {
    switch (planetOption) {
        case "mercury":
            planetOption = "Mercúrio"
            break;
        case "venus":
            planetOption = "Vênus"
            break;
        case "earth":
            planetOption = "Terra"
            break;
        case "mars":
            planetOption = "Marte"
            break;
        case "jupiter":
            planetOption = "Júpiter"
            break;
        case "saturn":
            planetOption = "Saturno"
            break;
        case "uranus":
            planetOption = "Urano"
            break;
        case "neptune":
            planetOption = "Netuno"
            break;
        case "pluto":
            planetOption = "Plutão"
            break;                                                  
        default:
            break;
    }

    return {planetOption}
}