/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

function Quiz({ Quiz,course }) {
    const { id } = useParams();
    return (
        <div className="container">
            <h1>{course && course.title}</h1>
            <h2>Test Your Knowledge</h2>
            <p>Welcome to the quiz section! Test your understanding of the concepts covered in the course by answering the following five questions. Click 'Submit' to validate your answers and assess your proficiency.</p>
            {/*{
                Quiz.map((quiz, index) => {

                })
            }*/}
        </div>
    );
}

export default Quiz;