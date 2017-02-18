using System.Collections.Generic;
using ExtCore.Data.Abstractions;
using Extension.Data.Models;

namespace Extension.Data.Abstractions
{
	public interface IPersonRepository : IRepository
	{
		IEnumerable<Person> All();
	}
}
