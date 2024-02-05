using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddedGuessesEnn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GuessesEn",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    First = table.Column<int>(type: "INTEGER", nullable: false),
                    Second = table.Column<int>(type: "INTEGER", nullable: false),
                    Third = table.Column<int>(type: "INTEGER", nullable: false),
                    Fourth = table.Column<int>(type: "INTEGER", nullable: false),
                    Fifth = table.Column<int>(type: "INTEGER", nullable: false),
                    Sixth = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuessesEn", x => x.UserId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GuessesEn");
        }
    }
}
