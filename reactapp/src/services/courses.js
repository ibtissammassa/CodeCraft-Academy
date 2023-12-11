export const GetCourses = async () => {
    try {
        const response = await fetch('/Elearning/GetCourses');
        const courseData = await response.json();

        const fetchCourseDataPromises = courseData.map(async (course) => {
            const chaptersResponse = await fetch(`/Elearning/GetChaptersForCourse/${course.courseId}`);
            const chaptersData = await chaptersResponse.json();

            const quizResponse = await fetch(`/Elearning/GetQuizForCourse/${course.courseId}`);
            const quizData = await quizResponse.json();

            course.chapters = chaptersData;
            course.quizQuestions = quizData;

            return course;
        });

        const updatedCourses = await Promise.all(fetchCourseDataPromises);
        return updatedCourses;
    } catch (error) {
        console.error('Error fetching course data:', error);
        throw error; 
    }
};
