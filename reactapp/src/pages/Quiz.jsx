/* eslint-disable react/prop-types */
import { useParams, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import '../assets/css/Quiz.css';

function Quiz({ Quiz,course }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [answers, setAnswers] = useState(Array(Quiz.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerSelection = (questionIndex, answerIndex) => {
        if (submitted) {
            setSubmitted(false);
        }
        const Answers = [...answers];
        Answers[questionIndex] = answerIndex;
        setAnswers(Answers);
    };
    let score = 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAnswers = [...answers];
        console.log(answers)
        console.log(updatedAnswers)
        Quiz.forEach((question, index) => {
            if (question.correctAnswer === question.options.split("+")[answers[index]]) {
                score += 1;
            }
        });

        setAnswers(updatedAnswers);
        setSubmitted(true);

        if (score >= 3) {
            navigate(`/Certificate/${course.courseId}`);
        }
        console.log(score)
        console.log(answers)
    };
    console.log(answers)
    return (
        <div className="container">
            <h1>{course && course.title}</h1>
            <h2 className="subtitle">Test Your Knowledge</h2>
            <p>Welcome to the quiz section! Test your understanding of the concepts covered in the course by answering the following five questions. Click 'Submit' to validate your answers and assess your proficiency.</p>
            
            <form onSubmit={handleSubmit}>
                <h4 className="score">
                    {submitted && score <= 3 ? `You scored less than 3. Please try again !` : ''}
                </h4>
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
                <div className="buttons">
                    <div></div>
                    <button onClick={() => window.scrollTo(0, 0)} className="button submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Quiz;