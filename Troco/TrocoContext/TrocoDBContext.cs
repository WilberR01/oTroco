using Microsoft.EntityFrameworkCore;

namespace OTroco.TrocoContext
{
    public class TrocoDBContext : DbContext
    {
        public TrocoDBContext(DbContextOptions<TrocoDBContext> options)
            : base(options) { }

        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Vendedor> Vendedores { get; set; }
        public DbSet<Troca> Trocas { get; set; }
        public DbSet<SubComanda> SubComandas { get; set; }
        public DbSet<Lancamento> Lancamentos { get; set; }
        public DbSet<Comanda> Comandas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Produto>()
                .HasOne(p => p.Categoria);

            modelBuilder.Entity<Vendedor>()
                .HasMany(v => v.ProdutosComissionados);

            modelBuilder.Entity<Troca>()
                .HasOne(t => t.ProdutoAntigo);
            modelBuilder.Entity<Troca>()
                .HasOne(t => t.ProdutoNovo);
;
            modelBuilder.Entity<SubComanda>()
                .HasOne(s => s.Vendedor)
                .WithMany();

            modelBuilder.Entity<SubComanda>()
                .HasOne(s => s.Lancamento);

            modelBuilder.Entity<Comanda>()
                .HasMany(c => c.SubComandas);
        }
    }
}
