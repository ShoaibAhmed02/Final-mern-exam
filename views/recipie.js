import React, { useState } from 'react';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);


 
  return (
    <div style={{border:"10px solid red"}}>
    <span style={{textAlign:"center"}}> The Recipie management System </span>
    <form  method='post' post="product/new">
      <label>
        Recipe Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
      </label>
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
      </label>
      <label>
        Image:
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default RecipeForm;
