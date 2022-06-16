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
    public class Alumnos_se_matriculan_asignaturasController : ControllerBase
    {
        
        private readonly ConjuntoDeDatosContexto _context;

        public Alumnos_se_matriculan_asignaturasController(ConjuntoDeDatosContexto contexto)
        {
            _context = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Alumno_se_matricula_asignatura>>> GetAlumno_se_matricula_asignaturaItems()
        {
            return await _context.Alumno_se_matricula_asignaturaItems.ToListAsync();
        }
    }
}
