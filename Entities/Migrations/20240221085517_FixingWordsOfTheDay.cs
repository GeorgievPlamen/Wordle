using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class FixingWordsOfTheDay : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "43400c3d-aef0-44c9-b10f-cdea570313bf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5d961abc-7530-4dee-b0c5-7255db6d1cac");

            migrationBuilder.CreateTable(
                name: "WordsOfTheDay",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    LastPlayed = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    EnWord = table.Column<string>(type: "text", nullable: true),
                    BgWord = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WordsOfTheDay", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1435b84b-5e25-4328-bf7b-6da78f8a5c44", null, "Admin", "ADMIN" },
                    { "90c9fa01-bb85-4e14-ad3c-9aa84bb62355", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WordsOfTheDay");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1435b84b-5e25-4328-bf7b-6da78f8a5c44");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "90c9fa01-bb85-4e14-ad3c-9aa84bb62355");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "43400c3d-aef0-44c9-b10f-cdea570313bf", null, "Admin", "ADMIN" },
                    { "5d961abc-7530-4dee-b0c5-7255db6d1cac", null, "Member", "MEMBER" }
                });
        }
    }
}
