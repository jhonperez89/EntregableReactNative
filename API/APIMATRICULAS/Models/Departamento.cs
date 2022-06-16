using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace APIMATRICULAS.Models
{
    public class Departamento
    {
        [Required]
        [Key]
        public int id { get; set;}
        [Required]
        public string nombre { get; set; }
    }
}
