import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./Category";
import { StrCategoryreducer } from "./StrCategory";
import { Areareducer } from "./AreaData";
import { AreaFoodreducer } from "./AreaFood";
import { Ingredientsreducer } from "./Ingredients";
import { getIngredientsreducer } from "./GetIngrediencw";
import { SearchbyNamereducer } from "./SearchName";
import { SearchbyLetterreducer } from "./SearchLetter";



export let store=configureStore({
    reducer:{
        category:categoryReducer,
       Categoryreducer:StrCategoryreducer,
       areareducer:Areareducer,
       areaFoodreducer:AreaFoodreducer,
       ingredientsreducer:Ingredientsreducer,
       GetIngredientsreducer:getIngredientsreducer,
       searchbyNamereducer:SearchbyNamereducer,
       searchbyLetterreducer:SearchbyLetterreducer
    }
})