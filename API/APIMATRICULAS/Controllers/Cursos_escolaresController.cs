using APIMATRICULAS.Data;
using APIMATRICULAS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace APIMATRICULAS.Controllers
{
    [Route("api/[Controler]")]
    [ApiController]
    public class Cursos_escolaresController : ControllerBase
    {
        private readonly ConjuntoDeDatosContexto _context;

        public Cursos_escolaresController(ConjuntoDeDatosContexto contexto)
        {
            _context = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Curso_escolar>>> GetCurso_escolarItems()
        {
            return await _context.Curso_escolarItems.ToListAsync();
        }
    }
}
