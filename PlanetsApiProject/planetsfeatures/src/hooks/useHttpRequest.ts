import { useState } from "react"

import { IData } from "../interfaces/IData";

export const useHttpRequest = () => {
    const [data, setData] = useState<IData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    const apiKey = import.meta.env.VITE_API_KEY;

    const getApiResponse = async (requestName?: string, request?: {requestType: string, min: number, max: number}) => {
        let url = "https://api.api-ninjas.com/v1/planets?";
        
        switch (request?.requestType) {
            case "period":
                url = `${url}min_period=${request.min}&max_period=${request.max}`;
                break;
            case "size":
                url = `${url}min_radius=${(request.min / 2) / 69911}&max_radius=${(request.max / 2) / 69911}`;
                break;
            case "temperature":
                url = `${url}min_temperature=${request.min + 273.15}&max_temperature=${request.max + 273.15}`;
                break;
            default:
                url = `${url}name=${requestName}`
                break;
        }

        setLoading(true)
        try {
            const responseJson: Response = await fetch(url, {
                method: "GET",
                headers: {
                    'X-Api-Key': apiKey,
                    "Content-type": "application/json"
                },
            });

            const response: IData[] = await responseJson.json();
            setData(response)
        } catch (error) {
            return   
        }
        setLoading(false)
    }
    return {getApiResponse, loading, data}
}