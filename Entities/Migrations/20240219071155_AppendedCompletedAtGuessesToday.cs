using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class AppendedCompletedAtGuessesToday : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7d2ee96e-2392-4b72-aa3b-399dfa114257");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "df02ffbf-7423-492a-9767-2823a8903064");

            migrationBuilder.RenameColumn(
                name: "attemptBg",
                table: "GuessesToday",
                newName: "AttemptBg");

            migrationBuilder.RenameColumn(
                name: "attempt",
                table: "GuessesToday",
                newName: "Attempt");

            migrationBuilder.AddColumn<bool>(
                name: "Completed",
                table: "GuessesToday",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "CopmletedBg",
                table: "GuessesToday",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1a18b1d1-517e-4a6b-bf3b-040f01d4b5d5", null, "Admin", "ADMIN" },
                    { "abd79064-7a9d-40a4-b93f-4cb1d0a8a1a4", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1a18b1d1-517e-4a6b-bf3b-040f01d4b5d5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "abd79064-7a9d-40a4-b93f-4cb1d0a8a1a4");

            migrationBuilder.DropColumn(
                name: "Completed",
                table: "GuessesToday");

            migrationBuilder.DropColumn(
                name: "CopmletedBg",
                table: "GuessesToday");

            migrationBuilder.RenameColumn(
                name: "AttemptBg",
                table: "GuessesToday",
                newName: "attemptBg");

            migrationBuilder.RenameColumn(
                name: "Attempt",
                table: "GuessesToday",
                newName: "attempt");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7d2ee96e-2392-4b72-aa3b-399dfa114257", null, "Admin", "ADMIN" },
                    { "df02ffbf-7423-492a-9767-2823a8903064", null, "Member", "MEMBER" }
                });
        }
    }
}
