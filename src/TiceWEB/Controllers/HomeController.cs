using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace TiceWEB.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Tarea()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Actividad()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }
        public IActionResult Documento()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Main()
        {
            return View();
        }
        public IActionResult Curso()
        {
            return View();
        }

        public IActionResult CrearCapa()
        {
            return View();
        }

        public IActionResult CrearCapa2()
        {
            return View();
        }

        public IActionResult CrearCapa3()
        {
            return View();
        }
        public IActionResult Error()
        {
            return View();
        }
    }
}
