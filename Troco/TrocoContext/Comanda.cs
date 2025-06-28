namespace OTroco.TrocoContext
{
    public class Comanda
    {
        public long Id { get; set; }
        public DateTime Abertura { get; set; }
        public DateTime? Fechamento { get; set; }
        public List<SubComanda> SubComandas { get; set; } = new List<SubComanda>();
        public decimal ValorTotal
        {
            get
            {
                return SubComandas.Sum(a => a.ValorParcialTotal);
            }
        }
        public decimal ValorTotalComissao
        {
            get
            {
                return SubComandas.Sum(a => a.ValorParcialComissao);
            }
        }
    }
}
