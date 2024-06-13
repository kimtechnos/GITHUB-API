import React, { useState, useEffect } from "react";

const Search = ({ setData, setIsLoading }) => {
  const [user, setUser] = useState("Yash");

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleClick();
    };
    fetchData();
  }, []);

  return (
    <div className="flex bg-dark-grey p-3 rounded-md shadow-lg">
      <div className="flex items-center gap-3">
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="bg-transparent outline-none text-white"
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <button
          onClick={handleClick}
          className="bg-dark-blue rounded-lg px-3 py-2 text-white shadow-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
