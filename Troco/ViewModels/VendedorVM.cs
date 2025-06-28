namespace Troco.ViewModels
{
    public class VendedorVM
    {
        public long Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public decimal Comissao { get; set; }
        public List<ProdutoVM> ProdutosComissionados { get; set; } = new List<ProdutoVM>();
        public decimal ValorAbatimento { get; set; } = 0;
    }
}
