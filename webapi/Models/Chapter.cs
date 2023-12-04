using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Chapter
{
    public int ChapterId { get; set; }

    public int? CourseId { get; set; }

    public string? Title { get; set; }

    public string? Content { get; set; }

    public string? VideoUrl { get; set; }

    public string? Introduction { get; set; }

    public string? Conclusion { get; set; }

    public string? NextText { get; set; }

    public string? ChapterPoints { get; set; }

    public virtual Course? Course { get; set; }
}
