import { useState } from "react";
import "./App.css";
import { moviesData } from "./data";
import MoviesList from "./Components/MoviesList";
import Add from "./Components/Add";
import Search from "./Components/Search";

function App() {
  const [list, setList] = useState(moviesData);
  // console.log(list)
  const [inputeText, setInputeText] = useState("");
  const [rating, setRating] = useState(1);
  const handleText=(x)=>setInputeText(x);
  const handleRating=(y)=>setRating(y)
  const handleDelete = (ID) => setList(list.filter((el) => el.id !== ID));
  const handleAdd = (newMovie) => setList([...list, newMovie]);
  const handleEdit = (editedMovie) =>
    setList(list.map((el) => (el.id === editedMovie.id ? editedMovie : el)));
  return (
    <div className="App">
      <Search inputeText={inputeText} rating={rating} handleText={handleText} handleRating={handleRating} />
      <MoviesList
        movies={list.filter(el=>el.name.toLowerCase().includes(inputeText.toLowerCase())&&el.rating>=rating)}
        functionDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Add addNewMovie={handleAdd} />
    </div>
  );
}

export default App;
