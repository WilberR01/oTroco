using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Troco.Migrations
{
    /// <inheritdoc />
    public partial class CorrigeListaNoVendedor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produtos_Vendedores_VendedorId",
                table: "Produtos");

            migrationBuilder.DropIndex(
                name: "IX_Produtos_VendedorId",
                table: "Produtos");

            migrationBuilder.DropColumn(
                name: "VendedorId",
                table: "Produtos");

            migrationBuilder.CreateTable(
                name: "ProdutoVendedor",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    VendedorId = table.Column<long>(type: "bigint", nullable: false),
                    ProdutoId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProdutoVendedor", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProdutoVendedor_Produtos_ProdutoId",
                        column: x => x.ProdutoId,
                        principalTable: "Produtos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProdutoVendedor_Vendedores_VendedorId",
                        column: x => x.VendedorId,
                        principalTable: "Vendedores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProdutoVendedor_ProdutoId",
                table: "ProdutoVendedor",
                column: "ProdutoId");

            migrationBuilder.CreateIndex(
                name: "IX_ProdutoVendedor_VendedorId",
                table: "ProdutoVendedor",
                column: "VendedorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProdutoVendedor");

            migrationBuilder.AddColumn<long>(
                name: "VendedorId",
                table: "Produtos",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_VendedorId",
                table: "Produtos",
                column: "VendedorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Produtos_Vendedores_VendedorId",
                table: "Produtos",
                column: "VendedorId",
                principalTable: "Vendedores",
                principalColumn: "Id");
        }
    }
}
