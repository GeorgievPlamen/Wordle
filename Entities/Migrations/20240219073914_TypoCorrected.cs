using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class TypoCorrected : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1a18b1d1-517e-4a6b-bf3b-040f01d4b5d5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "abd79064-7a9d-40a4-b93f-4cb1d0a8a1a4");

            migrationBuilder.RenameColumn(
                name: "CopmletedBg",
                table: "GuessesToday",
                newName: "CompletedBg");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e1e39460-9f90-4e8b-a1f7-bbc841d04835", null, "Member", "MEMBER" },
                    { "f04b2b11-eb4d-4fa5-986c-8e3ef671ff9d", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e1e39460-9f90-4e8b-a1f7-bbc841d04835");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f04b2b11-eb4d-4fa5-986c-8e3ef671ff9d");

            migrationBuilder.RenameColumn(
                name: "CompletedBg",
                table: "GuessesToday",
                newName: "CopmletedBg");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1a18b1d1-517e-4a6b-bf3b-040f01d4b5d5", null, "Admin", "ADMIN" },
                    { "abd79064-7a9d-40a4-b93f-4cb1d0a8a1a4", null, "Member", "MEMBER" }
                });
        }
    }
}
