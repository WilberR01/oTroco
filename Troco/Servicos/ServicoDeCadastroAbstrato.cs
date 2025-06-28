using Microsoft.EntityFrameworkCore;
using OTroco.TrocoContext;
using Troco.Interfaces;

namespace Troco.Servicos
{
    public abstract class ServicoDeCadastroAbstrato<TEntity> : IServicoDeCadastro<TEntity>
        where TEntity : class
    {
        protected readonly TrocoDBContext _dbContext;
        protected readonly DbSet<TEntity> _dbSet;

        protected ServicoDeCadastroAbstrato(TrocoDBContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = _dbContext.Set<TEntity>();
        }

        public virtual async Task<TEntity> AdicionarAsync(TEntity entity)
        {
            _dbSet.Add(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public virtual async Task<TEntity> AtualizarAsync(TEntity entity)
        {
            _dbSet.Update(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public virtual async Task<bool> DeletarAsync(long id)
        {
            var entity = await _dbSet.FindAsync(id);
            if (entity == null)
                return false;

            _dbSet.Remove(entity);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
