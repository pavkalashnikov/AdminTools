using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AdminToolsAPI.DAL;
using AdminToolsAPI.Models;

namespace AdminToolsAPI.Controllers
{
    public class TestController : ApiController
    {
        private Context db = new Context();

        public IHttpActionResult GetAllModels()
        {
            return Json(db.TestModels.ToList());
        }

        public IHttpActionResult GetModel(int id)
        {
            return Json(db.TestModels.SingleOrDefault(m => m.Id == id));

        }
    }
}
