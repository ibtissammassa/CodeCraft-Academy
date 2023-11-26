/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import '../assets/css/Chapter.css'
import { Link } from "react-router-dom";

function Chapter({chapters }) {
    const { id } = useParams();
    const selectedChapter = chapters?.find(chapter => chapter.chapterId === parseInt(id));
    console.log(selectedChapter);
    if (!selectedChapter) {
        // Render a loading state or an error message if the chapter isn't found
        return <div>Loading...</div>;
    }
    const chapterIndex = parseInt(id) - 1;
    const totalChapters = chapters.length;

    let nextPage;
    if (chapterIndex === totalChapters - 1) {
        nextPage = `/Quiz/${chapterIndex + 1}`;
    } else {
        nextPage = `/Chapter/${chapterIndex + 2}`;
    }

    let previousPage;
    if (chapterIndex === 0) {
        previousPage = '/';
    } else {
        previousPage = `/Chapter/${chapterIndex}`;
    }

    return (
        <div className="container">
            <h1>{selectedChapter.title}</h1>
            <p>{selectedChapter.content}</p>
            <div className="iframeContainer">
                <iframe
                    src={"https://www.youtube.com/embed/" + selectedChapter.videoUrl}
                    title={selectedChapter.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <p>{selectedChapter.introduction}</p>
            <h3>Ready for the Next Challenge?</h3>
            <p>{selectedChapter.conclusion}</p>
            <p>{selectedChapter.nextText}</p>
            <div className="buttons">
                <Link className="button previous" to={previousPage}><span>Previous</span></Link>
                <Link className="button next" to={nextPage}><span>Next</span></Link>
            </div>
        </div>
    );
}

export default Chapter;