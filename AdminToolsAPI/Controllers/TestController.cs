using System.Linq;
using System.Web.Http;
using AdminToolsAPI.Models;

namespace AdminToolsAPI.Controllers
{
    public class TestController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

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
