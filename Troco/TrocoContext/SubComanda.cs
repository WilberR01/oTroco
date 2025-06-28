namespace OTroco.TrocoContext
{
    public class SubComanda
    {
        public long Id { get; set; }
        public required Lancamento Lancamento { get; set; }
        public required Vendedor Vendedor { get; set; }
        public List<Troca> Trocas { get; set; } = new List<Troca>();

        public decimal ValorParcialComissao
        {
            get
            {
                return Vendedor.ValorAbatimento(Trocas.Select(t => t.ProdutoNovo).ToList());
            }
        }

        public decimal ValorParcialTotal
        {
            get
            {
                return Trocas.Sum(t => t.ProdutoNovo.Preco);
            }
        }
    }
}
