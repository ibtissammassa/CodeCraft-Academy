using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webapi.Models;

public partial class ELearningContext : DbContext
{
    public ELearningContext()
    {
    }

    public ELearningContext(DbContextOptions<ELearningContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Chapter> Chapters { get; set; }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<QuizQuestion> QuizQuestions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=tcp:tissam.database.windows.net,1433;Initial Catalog=E-learning;Persist Security Info=False;User ID=ibtissam;Password=azertadodo@2003;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Chapter>(entity =>
        {
            entity.HasKey(e => e.ChapterId).HasName("PK__Chapters__0893A34AFA6C4A6E");

            entity.Property(e => e.ChapterId)
                .ValueGeneratedNever()
                .HasColumnName("ChapterID");
            entity.Property(e => e.Content).HasColumnType("text");
            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.Title)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.VideoUrl)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("VideoURL");

            entity.HasOne(d => d.Course).WithMany(p => p.Chapters)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK__Chapters__Course__5EBF139D");
        });

        modelBuilder.Entity<Course>(entity =>
        {
            entity.HasKey(e => e.CourseId).HasName("PK__Courses__C92D71875C65DAB1");

            entity.Property(e => e.CourseId)
                .ValueGeneratedNever()
                .HasColumnName("CourseID");
            entity.Property(e => e.Creator)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.Title)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<QuizQuestion>(entity =>
        {
            entity.HasKey(e => e.QuestionId).HasName("PK__QuizQues__0DC06F8C978A2FDE");

            entity.Property(e => e.QuestionId)
                .ValueGeneratedNever()
                .HasColumnName("QuestionID");
            entity.Property(e => e.CorrectAnswer)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.Options).HasColumnType("text");
            entity.Property(e => e.QuestionText).HasColumnType("text");

            entity.HasOne(d => d.Course).WithMany(p => p.QuizQuestions)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK__QuizQuest__Cours__619B8048");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
