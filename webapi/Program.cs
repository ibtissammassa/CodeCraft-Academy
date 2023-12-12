using Microsoft.EntityFrameworkCore;
using webapi.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ELearningContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DbConnectionString")));

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
// Configure the HTTP request pipeline.


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
