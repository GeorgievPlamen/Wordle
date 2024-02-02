using Contracts;
using Entities;
using Entities.DBInit;
using Microsoft.EntityFrameworkCore;
using Services.Words;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<WordleDbContext>(options =>
    {
        options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    }
);
builder.Services.AddScoped<IWordService, WordService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<WordleDbContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    context.Database.Migrate();
    DBInitializor.Initialize(context);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occured during migration");
}


app.Run();
