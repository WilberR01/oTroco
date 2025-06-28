using OTroco.TrocoContext;

namespace Troco.Servicos
{
    public class ServicoDeCadastro<TEntity> : ServicoDeCadastroAbstrato<TEntity>
    where TEntity : class
    {
        public ServicoDeCadastro(TrocoDBContext dbContext) : base(dbContext) { }
    }
}
