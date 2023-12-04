/* eslint-disable react/prop-types */
import { useParams, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import '../assets/css/Quiz.css';
import { Link } from "react-router-dom";

function Quiz({ Quiz,course }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [answers, setAnswers] = useState(Array(Quiz.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerSelection = (questionIndex, answerIndex) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = answerIndex;
        setAnswers(updatedAnswers);
    };
    let score = 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAnswers = [...answers];
        console.log(answers)
        Quiz.forEach((question, index) => {
            console.log('Correct Answer:', question.correctAnswer);
            console.log('User Answer:', question.options.split("+")[answers[index]]);

            if (question.correctAnswer === question.options.split("+")[answers[index]]) {
                score += 1;
            } else {
                updatedAnswers[index] = -1; // Mark wrong answers
            }
        });

        setAnswers(updatedAnswers);
        setSubmitted(true);

        if (score >= 3) {
            const courseId = course.courseId; // Replace with the actual courseId
            navigate(`/Certificate/${courseId}`);

        }
        console.log(score)
        console.log(answers)
    };

    return (
        <div className="container">
            <h1>{course && course.title}</h1>
            <h2 className="subtitle">Test Your Knowledge</h2>
            <p>Welcome to the quiz section! Test your understanding of the concepts covered in the course by answering the following five questions. Click 'Submit' to validate your answers and assess your proficiency.</p>
            
            <form onSubmit={handleSubmit}>
                {
                    Quiz && Quiz.map((question, qIndex) => (
                        <div key={qIndex}>
                            <div className="questionContainer">
                                <h3>{qIndex + 1}. {question.questionText}</h3>
                                <span className="point">1 Point</span>
                            </div>
                            <div>
                                {
                                    question.options && question.options.split("+").map((answer, aIndex) => (
                                        <div className="answer" key={aIndex}>
                                            <input onChange={() => handleAnswerSelection(qIndex, aIndex)} type="radio" id={`q${qIndex}-a${aIndex}`} name={`q${qIndex}`} value={answer} />
                                            <label
                                                htmlFor={`q${qIndex}-a${aIndex}`}
                                                className={
                                                    submitted &&
                                                        answers[qIndex] === aIndex &&
                                                        question.correctAnswer === question.options.split("+")[aIndex]
                                                        ? 'correct-answer'
                                                        : submitted &&
                                                            answers[qIndex] === aIndex &&
                                                            question.correctAnswer !== question.options.split("+")[aIndex]
                                                            ? 'wrong-answer'
                                                            : ''
                                                }
                                            >
                                                {answer}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                            
                        </div>
                    ))
                }
                <h4 className="score">
                    {submitted && score <= 3 ? `You scored less than 3. Please try again !` : ''}
                </h4>
                <div className="buttons">
                    <div></div>
                    <button className="button submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Quiz;