using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PersonalPage.Web.Migrations
{
    public partial class TagMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_PostTag_PostTagId",
                table: "Posts");

            migrationBuilder.DropForeignKey(
                name: "FK_PostTag_Posts_PostId",
                table: "PostTag");

            migrationBuilder.DropIndex(
                name: "IX_PostTag_PostId",
                table: "PostTag");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "PostTag");

            migrationBuilder.RenameColumn(
                name: "PostTagId",
                table: "Posts",
                newName: "TagId");

            migrationBuilder.RenameIndex(
                name: "IX_Posts_PostTagId",
                table: "Posts",
                newName: "IX_Posts_TagId");

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "PostTag",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TagId",
                table: "PostTag",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddUniqueConstraint(
                name: "AK_PostTag_PostId_TagId",
                table: "PostTag",
                columns: new[] { "PostId", "TagId" });

            migrationBuilder.CreateTable(
                name: "Tag",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateModified = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tag", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PostTag_TagId",
                table: "PostTag",
                column: "TagId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Tag_TagId",
                table: "Posts",
                column: "TagId",
                principalTable: "Tag",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PostTag_Posts_PostId",
                table: "PostTag",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PostTag_Tag_TagId",
                table: "PostTag",
                column: "TagId",
                principalTable: "Tag",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Tag_TagId",
                table: "Posts");

            migrationBuilder.DropForeignKey(
                name: "FK_PostTag_Posts_PostId",
                table: "PostTag");

            migrationBuilder.DropForeignKey(
                name: "FK_PostTag_Tag_TagId",
                table: "PostTag");

            migrationBuilder.DropTable(
                name: "Tag");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_PostTag_PostId_TagId",
                table: "PostTag");

            migrationBuilder.DropIndex(
                name: "IX_PostTag_TagId",
                table: "PostTag");

            migrationBuilder.DropColumn(
                name: "TagId",
                table: "PostTag");

            migrationBuilder.RenameColumn(
                name: "TagId",
                table: "Posts",
                newName: "PostTagId");

            migrationBuilder.RenameIndex(
                name: "IX_Posts_TagId",
                table: "Posts",
                newName: "IX_Posts_PostTagId");

            migrationBuilder.AlterColumn<int>(
                name: "PostId",
                table: "PostTag",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "PostTag",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PostTag_PostId",
                table: "PostTag",
                column: "PostId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_PostTag_PostTagId",
                table: "Posts",
                column: "PostTagId",
                principalTable: "PostTag",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PostTag_Posts_PostId",
                table: "PostTag",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
