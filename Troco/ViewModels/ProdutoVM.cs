namespace Troco.ViewModels
{
    public class ProdutoVM
    {
        public long Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public decimal Preco { get; set; }
        public CategoriaVM? Categoria { get; set; }
    }
}
