namespace Troco.ViewModels
{
    public class TrocaVM
    {
        public long Id { get; set; }
        public ProdutoVM? ProdutoAntigo { get; set; }
        public ProdutoVM ProdutoNovo { get; set; } = new ProdutoVM();
    }
}
