using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Course
{
    public int CourseId { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public int? Duration { get; set; }

    public string? Creator { get; set; }

    public virtual ICollection<Chapter> Chapters { get; } = new List<Chapter>();

    public virtual ICollection<QuizQuestion> QuizQuestions { get; } = new List<QuizQuestion>();
}
