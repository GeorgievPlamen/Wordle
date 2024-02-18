using Contracts;
using Entities;
using Entities.DBInit;
using Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Services.Attempts;
using Services.Guesses;
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
builder.Services.AddScoped<IWordChecker, WordCheckerService>();
builder.Services.AddScoped<IWordValid, WordValidService>();
builder.Services.AddScoped<ISuccessfullGuess, SuccessfullGuessService>();
builder.Services.AddScoped<IFailedGuess, FailedGuessService>();
builder.Services.AddScoped<ICurrentGuesses, CurrentGuessesService>();
builder.Services.AddScoped<IWordAttempt, WordAttemptService>();
builder.Services.AddIdentityCore<User>(opt =>
{
    opt.User.RequireUniqueEmail = true;
})
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<WordleDbContext>();
builder.Services.AddAuthentication();
builder.Services.AddAuthorization();
builder.Services.AddMemoryCache();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options
        .WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
});

app.UseAuthorization();
app.MapControllers();

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<WordleDbContext>();
var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    await context.Database.MigrateAsync();
    await DBInitializor.Initialize(context, userManager);
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occured during migration");
}


app.Run();
