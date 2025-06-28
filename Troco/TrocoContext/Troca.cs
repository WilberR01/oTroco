namespace OTroco.TrocoContext
{
    public class Troca
    {
        public long Id { get; set; }
        public Produto? ProdutoAntigo { get; set; }
        public required Produto ProdutoNovo { get; set; }
    }
}
