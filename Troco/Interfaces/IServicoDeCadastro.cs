namespace Troco.Interfaces
{
    public interface IServicoDeCadastro<TEntity>
        where TEntity : class
    {
        Task<TEntity> AdicionarAsync(TEntity entity);
        Task<TEntity> AtualizarAsync(TEntity entity);
        Task<bool> DeletarAsync(long id);
    }
}
