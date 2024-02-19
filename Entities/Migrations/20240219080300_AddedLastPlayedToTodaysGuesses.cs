using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddedLastPlayedToTodaysGuesses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e1e39460-9f90-4e8b-a1f7-bbc841d04835");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f04b2b11-eb4d-4fa5-986c-8e3ef671ff9d");

            migrationBuilder.AddColumn<DateTime>(
                name: "LastPlayed",
                table: "GuessesToday",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "449c90fc-e648-4a05-aee4-ffc120280773", null, "Admin", "ADMIN" },
                    { "5cd1455f-1ce7-4ef0-b23c-992d660d3e47", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "449c90fc-e648-4a05-aee4-ffc120280773");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5cd1455f-1ce7-4ef0-b23c-992d660d3e47");

            migrationBuilder.DropColumn(
                name: "LastPlayed",
                table: "GuessesToday");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e1e39460-9f90-4e8b-a1f7-bbc841d04835", null, "Member", "MEMBER" },
                    { "f04b2b11-eb4d-4fa5-986c-8e3ef671ff9d", null, "Admin", "ADMIN" }
                });
        }
    }
}
