using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class QuizQuestion
{
    public int QuestionId { get; set; }

    public int? CourseId { get; set; }

    public string? QuestionText { get; set; }

    public string? Options { get; set; }

    public string? CorrectAnswer { get; set; }

    public virtual Course? Course { get; set; }
}
