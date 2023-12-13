import { useStore } from "../store";
import loading from '../assets/loading.svg';
import PDFfile from "../Components/UI/PDFfile";

function Certificate() {
    const course = useStore((store) => store.courses[0]);
    const isLoading = useStore((store) => store.isLoading);
    if (!course || isLoading) {
        return (
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={loading} alt="loading" />
            </div>
        )
    }
  return (
      <div className="container">
          <h2 className="subtitle">Congratulations!</h2>
          <h1>You've Earned Your Certificate</h1>
          <p>Thank you for completing the course. You have successfully completed the <span><b>{course.title}</b></span> course and earned your certificate. Your dedication and hard work have paid off. Download your certificate to showcase your achievement.</p>
          <PDFfile course={course} />
      </div>
  );
}

export default Certificate;