using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedGuessesToday : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FifthGuessBg",
                table: "GuessesToday",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstGuessBg",
                table: "GuessesToday",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FourthGuessBg",
                table: "GuessesToday",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondGuessBg",
                table: "GuessesToday",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SixthGuessBg",
                table: "GuessesToday",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ThirdGuessBg",
                table: "GuessesToday",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "attempt",
                table: "GuessesToday",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "attemptBg",
                table: "GuessesToday",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FifthGuessBg",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "FirstGuessBg",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "FourthGuessBg",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "SecondGuessBg",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "SixthGuessBg",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "ThirdGuessBg",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "attempt",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "attemptBg",
                table: "GuessesToday");
        }
    }
}
