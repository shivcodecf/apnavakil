import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")

            .then((res) => {
                setData(res.data);
                console.log(res.title);
                setLoading(false);
            })

            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });

    }, []);


    const addItem = (item) => setData([item, ...data]);

    const deleteItem = (id) => setData(data.filter((item) => item.id !== id));

    return (

        <DataContext.Provider value={{ data, loading, error, addItem, deleteItem }}>

            {children}
            
        </DataContext.Provider>

    );
};
