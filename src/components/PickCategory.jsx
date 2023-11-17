import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from '../img/category.svg';
import "./PickCategory.css";

const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext);



    return (
        <div id="category">
            <h2>Esolha uma categoria</h2>
            <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
            <div>
                {
                    quizState.questions.map((question) => (
                        <button onClick={() => dispatch({type: "START_GAME", payload: question.category})} key={question.category}>{question.category}</button>
                    ))
                }
            </div>
            <img src={Category} alt="Categorias do Quiz" />
        </div>
    )
}

export default PickCategory