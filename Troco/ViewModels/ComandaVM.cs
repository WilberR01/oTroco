namespace Troco.ViewModels
{
    public class ComandaVM
    {
        public long Id { get; set; }
        public DateTime Abertura { get; set; }
        public DateTime? Fechamento { get; set; }
        public List<SubComandaVM> SubComandas { get; set; } = new List<SubComandaVM>();

        public decimal ValorTotal { get; set; }
        public decimal ValorTotalComissao { get; set; }
    }
}
