import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { MdDeleteOutline } from "react-icons/md";


const DataList = () => {

    const { data, loading, error, addItem, deleteItem } = useContext(DataContext);

    const [newPost, setNewPost] = useState("");

    const handleAddPost = () => {

        if (newPost.trim()) {

            addItem({ id: Date.now(), title: newPost });

            setNewPost("");

        }

    };

    return (

        <div className="p-6 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen transition-all flex justify-center">

            <div className="w-full max-w-4xl"> 

                {loading && <p className="text-center text-lg">Loading...</p>}

                {error && <p className="text-red-500 text-center">{error}</p>}

                
                <div className="flex flex-col md:flex-row gap-4 mb-6">

                    <input

                        type="text"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Add a new post..."
                        className="border border-gray-300 dark:border-gray-600 p-3 w-full rounded-md bg-[var(--input-bg)] text-[var(--text-primary)] text-lg"

                    />
                    <button

                        onClick={handleAddPost}

                        className="bg-zinc-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md text-lg cursor-pointer"

                    >
                        Add

                    </button>

                </div>

               
                <ul className="space-y-3">

                    {data.map((item) => (

                        <li
                            key={item.id}

                            className="p-4 rounded-md flex justify-between items-center bg-[var(--item-bg)] shadow-md text-lg md:text-xl gap-4"
                        >
                            <span className="truncate w-full">{item.title}</span>

                            <button

                                onClick={() => deleteItem(item.id)}

                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-lg cursor-pointer"
                            >
                                <MdDeleteOutline />

                            </button>

                        </li>
                    ))}

                </ul>

            </div>

        </div>
    );
};

export default DataList;
