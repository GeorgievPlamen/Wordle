using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddedTodaysGuessesTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GuessesToday",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<string>(type: "TEXT", nullable: true),
                    FirstGuess = table.Column<string>(type: "TEXT", nullable: true),
                    SecondGuess = table.Column<string>(type: "TEXT", nullable: true),
                    ThirdGuess = table.Column<string>(type: "TEXT", nullable: true),
                    FourthGuess = table.Column<string>(type: "TEXT", nullable: true),
                    FifthGuess = table.Column<string>(type: "TEXT", nullable: true),
                    SixthGuess = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuessesToday", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GuessesToday");
        }
    }
}
