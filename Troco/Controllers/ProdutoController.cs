using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OTroco.TrocoContext;
using Troco.Interfaces;
using Troco.ViewModels;

namespace Troco.Controllers
{
    [ApiController]
    [Route("produto")]
    public class ProdutoController : CadastroController<Produto, ProdutoVM>
    {
        private readonly IMapper _mapper;
        private readonly IServicoDeCadastro<Produto> _servico;
        public ProdutoController(IServicoDeCadastro<Produto> servico, IMapper mapper) : base(servico, mapper)
        {
            _mapper = mapper;
            _servico = servico;
        }
    }
}
