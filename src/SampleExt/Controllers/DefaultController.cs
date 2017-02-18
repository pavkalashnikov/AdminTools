using System.Collections.Generic;
using ExtCore.Data.Abstractions;
using Extension.Data.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace SampleExt.Controllers
{
	[Route("api/[controller]")]
	public class DefaultController : Controller
	{
		private IStorage storage;

		public DefaultController(IStorage storage)
		{
			this.storage = storage;
		}

		[HttpGet]
		public string Get()
		{
			var a = storage;
			return "hello";
		}

		[HttpPost]
		public IEnumerable<object> Hello()
		{
			return storage.GetRepository<IPersonRepository>().All();
		}
	}
}
