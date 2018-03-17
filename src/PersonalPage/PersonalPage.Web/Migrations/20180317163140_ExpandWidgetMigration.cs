using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PersonalPage.Web.Migrations
{
    public partial class ExpandWidgetMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Color",
                table: "Widgets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Widgets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Page",
                table: "Widgets",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Color",
                table: "Widgets");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "Widgets");

            migrationBuilder.DropColumn(
                name: "Page",
                table: "Widgets");
        }
    }
}
