using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PersonalPage.Web.Migrations
{
    public partial class IconAndIconColorToTag : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Icon",
                table: "Tags",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IconColor",
                table: "Tags",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Icon",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "IconColor",
                table: "Tags");
        }
    }
}
