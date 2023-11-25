/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import '../assets/css/Chapter.css'

function Chapter({chapters }) {
    const { id } = useParams();
    const selectedChapter = chapters?.find(chapter => chapter.chapterId === parseInt(id));
    console.log(selectedChapter);
    if (!selectedChapter) {
        // Render a loading state or an error message if the chapter isn't found
        return <div>Loading...</div>;
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
        </div>
    );
}

export default Chapter;