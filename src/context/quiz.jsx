import { createContext, useReducer } from "react";
import questions from '../data/questions_complete';

const STAGES = ["Start", "Category", "Playing", "End"];

const reorderQuestions = (questions) => {
    return questions.sort(() => Math.random() - 0.5);
}

const initialStage = {
    gameStage: STAGES[0],
    questions: questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1]
            };
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            const endGame = !state.questions[nextQuestion] ? true : false;

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false
            };
        case "RESTART":
            return {
                ...initialStage
            };
        case "CHECK_ANSWER": 
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: true
            }
        case "START_GAME": 
            let quizQuestions = null;

            state.questions.forEach((categoryItens) => {
                if(categoryItens.category === action.payload){
                    const questionsSelected = categoryItens.questions;
                    
                    const reorderOption = reorderQuestions(questionsSelected[0].options);
                    
                    quizQuestions = questionsSelected;
                }
            });

            return {
                ...state,
                questions: reorderQuestions(quizQuestions),
                gameStage: STAGES[2]
            }

        default:
            return state;
    }
    
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const value = useReducer(quizReducer, initialStage);

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}