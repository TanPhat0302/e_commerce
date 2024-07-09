using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController: BaseApiController
    {
        [HttpGet("not-found")]

        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("unauthorised")]

        public ActionResult GetUnauthorised()
        {
            return Unauthorized();
        }

        [HttpGet("bad-request")]

        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title = "this is a bad request"});
        }

        [HttpGet("validation-error")]

        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "this is the first problem");
            ModelState.AddModelError("Problem2", "this is the second problem");
            return ValidationProblem();

        }

         [HttpGet("server-error")]

        public ActionResult GetServerError()
        {
            throw new Exception("");
        }
    }
}