import React from "react";
import List from "../Components/List/List";
import InputField from "../Components/InputField";

const GroceryList = ({ groceryItems, handleClickGroceryItem, addGrocery }) => {
  return (
    <React.Fragment>
      <InputField onSubmit={addGrocery} />
      <List items={groceryItems} handleClickItem={handleClickGroceryItem} />
    </React.Fragment>
  );
};

export default GroceryList;
