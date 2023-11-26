using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Data.SqlClient;
using webapi.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class ElearningController : ControllerBase
{
   private readonly ELearningContext _context;

    public ElearningController(ELearningContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("GetCourses")]

    public IActionResult GetCourses()
    {
        List<Course> courses = _context.Courses.ToList();
        return StatusCode(StatusCodes.Status200OK, courses);
    }

    [HttpGet]
    [Route("GetChaptersForCourse/{courseId}")]
    public IActionResult GetChaptersForCourse(int courseId)
    {
        var chaptersForCourse = _context.Chapters
            .Where(c => c.CourseId == courseId)
            .Select(c => new Chapter
            {
                ChapterId = c.ChapterId,
                Title = c.Title,
                Content = c.Content,
                VideoUrl = c.VideoUrl,
                Introduction = c.Introduction,
                Conclusion = c.Conclusion,
                NextText = c.NextText
            })
            .ToList();

        return StatusCode(StatusCodes.Status200OK, chaptersForCourse);
    }

    [HttpGet]
    [Route("GetQuizForCourse/{courseId}")]
    public IActionResult GetQuizForCourse(int courseId)
    {
        var quizForCourse = _context.QuizQuestions
            .Where(c => c.CourseId == courseId)
            .Select(c => new QuizQuestion
            {
                QuestionId = c.QuestionId,
                QuestionText = c.QuestionText,
                Options = c.Options,
                CorrectAnswer = c.CorrectAnswer
            })  
            .ToList();

        return StatusCode(StatusCodes.Status200OK, quizForCourse);
    }

}
