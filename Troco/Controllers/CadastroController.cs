using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Troco.Interfaces;

namespace Troco.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadastroController<T, TVM> : ControllerBase
    where T : class
    where TVM : class
    {
        private readonly IServicoDeCadastro<T> _servico;
        private readonly IMapper _mapper;

        public CadastroController(IServicoDeCadastro<T> servico, IMapper mapper)
        {
            _servico = servico;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TVM vm)
        {
            var entidade = _mapper.Map<T>(vm);
            var resultado = await _servico.AdicionarAsync(entidade);
            return Ok(resultado);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] TVM vm)
        {
            var entidade = _mapper.Map<T>(vm);
            var resultado = await _servico.AtualizarAsync(entidade);
            return Ok(resultado);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var resultado = await _servico.DeletarAsync(id);
            if (!resultado) return NotFound();
            return NoContent();
        }
    }
}
