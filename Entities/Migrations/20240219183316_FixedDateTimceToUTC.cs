using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class FixedDateTimceToUTC : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1ec9d934-a86a-4171-96c2-ea80e88fa34c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fb29b200-4cab-4850-8935-3d6311e45e78");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0e961b6f-7767-4069-b00d-db1400f9fe73", null, "Member", "MEMBER" },
                    { "a883dadc-15a2-4231-8a1a-fd5702a6e45f", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0e961b6f-7767-4069-b00d-db1400f9fe73");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a883dadc-15a2-4231-8a1a-fd5702a6e45f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1ec9d934-a86a-4171-96c2-ea80e88fa34c", null, "Member", "MEMBER" },
                    { "fb29b200-4cab-4850-8935-3d6311e45e78", null, "Admin", "ADMIN" }
                });
        }
    }
}
