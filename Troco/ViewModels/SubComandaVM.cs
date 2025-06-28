namespace Troco.ViewModels
{
    public class SubComandaVM
    {
        public long Id { get; set; }
        public LancamentoVM Lancamento { get; set; } = new LancamentoVM();
        public VendedorVM Vendedor { get; set; } = new VendedorVM();
        public List<TrocaVM> Trocas { get; set; } = new List<TrocaVM>();

        public decimal ValorParcialComissao { get; set; }
        public decimal ValorParcialTotal { get; set; }
    }
}
