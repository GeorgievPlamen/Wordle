using Entities;
using Entities.DBInit;
using Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Wordle.Extensions;
using Wordle.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
string? connectionString;
connectionString = builder.Configuration.
    GetConnectionString("DefaultConnection");
if (builder.Environment.IsDevelopment())
{
    connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
}
else
{
    var connUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

    // Parse connection URL to connection string for Npgsql
    if (connUrl == null) throw new ArgumentNullException(nameof(connUrl));
    connUrl = connUrl.Replace("postgres://", string.Empty);
    var pgUserPass = connUrl.Split("@")[0];
    var pgHostPortDb = connUrl.Split("@")[1];
    var pgHostPort = pgHostPortDb.Split("/")[0];
    var pgDb = pgHostPortDb.Split("/")[1];
    var pgUser = pgUserPass.Split(":")[0];
    var pgPass = pgUserPass.Split(":")[1];
    var pgHost = pgHostPort.Split(":")[0];
    var pgPort = pgHostPort.Split(":")[1];
    var updatedHost = pgHost.Replace("flycast", "internal");

    connectionString = $"Server={updatedHost};Port={pgPort};User Id={pgUser};Password={pgPass};Database={pgDb};";

}

builder.Services.AddDbContext<WordleDbContext>(options =>
    {
        options.UseNpgsql(connectionString);
    }
);
builder.Services.AddServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(options =>
{
    options
        .WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
});
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

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
