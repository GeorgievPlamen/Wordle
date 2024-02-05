using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedGuessesTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FifthBg",
                table: "GuessesEn",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FirstBg",
                table: "GuessesEn",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FourthBg",
                table: "GuessesEn",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SecondBg",
                table: "GuessesEn",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SixthBg",
                table: "GuessesEn",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ThirdBg",
                table: "GuessesEn",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FifthBg",
                table: "GuessesEn");

            migrationBuilder.DropColumn(
                name: "FirstBg",
                table: "GuessesEn");

            migrationBuilder.DropColumn(
                name: "FourthBg",
                table: "GuessesEn");

            migrationBuilder.DropColumn(
                name: "SecondBg",
                table: "GuessesEn");

            migrationBuilder.DropColumn(
                name: "SixthBg",
                table: "GuessesEn");

            migrationBuilder.DropColumn(
                name: "ThirdBg",
                table: "GuessesEn");
        }
    }
}
