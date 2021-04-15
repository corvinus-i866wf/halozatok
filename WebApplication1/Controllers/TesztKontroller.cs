using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class TesztKontroller : ControllerBase
    {
        [HttpGet]
        [Route("corvinus/szerverido")]
        public IActionResult M1()
        {
            string pontosido = DateTime.Now.ToShortTimeString();
            return new ContentResult
            {
                ContentType = System.Net.Mime.MediaTypeNames.Text.Plain,
                Content = pontosido
            };
        }
     

    }

}
