import axios from "axios";


export const fetchData = async () => {

    const response = await axios.get(
        "https://raw.githubusercontent.com/akshita151199/APIs/main/data");

    return response;
};

